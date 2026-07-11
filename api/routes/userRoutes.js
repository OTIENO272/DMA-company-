import express from 'express'
import { userLogin, userSignUp } from '../controllers/userController.js';


const  userRouter = express.Router();

//routes 

userRouter.post('/api/auth/signup',userSignUp)
userRouter.post('/api/auth/login',userLogin)

export default userRouter;