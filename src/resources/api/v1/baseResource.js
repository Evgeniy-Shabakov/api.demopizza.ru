export class BaseResource {
   constructor(record, meta = null) {
      const data = this.transform(record)

      if (meta) {
         this.meta = meta
         this.data = data
      } else {
         Object.assign(this, data)
      }
   }

   transform(record) {
      return record
   }

   formatDate(dateString, locale = 'ru-RU') {
      return dateString ? new Date(dateString).toLocaleString(locale) : undefined
   }

   static collection(records, meta) {
      if (meta) {
         return {
            meta: meta,
            data: records.map(item => new this(item))
         }
      }

      return records.map(item => new this(item))
   }
}