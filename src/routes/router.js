import express from 'express'
import authenticationRouter from './api/v1/authenticationRouter.js'
import countryRouter from './api/v1/countryRouter.js'
import cityRouter from './api/v1/cityRouter.js'
import restaurantScheduleRouter from './api/v1/restaurantScheduleRouter.js'
import restaurantRouter from './api/v1/restaurantRouter.js'
import deliveryZoneRouter from './api/v1/deliveryZoneRouter.js'
import employeeRouter from './api/v1/employeeRouter.js'
import addressRouter from './api/v1/addressRouter.js'
import categoryRouter from './api/v1/categoryRouter.js'
import productRouter from './api/v1/productRouter.js'
import productRestaurantRouter from './api/v1/productRestaurantRouter.js'
import orderRouter from './api/v1/orderRouter.js'
import designRouter from './api/v1/designRouter.js'
import legalDocumentRouter from './api/v1/legalDocumentRouter.js'
import companyRouter from './api/v1/companyRouter.js'
import promocodeRouter from './api/v1/promocodeRouter.js'

const router = express.Router()

router.use('/health', (req, res) => {
   res.json({
      status: 'OK',
      timestamp: new Date().toISOString()
   })
})

router.use('/api/v1/auth', authenticationRouter)
router.use('/api/v1/countries', countryRouter)
router.use('/api/v1/cities', cityRouter)
router.use('/api/v1/restaurant-schedules', restaurantScheduleRouter)
router.use('/api/v1/restaurants', restaurantRouter)
router.use('/api/v1/delivery-zones', deliveryZoneRouter)
router.use('/api/v1/employees', employeeRouter)
router.use('/api/v1/addresses', addressRouter)
router.use('/api/v1/categories', categoryRouter)
router.use('/api/v1/products', productRouter)
router.use('/api/v1/product-restaurants', productRestaurantRouter)
router.use('/api/v1/orders', orderRouter)
router.use('/api/v1/designs', designRouter)
router.use('/api/v1/legal-documents', legalDocumentRouter)
router.use('/api/v1/company', companyRouter)
router.use('/api/v1/promocodes', promocodeRouter)

export default router