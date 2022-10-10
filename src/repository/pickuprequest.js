import PickupRequest from "../models/pickupRequest.model";
import PaymentMethod from "../repository/payment_method";

export const insertPickupRequest = async (data) => {
  return await new PickupRequest(data).save();
};

export const lastPickupRequests = async () => {
  return await PickupRequest.findOne().sort({ _id: -1 }).limit(1);
};

export const pickupRequests = async (filters) => {
  return await PickupRequest.find(filters);
};

export const findPickupRequest = async (filters) => {
  return await PickupRequest.findOne(filters);
};

export const findAndUpdatePickupRequest = async (id, updatedpickupReq) => {
  return await PickupRequest.findByIdAndUpdate(id, updatedpickupReq, {
    new: true,
  });
};

export const removePickupRequest = async (id) => {
  return await await PickupRequest.findByIdAndRemove(id)
};
export const addPayment = async (pickUpId) => {
  // amount: "1000";
  // cardNumber: "1234 5678 8990 4565";
  // date: "2022-10-11";
  // note: "CHamath jayasekar";
  // paymentType: "Credit Card";
  // requestNo: "PRN-3";
  // const PaymentSchema = new Schema({
  //   paymentId: { type: String, required: true },
  //   paidDate: { type: Date },
  //   receivedDate: { type: Date, required: true },
  //   companyPaid: { type: Number, required: true },
  //   customerEarned: { type: Number },
  //   profit: { type: Number },
  //   paymentMethod: { type: Schema.Types.ObjectId, ref: "PaymentMethod" },
  //   currency: { type: String, default: "LKR", required: true },
  // });

  // const PickupRequestSchema = new Schema(
  //   {
  //     requestNo: { type: String, unique: true, required: true },
  //     requestReceivedBy: {
  //       type: Schema.Types.ObjectId,
  //       ref: "Company",
  //       // required: true,
  //     },
  //     requestedBy: {
  //       type: Schema.Types.ObjectId,
  //       ref: "Customer",
  //       // required: true,
  //     },
  //     location: { type: Object, required: true },
  //     size: { type: String, required: true },
  //     note: { type: String },
  //     wasteTypes: [{ type: String, required: true }],
  //     requestStatus: { type: String, required: true, default: "Pending" },
  //     collectedBy: { type: String },
  //     confirmedAt: { type: Date },
  //     payment: { type: PaymentSchema },
  //   },
  //   { timestamps: true }
  // );
  let pickupRequest = await findPickupRequest(id);
  let paymentMethod = await paymentMethod(cardNumber);
};
