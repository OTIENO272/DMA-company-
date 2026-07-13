import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';


const requireAuth=async(req,res,next)=>{

    const {authorization}  = req.headers;

    if(!authorization){
        return res.status(401).json({error:'Authorization token required'})
    }

    const token = await authorization.split(' ')[1]
  
    try {
        const {_id} = await jwt.verify(token,process.env.SECRET)
        req.user = await User.findById(_id).select('_id')
        next()
    } catch (error) {
       
        res.status(401).json({error:'Request not authorized'})
        
    }


}

export default requireAuth