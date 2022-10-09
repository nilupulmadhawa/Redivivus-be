import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const CompanySchema = new mongoose.Schema(
    {
        company_name : {
            type: String,
            required : [true , 'Company name is required']
        },
        bank_details: {
            bank_name: {
                type: String,
            },
            acc_no: {
                type: String,
                validate: {
                    validator: (v) => {
                        return /^[\d]+$/mg.test(v);
                    },
                    message: props => `${props.value} is not a valid bank account number!`
                },
            },
            branch: {
                type: String,
            },
            acc_owner: {
                type: String,
            }
        }
    }
)

CompanySchema.plugin(aggregatePaginate)

const Company = mongoose.model('Company', CompanySchema)

export default Company