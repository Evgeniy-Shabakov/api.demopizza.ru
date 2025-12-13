import express from 'express'
import authRouter from './api/v1/authRouter.js'
import countryRouter from './api/v1/countryRouter.js'
import cityRouter from './api/v1/cityRouter.js'
import restaurantScheduleRouter from './api/v1/restaurantScheduleRouter.js'
import restaurantRouter from './api/v1/restaurantRouter.js'
import deliveryZoneRouter from './api/v1/deliveryZoneRouter.js'
import userRouter from './api/v1/userRouter.js'
import addressRouter from './api/v1/addressRouter.js'
import categoryRouter from './api/v1/categoryRouter.js'
import productRouter from './api/v1/productRouter.js'
import productRestaurantRouter from './api/v1/productRestaurantRouter.js'

const router = express.Router()

router.use('/health', (req, res) => {
   res.json({
      status: 'OK',
      timestamp: new Date().toISOString()
   })
})

router.use('/api/v1/auth', authRouter)
router.use('/api/v1/countries', countryRouter)
router.use('/api/v1/cities', cityRouter)
router.use('/api/v1/restaurant-schedules', restaurantScheduleRouter)
router.use('/api/v1/restaurants', restaurantRouter)
router.use('/api/v1/delivery-zones', deliveryZoneRouter)
router.use('/api/v1/users', userRouter)
router.use('/api/v1/addresses', addressRouter)
router.use('/api/v1/categories', categoryRouter)
router.use('/api/v1/products', productRouter)
router.use('/api/v1/product-restaurants', productRestaurantRouter)

export default router