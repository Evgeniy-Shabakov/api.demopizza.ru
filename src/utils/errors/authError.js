
export class AuthError extends Error {
   constructor(status = 401, message = 'Unauthorized') {
      super(message)
      this.status = status
   }
}