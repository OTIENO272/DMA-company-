import mongoose from "mongoose"

const connectDB = async()=>{
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected");
        
        
    } catch (error) {
        console.log("Failed",error.message);
        
    }
    
}


export default connectDB;