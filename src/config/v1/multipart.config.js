
export const multipartConfig = {
   limits: {
      fileSize: 5 * 1024 * 1024, // Ограничение: 5 МБ
      files: 1     
   },
   attachFieldsToBody: true 
}