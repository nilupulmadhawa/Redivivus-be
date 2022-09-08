import PickupRequest from '../models/pickupRequest.model'

export const insertPickupRequest = async (data) => {
  return await new PickupRequest(data).save()
}

export const pickupRequests = async (filters) => {
  return await PickupRequest.find(filters)
}

export const findPickupRequest = async (filters) => {
  return await PickupRequest.findOne(filters)
}

export const findAndUpdatePickupRequest = async (id, updatedpickupReq) => {
  return await PickupRequest.findByIdAndUpdate(id, updatedpickupReq, { new: true });
}

export const removePickupRequest = async (id) => {
  return await await PickupRequest.findByIdAndRemove(id);
}