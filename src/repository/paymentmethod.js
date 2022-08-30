import PaymentMethod from '../models/payment_method.model'
import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId
export const getAllPaymentMethods = async (pageSize = 10, pageNum = 1) => {
  const options = {
    page: pageNum,
    limit: pageSize
  }

  return await PaymentMethod.paginate({}, options).catch((err) => {
    logger.error(`An error occurred when retrieving PaymentMethods - err: ${err.message}`)
  })
}

export const insertPaymentMethod = async (data) => {
  return await new PaymentMethod(data).save()
}

export const findPaymentMethod = async (filters) => {
  return await PaymentMethod.findOne(filters)
}
