import { ErrorForbidden } from "./types/error.forbidden.js"
import { ErrorUnauthorized } from "./types/error.unauthorized.js"

export function errorHandler(error, request, reply) {

   if (error.validation) {
      return reply.status(400).send({
         statusCode: 400,
         code: 'VALIDATION_ERROR',
         message: `Ошибка валидации данных в ${error.validationContext}`,
         details: error.validation.map(v => ({
            path: v.instancePath?.replace(/^\//, '') || v.keyword || 'unknown',
            message: v.message
         }))
      })
   }

   if (error.code === 'P2025') {
      return reply.status(404).send({
         statusCode: 404,
         code: 'NOT_FOUND',
         message: 'Запись не найдена в БД',
      })
   }

   if (error.code === 'P2002') {
      const { field, table } = transformPrismaErrorP2002(error)

      return reply.status(409).send({
         statusCode: 409,
         code: 'CONFLICT',
         message: `Поле ${field} должно быть уникальным`,
         details: { field, table }
      })
   }

   if (error.code === 'P2003') {
      return reply.status(409).send({
         statusCode: 409,
         code: 'FOREIGN_KEY_VIOLATION',
         message: request.method === 'DELETE'
            ? 'Запись нельзя удалить, так как на нее ссылаются другие данные в БД'
            : 'Указанный связанный объект (ID) не найден в базе данных'
      })
   }

   if (error instanceof ErrorUnauthorized) {
      return reply.status(401).send({
         statusCode: 401,
         code: 'UNAUTHORIZED',
         message: error.message || 'Ошибка авторизации'
      })
   }

   if (error instanceof ErrorForbidden) {
      return reply.status(403).send({
         statusCode: 403,
         code: 'FORBIDDEN',
         message: error.message || 'Недостаточно прав доступа'
      })
   }

   if (error.statusCode && error.statusCode !== 500) {
      return reply.status(error.statusCode).send({
         statusCode: error.statusCode,
         code: error.code || 'BAD_REQUEST',
         message: error.message
      })
   }

   request.log.error(error)

   return reply.status(500).send({
      statusCode: 500,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Произошла внутренняя ошибка сервера',
   })
}

function transformPrismaErrorP2002(err) {
   // 1. Получаем сырой текст ошибки из доступных свойств Prisma
   const raw = err.meta?.constraint || err.meta?.driverAdapterError?.cause?.originalMessage || ''

   // 2. Ищем имя ограничения, которое заканчивается на _key (игнорируя кавычки и пробелы)
   const match = raw.match(/"?([^"\s]+_key)"?/)
   const constraint = match?.[1] || null

   if (!constraint) {
      return { field: 'unknown', table: 'unknown' }
   }

   // 3. Отрезаем суффикс "_key" с конца строки
   const body = constraint.slice(0, -4) // "-4" так как у "_key" длина 4 символа

   // 4. Разбиваем строку по "_" на части
   const parts = body.split('_')

   // 5. Забираем последний элемент как поле, а всё остальное склеиваем в имя таблицы
   return {
      field: parts.pop() || 'unknown',
      table: parts.join('_') || 'unknown'
   }
}