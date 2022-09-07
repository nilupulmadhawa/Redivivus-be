import express from "express";
import paymentMethodRouter from "./payment_method.routes";
import contactUsRouter from "./contactus.routes";
import companyRoute from "./company.route";
import binRequestRouter from "./binrequests.routes"
import customerRoute from "./customer.routes"
const router = express.Router();
router.use("/binrequests", binRequestRouter);
router.use("/paymentmethod", paymentMethodRouter);
router.use("/contactus", contactUsRouter);
router.use("/company", companyRoute);
router.use("/customer", customerRoute);
export default router;
