FROM node:24-alpine

WORKDIR /app

# СЛОЙ 1: будет пересобираться при изменении package.json
COPY package*.json ./
RUN npm ci

# СЛОЙ 2: Сущность Prisma
COPY prisma ./prisma/
COPY prisma.config.js ./
RUN npx prisma generate

# --- СЛОЙ 3: Исходный код
COPY . .

USER node

EXPOSE 5000

CMD ["npm", "run", "start"]
