
import express from "express";
import { getAllPickUpRequests } from "../controllers/pickuprequest.controller";

const pickUpRequestRouter = express.Router();

pickUpRequestRouter.get("/", getAllPickUpRequests);

export default pickUpRequestRouter;
