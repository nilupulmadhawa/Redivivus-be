import asyncHandler from "../middleware/async";
import {
retrieveAllPickUpRequests
} from "../services/pickuprequest";
import { makeResponse } from "../utils/response";

export const getAllPickUpRequests = asyncHandler(async (req, res) => {
  const data = await retrieveAllPickUpRequests();
  return makeResponse({
    res,
    data,
    message: "PickUp requestst retrived successfully",
  });
});
