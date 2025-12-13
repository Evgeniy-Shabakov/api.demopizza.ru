import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
import { loginController } from '#controllers/api/v1/auth/loginController.js'
import { refreshTokenController } from '#controllers/api/v1/auth/refreshTokenController.js'

const router = express.Router()

router.post('/login', loginController)
router.post('/refresh-token', refreshTokenController)

router.get('/user', verifyJWTAccessToken, (req, res) => {
   res.json({ user: req.user })
})

export default router