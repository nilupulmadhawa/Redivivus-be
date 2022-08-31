import mongoose,{Schema} from "mongoose";


const ContactUsSchema =new Schema({
     name:{type:String, required:true},
     email:{type:Date,required:true},
     message:{type:Boolean,default:true,required:true},
    


},{
     versionKey:false,
})

const ContactUs = mongoose.model('ContactUs',ContactUsSchema);

export default ContactUs;