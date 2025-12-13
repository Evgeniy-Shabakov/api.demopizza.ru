import { z } from 'zod'

export const restaurantBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 100 символов')
      .max(100, 'Название должно быть от 2 до 100 символов'),

   cityId: z
      .int('Город обязателен для заполнения')
      .min(1, 'Должен быть положительным целым числом'),

   restaurantScheduleId: z
      .int('Расписание обязательно для заполнения')
      .min(1, 'Должен быть положительным целым числом'),

   deliveryToAddressAvailable: z
      .boolean('Доставка по адресу должна быть true или false'),

   pickUpAtCounterAvailable: z
      .boolean('Самовывоз у бара должен быть true или false'),

   pickUpAtCarWindowAvailable: z
      .boolean('Самовывоз в окне выдачи для авто должен быть true или false'),

   atRestaurantToTableAvailable: z
      .boolean('Подача в ресторане у бара должна быть true или false'),

   atRestaurantAtCounterAvailable: z
      .boolean('Подача в ресторане к столику должна быть true или false'),

   deliveryToRestaurantParkingAvailable: z
      .boolean('Доставка на парковку ресторана должна быть true или false'),

   isActive: z
      .boolean('Статус активности должен быть булевым значением'),

   street: z
      .string().trim()
      .min(1, 'Улица обязательна')
      .max(255, 'Улица должна быть от 1 до 255 символов'),

   house: z
      .string().trim()
      .min(1, 'Номер дома обязателен')
      .max(10, 'Номер дома должен быть от 1 до 10 символов'),

   addressAsString: z
      .string().trim()
      .max(500, 'Адрес строкой не должен превышать 500 символов')
}).strict()