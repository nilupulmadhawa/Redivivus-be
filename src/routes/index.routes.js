import express from "express";
import authRouter from "./auth";
import userRouter from "./user";
import paymentMethodRouter from './payment_method.routes';
import contactUsRouter from './contactus.routes';
import pickupRequest from './pickupRequest.routes';
import subscriptionRouter from "./subscription.routes";
const router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/paymentmethod', paymentMethodRouter)
router.use('/contactus' , contactUsRouter )
router.use('/subscribe' , subscriptionRouter)
router.use('/pickupRequest', pickupRequest)


export default router;

