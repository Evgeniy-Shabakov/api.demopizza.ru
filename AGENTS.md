# AGENTS.md

Fastify 5 (ESM) REST API for a pizza delivery service. PostgreSQL via Prisma 7 + Zod schemas. No frontend code here.

## Commands

- `npm run dev` — start API with hot reload (`node --watch src/server.js`). Needs Postgres + generated Prisma client.
- `npm run dev-seed` / `npm run prod-seed` — imperative seed scripts (not `prisma db seed`). They fail if `DATABASE_URL` is unset.
- `npm run delete-old-refresh-tokens` — one-off cleanup job.
- `npx prisma migrate dev` (local) / `npx prisma migrate deploy` (Docker entrypoint runs this).
- `npx prisma generate` — must re-run after any schema/model change; client outputs to `generated/prisma/` (gitignored).
- `npm test` is a trap: scripts declare `vitest` but it is NOT installed and there are no test files. Verification is manual via `.rest` files (see below).

## Environment & Docker

- `.env` is committed and is the source of truth for dev. Note: `DATABASE_URL` is **commented out** in `.env`; the local `prisma migrate`/seed scripts need it set explicitly, e.g. `DATABASE_URL=postgresql://db_user:db_password@localhost:5433/db_name?schema=public`.
- Standard local dev runs through `docker compose` (override file is gitignored). Postgres is exposed on host port **5433**, API on **5000**. The override mounts the repo with `node --watch` hot reload and runs `prisma generate` + `migrate deploy` at startup.
- Gotcha: `generated/prisma/` is frequently root-owned (generated inside the container), so a host-side `npx prisma generate` dies with `EACCES: permission denied`. Fix: `sudo rm -rf generated/prisma && npx prisma generate`.
- `.env` JWT secrets are real dev/test credentials — do not rotate or commit new ones. JWT lives in httpOnly cookies (`employeeAccessToken`/`employeeRefreshToken`, and the client equivalents); dev lifetimes are very short (1m/2m).

## Architecture & conventions

- Module alias: package.json `imports` maps `#*` → `./src/*`. Always import with the `#` alias **and** the explicit file extension, e.g. `#lib/prisma.js`, `#config/v1/helmet.config.js`. New files must be addressed exactly as they are used.
- Prisma client: `src/lib/prisma.js` imports the generated client from `../../generated/prisma/client.ts` — a TypeScript file. Node 24 runs it via native type-stripping; do not "fix" it to a JS import.
- Prisma schema is multi-file: `prisma/schema.prisma` is just a stub generator (provider `prisma-client`, output `../generated/prisma`). Models live in `prisma/models/*.prisma`; `prisma.config.js` points `schema` at the `prisma/` dir.
- API entry: `src/server.js` → `src/app.js` (plugins, auth configs, error handlers) → `src/router/v1/router.js` (registers `admin.routes.js`, `client.routes.js`, `payment.routes.js` under `/api/v1`).
- Modules under `src/modules/v1/{admin,client,payment,shared}`. Each resource follows a naming convention for files — `*.routes.js`, `*.schema.js`, `*.body.js`, `*.reply.js`, `*.controller.js`, `*.service.js` — with login/refresh/me/token-info as subdirectories for auth. Column/type names are ground truth in the Prisma models, not the API replies.
- Validation uses Zod via `@fastify/type-provider-zod` (validator + serializer compilers set in `app.js`). Endpoint schemas live in `*.schema.js` / `*.body.js` / `*.reply.js`.
- Static user uploads are served from `storage/public` via `@fastify/static` (root `/`). `storage/public/images/products/*` is gitignored, keep only `.gitkeep`.

## "Tests" and request files

- No automated test suite. The `__tests__`/`__test__` dirs under modules hold `.rest` files (VSCode REST Client syntax) for manual API checks against `http://127.0.0.1:5000`. Root-level `auth.admin.rest`/`auth.client.rest` are gitignored.
- Repo comments are written in Russian; match that style.