import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: "String",
      required: true,
    },

    telephone: {
      type: "String",
      required: true,
    },

    customers: {
      type: "Number",
      // required: true,
    },

    centers: {
      type: "Number",
      required: true,
    },

    logo: {
      type: "String",
      required: true,
    },

    openhour: {
      type: "String",
      // required: true,
    },

    closehour: {
      type: "String",
      // required: true,
    },

    opendays: {
      type: "String",
      // required: true,
    },

    slogan: {
      type: "String",
      required: true,
    },

    about: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);

