import { BaseResource } from "./BaseResource.js"

export class companyResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         name: record.name,

         brandName: record.brandName,
         tagline: record.tagline,

         logoPath: record.logoPath,
         faviconPath: record.faviconPath,

         phoneForOrders: record.phoneForOrders,
         aboutUs: record.aboutUs,
         contacts: record.contacts,

         linksSocial: record.linksSocial,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}