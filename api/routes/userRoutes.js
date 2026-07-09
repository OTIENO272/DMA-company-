import express from 'express'
import { userLogin, userSignUp } from '../controllers/userController.js';

const  userRouter = express.Router();

//routes 

userRouter.post('/api/user/signup',userSignUp)
userRouter.post('/api/user/login',userLogin)

export default userRouter;