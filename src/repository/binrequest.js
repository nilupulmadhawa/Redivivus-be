import { encodeXText } from "nodemailer/lib/shared";
import BinRequest from "../models/binrequest.model";

export const getAllBinRequests = async () => {
  return await BinRequest.find()
    .populate("requestReceivedBy")
    .populate("requestedBy")
    .exec()
    .catch((err) => {
      logger.error(
        `An error occurred when retrieving binrequests - err: ${err.message}`
      );
    });
};

export const addBinRequest = async () => {};
