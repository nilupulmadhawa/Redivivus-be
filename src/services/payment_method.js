import { logger } from 'handlebars'
import { findPaymentMethod, getAllPaymentMethods,insertPaymentMethod,findAndUpdatePaymentMethod,findAndDeletePaymentMethod } from '../repository/payment_method'
import { makeResponse } from '../utils/response'

export const retrieveAllPaymentMethods = async (page,limit) => {
  return  getAllPaymentMethods(page,limit)
}

export const createPaymentMethod = async (data) => {
  const PaymentMethod = await findPaymentMethod({ cardNumber: data.cardNumber })
  if (PaymentMethod) return { status: 400, message: 'This payment method  already added' }
  return await insertPaymentMethod({ ...data})
}
export const getOnePaymentMethodDetails=async(payment_method_id)=>{
  const result= await findPaymentMethod({ _id: payment_method_id })
 console.log(result)
 if (result.length === 0)
    return {
      status: 400,
      message: "This payment method doesn't exist "
    }
  return {status:200,data:result,message:'Payment method retrieved successfully'}
}

export const updatePaymentMethodById =async(payment_method_id,data)=>{
let PaymentMethod = await findPaymentMethod({ _id: payment_method_id })
  if (!PaymentMethod) return { status: 400, message: "Payment method doesn't exist to update" }
  // if (data.cardNumber) {
  //   const check = await findEmployee({ cardNumber: data.cardNumber })
  //   if (check) return { status: 400, message: 'Employee name already taken' }
  // }
  // if (Employee.creator_lock && Employee.creator.toString() !== user._id.toString()) return { status: 403, message: 'You are not authorized to update this Employee' }
  // if (data.max_score) {
  //   const r = await getSubmissions({ filter: { Employee: Employee_id } }).then((res) => {
  //     return res
  //   })
  //   if (r.totalDocs > 0) return { status: 400, message: 'Cannot update Employee with submissions' }
  // }
  
  return await findAndUpdatePaymentMethod ({ _id: payment_method_id }, data)
}

export const deletePaymentMethod=async(payment_method_id)=>{
  let PaymentMethod = await findPaymentMethod({ _id: payment_method_id })
   if (!PaymentMethod) return { status: 400, message: "Payment method doesn't exist to delete" }
    return await findAndDeletePaymentMethod ({ _id: payment_method_id })
}