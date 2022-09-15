import Customer from '../models/customer'
import logger from '../utils/logger'

export const createCustomer = async (customer) => {
  const customerMade = (await new Customer(customer).save()).toObject()
  delete customerMade.password
  return customerMade
}

export const getAllCustomers = async ({ sort = {}, filter = {}, pageNum = 1, pageSize = 10 }) => {
  const options = {
    page: pageNum,
    limit: pageSize,
    collation: {
      locale: 'en'
    }
  }

  if (Object.keys(sort).length > 0) options.sort = sort

  if (filter.member_count) {
    filter.members = { $size: Number(filter.member_count) }
    delete filter.member_count
  }

  return await Customer.aggregatePaginate(
    Customer.aggregate([
      {
        $match: filter
      },
      { $unset: ['password', 'verification_code'] }
    ]),
    options
  ).catch((err) => {
    logger.error(`An error occurred when retrieving customers - err: ${err.message}`)
    throw err
  })
}

export const getOneCustomer = async (filters, returnPassword = false) => {
  const customer = await Customer.findOne(filters).lean()
  if (!customer) return null

  if (!returnPassword) delete customer.password
  return customer
}

export const findOneAndUpdateCustomer = async (filters, data) => {
  const customer = await Customer.findOneAndUpdate(filters, data, { new: true }).lean()
  if (!customer) return null
  return customer
}

// export const getAllCustomerIds = async (filters = {}) => {
//   const customers = await Customer.find(filters).select('_id').lean()
//   return customers.map((customer) => customer._id)
// }

export const findOneAndRemoveCustomer = async (filters) => {
  return await Customer.findOneAndRemove(filters)
}