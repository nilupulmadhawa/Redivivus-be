import { logger } from 'handlebars'
import { pickupRequests, findPickupRequest, insertPickupRequest, findAndUpdatePickupRequest, removePickupRequest } from '../repository/pickupRequest'

export const createPickupRequest = async (data) => {
  const pickupRequest = await findPickupRequest({ requestNo: data.requestNo })
  if (pickupRequest) return { status: 400, message: 'Already added' }
  return await insertPickupRequest({ ...data })
}

export const getPickupRequests = async () => {
  return pickupRequests()
}

export const getPickupRequest = async (pickupReq_id) => {
  const result = await findPickupRequest({ _id: pickupReq_id })
  if (result.length === 0)
    return {
      status: 400,
      message: "This pickup request doesn't exist "
    }
  return { status: 200, data: result, message: 'Pickup request retrieved successfully' }
}

export const updatePickupRequest = async (pickupReq_id, data) => {
  let pickupRequest = await findPickupRequest({ _id: pickupReq_id })
  if (!pickupRequest) return { status: 400, message: "Pickup request doesn't exist to update" }
  return await findAndUpdatePickupRequest(pickupReq_id, data)
}

export const deletePickupRequest = async (pickupReq_id) => {
  let pickupRequest = await findPickupRequest({ _id: pickupReq_id })
  if (!pickupRequest) return { status: 400, message: "Pickup request doesn't exist to delete" }
  return await removePickupRequest(pickupReq_id)
}