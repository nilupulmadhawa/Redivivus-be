import express from "express";
import { getAll , update , deleteUser} from "../controllers/user";
import { protect,adminProtect } from "../middleware/auth";
const userRouter = express.Router()

userRouter.get('/' , protect , adminProtect , getAll)
userRouter.put('/:id' , protect, update)
// userRouter.delete('/:id' , deleteUser)

export default userRouter