import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

//tokenization
const signToken= (_id)=>{
  return  jwt.sign({_id},process.env.SECRET,{"expiresIn":"15m"})
}

const userSignUp=async(req,res)=>{
   try {
    
    const {username,email,password,confirmPassword} = req.body
     const user = await User.signup(username,email,password,confirmPassword)

     //token creation
     const token = await signToken(user._id)

     res.status(200).json({email,username,token})
   } catch (error) {
    res.status(400).json({error:error.message})
    console.log(error.message);
    
   }
}

const userLogin=async(req,res)=>{
    try {
        const {email,password} =req.body
        const user = await User.login(email,password)
         //token creation
      const token = await signToken(user._id)

      res.status(200).json({email,token})
    } catch (error) {
     res.status(400).json({error:error.message})
      console.log(error.message);
     
    }
}



export {userSignUp,userLogin}