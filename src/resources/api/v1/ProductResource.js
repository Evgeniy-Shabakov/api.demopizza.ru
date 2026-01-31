import { BaseResource } from "./BaseResource.js"
import { CategoryResource } from "./CategoryResource.js"

export class ProductResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         categoryId: record.categoryId,

         imagePath: record.imagePath,
         descriptionShort: record.descriptionShort,
         descriptionFull: record.descriptionFull,
         priceDefault: record.priceDefault,
         positionInCategory: record.positionInCategory,
         isActive: record.isActive,

         category: record.category ? new CategoryResource(record.category) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}