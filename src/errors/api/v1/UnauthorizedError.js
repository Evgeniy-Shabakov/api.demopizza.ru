
export class UnauthorizedError extends Error {
   constructor(message = 'Unauthorized error') {
      super(message)
   }
}