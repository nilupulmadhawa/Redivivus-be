import { Joi } from 'celebrate'

export const registerSchema = Joi.object({
  name: Joi.object({
    first_name : Joi.string().required(),
    last_name : Joi.string().required(),
  }),
  email: Joi.string().email().required().lowercase(),
  password : Joi.string().required(),
  phone : Joi.string().required().regex(/^\d{10}$/),
  address : Joi.string().required(),
  bank_details : Joi.object({
    bank_name: Joi.string(),
    acc_no: Joi.string().regex(/^[\d]+$/),
    branch : Joi.string(),
    acc_owner : Joi.string()
  }),
  earnings : Joi.array().items(
    Joi.string().hex().length(24)
  ),
  pickup_requests : Joi.array().items(
    Joi.string().hex().length(24)
  ),
  subscribed_companies : Joi.array().items(
    Joi.string().hex().length(24)
  ),
  is_verified : Joi.boolean(),
  is_active : Joi.boolean(),
})

// export const loginSchema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().required()
// })

// export const verifySchema = Joi.object({
//   verification_code: Joi.string().required()
// })

// export const resendVerifyMailSchema = Joi.object({
//   email: Joi.string().email().required()
// })

// export const changePasswordSchema = Joi.object({
//   old_password: Joi.string().required(),
//   new_password: Joi.string()
//     .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
//     .required()
//     .error((errors) =>
//       errors.map((err) => {
//         if (err.code === 'string.pattern.base') err.message = `Password should have at least one lowercase letter, one uppercase letter, one number and one special character and should be at least 8 characters long`
//         return err
//       })
//     )
// })

// export const addUserSchema = {
//   name: Joi.string().required(),
//   email: Joi.string().email().required()
// }

// export const userIdSchema = {
//   id: Joi.string().hex().length(24).required()
// }

// export const updateSchema = {
//   name: Joi.string().optional(),
//   university: Joi.string().optional(),
//   members: Joi.array()
//     .items(
//       Joi.object({
//         name: Joi.string().required(),
//         email: Joi.string().email().required(),
//         phone: Joi.number().required(),
//         academic_year: Joi.number().required().min(1).max(4)
//       })
//     )
//     .min(1)
//     .max(4)
//     .optional(),
//   photo_url: Joi.string().optional()
// }

// export const resetPasswordSchema = {
//   new_password: Joi.string()
//     .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
//     .required()
//     .error((errors) =>
//       errors.map((err) => {
//         if (err.code === 'string.pattern.base') err.message = `Password should have at least one lowercase letter, one uppercase letter, one number and one special character and should be at least 8 characters long`
//         return err
//       })
//     )
// }

// export const validUserResetPasswordSchema = {
//   verification_code: Joi.string().required()
// }