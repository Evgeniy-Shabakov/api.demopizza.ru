export function pathNotFoundHandler(req, res, next) {
   res.status(404).json({
      data: {
         message: `Can't find ${req.originalUrl} on the server`
      }
   })
}