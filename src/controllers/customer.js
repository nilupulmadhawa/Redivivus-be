import asyncHandler from '../middleware/async'
import { addNewCustomer,changePasswordService ,getCustomers, getCustomerByID, updateCustomerdetails} from '../services/customer'
import { makeResponse } from '../utils/response'


export const create = asyncHandler(async (req, res) => {
  console.log(req.body)
  const result = await addNewCustomer(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Failed to add user' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, status: 200, data: result, message: 'Customer added successfully' })
})

export const getAll = asyncHandler(async (req, res) => {
  const users = await getCustomers(req.query)
  return makeResponse({ res, status: 200, data: users, message: 'Customers retrieved succesfully' })
})

export const getById = asyncHandler(async (req, res) => {
  const customer = await getCustomerByID(req.params.id)
  if (!customer) return makeResponse({ res, status:500, message : 'Failed to retrieve customer'})
  return makeResponse({ res, status: 200, data: customer, message: 'Customer retrieved succesfully' })
})

// export const update = asyncHandler(async (req, res) => {
//   const result = await updateCustomerdetails(req.params.id, req.user, req.body)
//   if (!result) return makeResponse({ res, status: 500, message: 'Failed to update user' })
//   if (result.status) return makeResponse({ res, ...result })
//   return makeResponse({ res, status: 200, data: result, message: 'Customer updated successfully' })
// })


// export const changePassword = asyncHandler(async (req, res) => {
//   const result = await changePasswordService(req.user, req.body.old_password, req.body.new_password)
//   if (!result) return makeResponse({ res, status: 500, message: 'Failed to change password' })
//   if (result.status) return makeResponse({ res, ...result })
//   return makeResponse({ res, message: 'Password changed successfully' })
// })