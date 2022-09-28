import { encodeXText } from "nodemailer/lib/shared";
import PickUpRequest from "../models/pickuprequest.model";

export const getAllPickUpRequests = async () => {
  return await PickUpRequest.find()
    .populate("requestReceivedBy")
    .populate("requestedBy")
    .exec()
    .catch((err) => {
      logger.error(
        `An error occurred when retrieving pick up requests - err: ${err.message}`
      );
    });
};

export const addPickUpRequest = async () => {};
