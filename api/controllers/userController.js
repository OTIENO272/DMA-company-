import User from "../models/userModel.js";


const userSignUp=async(req,res)=>{
   try {
    const {username,email,password,confirmPassword} = req.body
     const user = await User.signup(username,email,password,confirmPassword)
     res.status(200).json({user})
   } catch (error) {
    res.status(400).json({error:error.message})
   }
}

const userLogin=async(req,res)=>{
    try {
        const {email,password} =req.body
        const user = await User.login(email,password)
        res.status(200).json({user})
    } catch (error) {
     res.status(400).json({error:error.message})
    }
}

export {userSignUp,userLogin}