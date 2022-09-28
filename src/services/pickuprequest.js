import { logger } from "handlebars";
import { getAllPickUpRequests } from "../repository/pickuprequest";
import { makeResponse } from "../utils/response";

export const retrieveAllPickUpRequests = async () => {
  return getAllPickUpRequests();
};
