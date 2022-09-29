import express from "express";
import { getAll , update , deleteUser} from "../controllers/user";
const userRouter = express.Router()

userRouter.get('/' , getAll)
userRouter.put('/:id' , update)
// userRouter.delete('/:id' , deleteUser)

export default userRouter