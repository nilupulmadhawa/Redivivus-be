import express from 'express';
import paymentMethodRouter from './payment_method.routes';
import contactUsRouter from './contactus.routes';
import pickUpRequestRouter from './pickuprequest.routes';
const router = express.Router();

router.use('/paymentmethod' , paymentMethodRouter )
router.use('/contactus', contactUsRouter)
router.use("/pickuprequests", pickUpRequestRouter);
export default router;
