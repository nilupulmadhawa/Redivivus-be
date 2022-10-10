import express from "express";
import {addPaymentMethod ,updatePaymentMethod ,getOnePaymentMethod,getAllPaymentMethods,removePaymentMethod} from "../controllers/payment_method.controller";
import { protect, adminProtect } from "../middleware/auth";
const paymentMethodRouter = express.Router();

paymentMethodRouter.post("/",addPaymentMethod);
paymentMethodRouter.patch("/:id", updatePaymentMethod);
paymentMethodRouter.get("/:id", getOnePaymentMethod);
paymentMethodRouter.get("/", getAllPaymentMethods);
paymentMethodRouter.delete("/:id",removePaymentMethod)

export default paymentMethodRouter;
