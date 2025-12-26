
export class ForbiddenError extends Error {
   constructor(message = 'Forbidden error') {
      super(message)
   }
}