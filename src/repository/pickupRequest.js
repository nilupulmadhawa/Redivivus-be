import PickupRequest from '../models/pickupRequest.model'

export const insertPickupRequest = async (data) => {
  return await new PickupRequest(data).save()
}

export const lastPickupRequests = async () => {
  return await PickupRequest.findOne().sort({ "_id": -1 }).limit(1);
}

export const pickupRequests = async (filters) => {
  return await PickupRequest.find(filters).populate('requestReceivedBy requestedBy')
}

export const findPickupRequest = async (filters) => {
  return await PickupRequest.findOne(filters).populate('requestReceivedBy')
}

export const findAndUpdatePickupRequest = async (id, updatedpickupReq) => {
  return await PickupRequest.findByIdAndUpdate(id, updatedpickupReq, { new: true });
}

export const removePickupRequest = async (id) => {
  return await await PickupRequest.findByIdAndRemove(id);
}