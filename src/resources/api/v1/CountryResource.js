import { BaseResource } from "./BaseResource.js"
import { CityResource } from "./CityResource.js"

export class CountryResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         cities: record.cities ? CityResource.collection(record.cities) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}