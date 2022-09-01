import { findCompany, insertCompnay } from "../repository/company";

export const createCompany = async (data) => {
  const company = await findCompany({ email: data.email });
  if (company) return { status: 400, message: "This company  already added" };
  return await insertCompnay({ ...data });
};

export const retrieveAllCompany = async (page, limit) => {
  return getAllCompany(page, limit);
};
