import express from "express";
import paymentMethodRouter from "./payment_method.routes";
import contactUsRouter from "./contactus.routes";
import companyRoute from "./company.route";

const router = express.Router();
router.use("/binrequests", binRequestRouter);
router.use("/paymentmethod", paymentMethodRouter);
router.use("/contactus", contactUsRouter);
router.use("/company", companyRoute);

export default router;
