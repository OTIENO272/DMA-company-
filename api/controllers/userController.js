import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

//tokenization
const signToken= (_id)=>{
  return  jwt.sign({_id},process.env.SECRET,{"expiresIn":"5s"})
}

const signRefreshToken=(_id)=>{

  return jwt.sign({_id},process.env.REFRESH_SECRET,{expiresIn:'3d'})

}

const sendRefreshToken =(res,refreshToken)=>{

  res.cookie('refreshToken',refreshToken,{
    httpOnly:true,
    secure:process.env.NODE_ENV ==='production',
    sameSite:'strict',
    maxAge: 3 *24 *60 *60 *1000,
  
  })

}

const userSignUp=async(req,res)=>{
   try {
    
    const {username,email,password,confirmPassword} = req.body
     const user = await User.signup(username,email,password,confirmPassword)

     //token creation
     const accessToken = await signToken(user._id)
     const refreshToken  = await signRefreshToken(user._id)

     sendRefreshToken(res,refreshToken)
     res.status(200).json({email,username,accessToken})
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
      const accessToken = await signToken(user._id)
      const refreshToken = await signRefreshToken(user._id)
      

      sendRefreshToken(res,refreshToken)
      res.status(200).json({email,accessToken})
    } catch (error) {
     res.status(400).json({error:error.message})
      console.log(error.message);
     
    }
}

const refreshAccessToken = async(req,res)=>{

  const token = req.cookies?.refreshToken

  if(!token){
    return res.status(401).json({error:'No refresh token provided'})
  }

  try {
    const {_id} = jwt.verify(token,process.env.REFRESH_SECRET)
    const accessToken = await signToken(_id)
     return   res.status(200).json({accessToken})
    
  } catch (error) {
    return res.status(401).json({error:'Invalid or expired refresh token'})
  }

}

const userLogout=(req,res)=>{
  
  res.clearCookie('refreshToken')
 
  
  res.status(200).json({message:'Logged out'})
}


export {userSignUp,userLogin,userLogout,refreshAccessToken}