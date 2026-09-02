const isDev = process.env.NODE_ENV === 'development'

export const loggerConfig = {
   level: 'warn',

   transport: isDev
      ? {
         target: 'pino-pretty',
         options: {
            colorize: true,
            translateTime: 'HH:MM:ss',
            ignore: 'pid,hostname',
         },
      }
      : undefined
}
