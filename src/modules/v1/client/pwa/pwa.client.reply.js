import { z } from 'zod'

export const pwaClientReply = z.object({
   name: z.string(),
   short_name: z.string(),
   start_url: z.string(),
   theme_color: z.string(),
   background_color: z.string(),
   display: z.string(),
   icons: z.array(z.object({
      src: z.string(),
      sizes: z.string(),
      type: z.string()
   }))
})