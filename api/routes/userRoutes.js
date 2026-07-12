import express from 'express'
import { refreshAccessToken, userLogin, userLogout, userSignUp } from '../controllers/userController.js';


const  userRouter = express.Router();

//routes 

userRouter.post('/api/auth/signup',userSignUp)
userRouter.post('/api/auth/login',userLogin)
userRouter.post('/api/auth/refresh',refreshAccessToken)
userRouter.post('/api/auth/logout',userLogout)

export default userRouter;