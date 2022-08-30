import express from 'express';
import paymentMethodRouter from './payment_method.routes';

const router = express.Router();

router.use('/paymentmethod' , paymentMethodRouter )
export default router;
