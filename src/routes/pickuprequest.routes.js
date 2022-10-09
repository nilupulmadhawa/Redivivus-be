import express from "express";
import { addPickupRequest, updatePickupRequestById, getPickupRequestById, getAllPickupRequests, deletePickupRequestById } from "../controllers/pickupRequest.controller";

const pickupRequestRouter = express.Router();

pickupRequestRouter.post("/", addPickupRequest);
pickupRequestRouter.patch("/:id", updatePickupRequestById);
pickupRequestRouter.get("/:id", getPickupRequestById);
pickupRequestRouter.get("/", getAllPickupRequests);
pickupRequestRouter.delete("/:id", deletePickupRequestById)

export default pickupRequestRouter;
