import Company from "../models/company.model";
import mongoose from "mongoose";

export const findCompany = async (filters) => {
  return await Company.findOne(filters);
};

export const insertCompnay = async (data) => {
  return await new Company(data).save();
};
