import Company from '../models/company'
import logger from '../utils/logger'

export const createCompany = async (company) => {
  const companyMade = (await new Company(company).save()).toObject()
  return companyMade
}

export const getAllCompanys = async ({ sort = {}, filter = {}, page, limit = 10 }) => {
  const options = {
    page,
    limit,
    collation: {
      locale: 'en'
    }
  }

  if (Object.keys(sort).length > 0) options.sort = sort

  if (filter.member_count) {
    filter.members = { $size: Number(filter.member_count) }
    delete filter.member_count
  }

  const aggregateQuery = () =>
    Company.aggregate([
      {
        $match: filter
      },
      { $unset: ['password', 'verification_code'] }
    ])

  return await (page ? Company.aggregatePaginate(aggregateQuery(), options) : aggregateQuery()).catch((err) => {
    logger.error(`An error occurred when retrieving companys - err: ${err.message}`)
    throw err
  })
}

export const getOneCompany = async (filters, returnPassword = false) => {
  const company = await Company.findOne(filters).lean()
  if (!company) return null

  if (!returnPassword) delete company.password
  return company
}

export const findOneAndUpdateCompany = async (filters, data) => {
  const company = await Company.findOneAndUpdate(filters, data, { new: true }).lean()
  if (!company) return null

  delete company.password
  return company
}

export const findOneAndRemoveCompany = async (filters) => {
  return await Company.findOneAndRemove(filters)
}

