import express from "express";
import authRouter from "./auth";
import userRouter from "./user";
import paymentMethodRouter from './payment_method.routes';
import contactUsRouter from './contactus.routes';
import pickupRequest from './pickupRequest.routes';

const routes = express.Router()

routes.use('/auth' , authRouter)
routes.use('/user' , userRouter)
routes.use('/paymentmethod' , paymentMethodRouter )
routes.use('/contactus' , contactUsRouter )

export default routes


router.use('/paymentmethod', paymentMethodRouter)
router.use('/contactus', contactUsRouter)
router.use('/pickupRequest', pickupRequest)
export default router;

