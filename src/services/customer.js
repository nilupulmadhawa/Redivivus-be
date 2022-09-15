import bcrypt from 'bcrypt'
import {
    createCustomer,
    getOneCustomer,
    getAllCustomers,
    findOneAndUpdateCustomer,
    findOneAndRemoveCustomer
} from '../repository/customer'




export const getCustomers = async (query) => {
    return await getAllCustomers(query)
}

export const getCustomerByID = async (id) => {
    const user = await getOneCustomer({ _id: id })
    if (!user)
        return {
            status: 422,
            message: 'Invalid Customer ID',
        }
    return user
}



// export const changePasswordService = async (user, oldPassword, newPassword) => {
//     user = await getOneCustomer({ _id: user._id }, true) // because req.user doesn't have the password

//     const isPasswordMatch = await new Promise((resolve, reject) => {
//         bcrypt.compare(oldPassword, user.password, (err, hash) => {
//             if (err) reject(err)
//             resolve(hash)
//         })
//     })
//     if (!isPasswordMatch) return { status: 400, message: 'Invalid current password' }

//     const encryptedPassword = await new Promise((resolve, reject) => {
//         bcrypt.hash(newPassword, parseInt(process.env.BCRYPT_SALT_ROUNDS), (err, hash) => {
//             if (err) reject(err)
//             resolve(hash)
//         })
//     })
//     return await findOneAndUpdateCustomer({ email: user.email }, { password: encryptedPassword })
// }

export const updateCustomer = async (userId,userDetails) => {
    let userData

    if (userDetails.name) {
        userData = await getOneCustomer({ name: userDetails.name }, false)
        if (userData && (userData?._id.toString() !== userId.toString()))
            return { status: 422, message: 'Name is already taken' }
    }

    const updatedCustomer = await findOneAndUpdateCustomer({ _id: userId }, userDetails)
    if (!updatedCustomer) return {
        status: 422,
        message: 'Invalid user ID'
    }
    return updatedCustomer
}

export const addNewCustomer = async (userDetails) => {
  
    let user = await getOneCustomer({ email: userDetails.email }, false)

    if (user?._id.toString() !== userDetails._id)
        return { status: 400, message: 'Email is already taken' }


    const encryptedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(userDetails.password, parseInt(process.env.BCRYPT_SALT_ROUNDS), (err, hash) => {
            if (err) reject(err)
            resolve(hash)
        })
    })

    const newCustomer = await createCustomer({
        ...userDetails,
        password: encryptedPassword,
        is_verified: true,
        role: 'Customer',
    })

    
    return newCustomer
}

// const sendAdminPassword = async (email, password) => {
//     const replacements = {
//         genaratedPassword: password,
//     }
//     const subject = 'Welcome to the Bashaway'
//     return await sendMail(email, 'sendAdminPassword', replacements, subject)
// }

export const deleteCustomerById = async (userId) => {
    
    const customer = await findOneAndRemoveCustomer({ _id: userId })
    if (!customer) return {
        status: 422,
        message: 'Invalid user ID'
    }
    return customer
}