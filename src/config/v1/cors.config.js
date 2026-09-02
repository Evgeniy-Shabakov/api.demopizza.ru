export const corsConfig = {
   origin: [
      process.env.ADMIN_PANEL_URL,
      process.env.CLIENT_URL
   ],
   credentials: true,
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}
