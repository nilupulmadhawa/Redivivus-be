import { findPaymentMethod, getAllPaymentMethods,insertPaymentMethod } from '../repository/paymentmethod'


export const retrieveAllPaymentMethods = async (page,limit) => {
  return  getAllPaymentMethods(page,limit)
}

export const createPaymentMethod = async (data) => {
  const PaymentMethod = await findPaymentMethod({ cardNumber: data.cardNumber })
  if (PaymentMethod) return { status: 400, message: 'This payment method  already added' }
  return await insertPaymentMethod({ ...data})
}