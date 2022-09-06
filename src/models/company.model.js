import mongoose, { Schema, SchemaType } from "mongoose";

const CompanySchema = new Schema(
  {
    companyName: { type: String, required: true },
    address: { type: String, required: true },
  },
  { versionKey: false }
);

const Company = mongoose.model("Company", CompanySchema);

export default Company;
