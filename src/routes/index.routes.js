import express from 'express'
//import authRouter from './auth.routes'
import customerRouter from './customer.routes'

import { protect, adminProtect } from '../middleware/auth'

const router = express.Router()

//router.use('/auth', authRouter)
router.use('/customer', customerRouter)

export default router