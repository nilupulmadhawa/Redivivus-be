import express from "express";
import { getAll , update , deleteUser, getById} from "../controllers/user";
import { protect,adminProtect} from "../middleware/auth";
const userRouter = express.Router()

userRouter.get('/' , protect , adminProtect , getAll)
userRouter.put('/:id' , protect, update)
userRouter.get('/:id' , protect , adminProtect , getById)
// userRouter.delete('/:id', protect, deleteUser)

export default userRouter