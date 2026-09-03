import { z } from 'zod'
import { restaurantClientReply } from '../restaurant/restaurant.client.reply.js'
import { deliveryZoneClientReply } from '../delivery-zone.client.reply.js'

export const cityClientReply = z.object({
   id: z.number().int(),
   name: z.string(),
   mapIframe: z.string().nullable(),

   restaurants: z.array(restaurantClientReply).optional(),
   deliveryZones: z.array(deliveryZoneClientReply).optional()
})
