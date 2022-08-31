import asyncHandler from '../middleware/async'
import { createContactUsEntry} from '../services/contactus'
import { makeResponse } from '../utils/response'


export const  storeContactUsDetails= asyncHandler(async (req, res) => {
//   const result = await createPaymentMethod (req.body)
//   if (!result) return makeResponse({ res, status: 500, message: 'Failed to add Payment method' })
//   if (result.status) return makeResponse({ res, ...result })
//   return makeResponse({ res, message: 'Payment method added successfully' })
})