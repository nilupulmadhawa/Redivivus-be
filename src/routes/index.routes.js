import express from 'express';
import paymentMethodRouter from './payment_method.routes';
import contactUsRouter from './contactus.routes';

const router = express.Router();

router.use('/paymentmethod' , paymentMethodRouter )
router.use('/contactus' , contactUsRouter )
export default router;
