import express from "express";
import authRouter from "./auth";
import userRouter from "./user";

const routes = express.Router()

routes.use('/auth' , authRouter)
routes.use('/user' , userRouter)

export default routes