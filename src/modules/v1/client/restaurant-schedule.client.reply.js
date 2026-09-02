import { z } from 'zod'

export const restaurantScheduleClientReply = z.object({
   id: z.number().int(),

   name: z.string(),

   mondayIsOpen: z.boolean(),
   mondayOpenTime: z.iso.time().nullish(),
   mondayCloseTime: z.iso.time().nullish(),

   tuesdayIsOpen: z.boolean(),
   tuesdayOpenTime: z.iso.time().nullish(),
   tuesdayCloseTime: z.iso.time().nullish(),

   wednesdayIsOpen: z.boolean(),
   wednesdayOpenTime: z.iso.time().nullish(),
   wednesdayCloseTime: z.iso.time().nullish(),

   thursdayIsOpen: z.boolean(),
   thursdayOpenTime: z.iso.time().nullish(),
   thursdayCloseTime: z.iso.time().nullish(),

   fridayIsOpen: z.boolean(),
   fridayOpenTime: z.iso.time().nullish(),
   fridayCloseTime: z.iso.time().nullish(),

   saturdayIsOpen: z.boolean(),
   saturdayOpenTime: z.iso.time().nullish(),
   saturdayCloseTime: z.iso.time().nullish(),

   sundayIsOpen: z.boolean(),
   sundayOpenTime: z.iso.time().nullish(),
   sundayCloseTime: z.iso.time().nullish(),
})


