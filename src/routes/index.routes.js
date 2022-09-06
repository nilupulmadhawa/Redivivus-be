import express from 'express';
import paymentMethodRouter from './payment_method.routes';
import contactUsRouter from './contactus.routes';
import binRequestRouter from './binrequests.routes';

const router = express.Router();

router.use('/paymentmethod' , paymentMethodRouter )
router.use('/contactus', contactUsRouter)
router.use("/binrequests", binRequestRouter);
export default router;
