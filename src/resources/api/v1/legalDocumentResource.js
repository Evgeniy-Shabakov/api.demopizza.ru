import { BaseResource } from "./BaseResource.js"

export class legalDocumentResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         filePath: record.filePath,
         link: record.link,
         htmlContent: record.htmlContent,
         description: record.description,
         isActive: record.isActive,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}