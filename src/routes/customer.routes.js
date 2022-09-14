import express from 'express'
import { celebrate, Segments } from 'celebrate'
import { create , getAll , getById} from '../controllers/customer'
import { adminProtect } from '../middleware/auth'
import { registerSchema } from '../validations/customer'

const customerRouter = express.Router()

customerRouter.post('/', celebrate({ [Segments.BODY]: registerSchema }), create)
customerRouter.get('/', getAll)
customerRouter.get('/:id', getById)
// customerRouter.put('/change_password', celebrate({ [Segments.BODY]: changePasswordSchema }), changePassword)
// customerRouter.put('/:id', celebrate({ [Segments.PARAMS]: userIdSchema, [Segments.BODY]: updateSchema }), update)


export default customerRouter