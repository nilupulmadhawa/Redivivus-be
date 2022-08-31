import PaymentMethod from '../models/payment_method.model'
import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId


export const insertPaymentMethod = async (data) => {
  return await new PaymentMethod(data).save()
}

