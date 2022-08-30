import { getAllPaymentMethods,insertPaymentMethod } from '../repository/paymentmethod'


export const retrieveAllPaymentMethods = async (page,limit) => {
  return  getAllPaymentMethods(page,limit)
}

export const createPaymentMethod = async (data) => {
  const Employee = await findEmployee({ name: data.name })
  if (Employee) return { status: 400, message: 'Employee name already taken' }
  return await insertPaymentMethod({ ...data, creator: user._id })
}