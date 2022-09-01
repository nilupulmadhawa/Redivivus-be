import { findCompany, insertCompnay, getAllCompany } from "../repository/company";

export const createCompany = async (data) => {
  const company = await findCompany({ email: data.email });
  if (company) return { status: 400, message: "This company  already added" };
  return await insertCompnay({ ...data });
};

export const retrieveAllCompany = async (data) => {
  return getAllCompany(data);
};

export const getCompanyDetails=async(company_id)=>{
    const result= await findCompany({ _id: company_id })
//    console.log(result)
   if (result.length === 0)
      return {
        status: 400,
        message: "This payment method doesn't exist "
      }
    return {status:200,data:result,message:'Company details retrieved successfully'}
  }
  