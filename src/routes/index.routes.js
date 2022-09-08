import express from 'express';
import paymentMethodRouter from './payment_method.routes';
import contactUsRouter from './contactus.routes';
import pickupRequest from './pickupRequest.routes';

const router = express.Router();

router.use('/paymentmethod', paymentMethodRouter)
router.use('/contactus', contactUsRouter)
router.use('/pickupRequest', pickupRequest)
export default router;
