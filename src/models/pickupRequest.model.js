import mongoose, { Schema, SchemaType } from "mongoose";

const PaymentSchema = new Schema({
  paymentId: { type: String, required: true },
  paidDate: { type: Date },
  receivedDate: { type: Date, required: true },
  companyPaid: { type: Number, required: true },
  customerEarned: { type: Number },
  profit: { type: Number },
  currency: { type: String, default: "LKR", required: true },
});

const PickupRequestSchema = new Schema(
  {
    requestNo: { type: String, unique: true, required: true },
    requestReceivedBy: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      // required: true,
    },
    requestedBy: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      // required: true,
    },
    location: { type: Object, required: true },
    size: { type: String, required: true },
    note: { type: String },
    wasteTypes: [{ type: String, required: true }],
    requestStatus: { type: String, required: true, default: 'Pending' },
    confirmedAt: { type: Date },
    payment: { type: PaymentSchema },
  },
  { timestamps: true }
);
// PickupRequestSchema.index({ createdAt: 1 });
const PickupRequest = mongoose.model("PickupRequest", PickupRequestSchema);
// PickupRequest.syncIndexes();
export default PickupRequest;
