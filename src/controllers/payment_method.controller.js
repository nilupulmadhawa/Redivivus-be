import asyncHandler from '../middleware/async'
import { retrieveAllPaymentMethods,createPaymentMethod} from '../services/paymentmethod'
import { makeResponse } from '../utils/response'

export const getAllPaymentMethods = asyncHandler(async (req, res) => {
  const data = await retrieveAllPaymentMethods(req.query.page,req.query.limit)
  return makeResponse({ res, data, message: 'Employees retrieved successfully' })
})

export const addPaymentMethod = asyncHandler(async (req, res) => {
  const result = await createPaymentMethod (req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Failed to add Payment method' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Payment method added successfully' })
})