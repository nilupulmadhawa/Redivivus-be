import mongoose,{Schema} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
/*
* PaymentMethod Schema is defined to store payment method details
*/

const PaymentMethodSchema =new Schema({
     methodType:{type:String, required:true},
     expirationDate:{type:Date,required:true},
     activeStatus:{type:Boolean,default:true,required:true},
     paymentAddress:[{type:String,required:true}],
     cardNumber:{type:String,required:true,unique:true},  
     cvc:{type:Number,required:true},
     postalCode:{type:Number,required:true},


},{
     versionKey:false,
})
// PaymentMethodSchema.plugin(mongoosePaginate);

PaymentMethodSchema.index({ createdAt: 1 });
const PaymentMethod = mongoose.model('PaymentMethod',PaymentMethodSchema);
PaymentMethod.syncIndexes();
export default PaymentMethod;