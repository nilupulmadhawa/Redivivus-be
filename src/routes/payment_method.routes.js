import express from "express";
import {addPaymentMethod ,updatePaymentMethod ,getOnePaymentMethod,getAllPaymentMethods} from "../controllers/payment_method.controller";

const paymentMethodRouter = express.Router();

paymentMethodRouter.post("/",addPaymentMethod);
paymentMethodRouter.put("/:id", updatePaymentMethod);
paymentMethodRouter.get("/:id", getOnePaymentMethod);
paymentMethodRouter.get("/", getAllPaymentMethods);

export default paymentMethodRouter;
