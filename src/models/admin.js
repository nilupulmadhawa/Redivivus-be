import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const AdminSchema = new mongoose.Schema(
  {
    common_details: {
        type: mongoose.SchemaType.Types.ObjectId,
        ref: 'User'
    },
    emp_id : {
        type : String,
        required : [true , 'Employee id is required']
    },
    designation : {
        type : String ,
        enum: ['MANAGER', 'SUPERVISOR'],
        required : [true , 'Employee designation is required']
    },
    is_active: {
      type: Boolean,
      default: true
    },
  }
)

AdminSchema.plugin(aggregatePaginate)

const Admin = mongoose.model('Admin', AdminSchema)

export default Admin