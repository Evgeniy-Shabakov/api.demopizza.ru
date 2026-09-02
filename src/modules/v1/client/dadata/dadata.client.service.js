import axios from 'axios'

export const dadataClientService = {
   async suggestions(query) {

      const records = await axios.post(process.env.DADATA_ADDRESS_API_URL,
         {
            query: query
         },
         {
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization': `Token ${process.env.DADATA_API_KEY}`
            },
            timeout: 5000
         })

      return records.data.suggestions.map(s => ({
         value: s.value,
         city: s.data.city,
         cityWithType: s.data.city_with_type,
         street: s.data.street,
         house: s.data.house,
         flat: s.data.flat,
         latitude: s.data.geo_lat,
         longitude: s.data.geo_lon,
      }))
   }
}
