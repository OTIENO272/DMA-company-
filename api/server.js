import app from "./app.js"
import connectDB from "./database.js";
import dotenv from 'dotenv'


dotenv.config({
    path:'.env'
})

let PORT = process.env.PORT
app.listen(PORT,async()=>{

  await  console.log(`Server listening at port ${PORT}`);
    
})

 const conn = connectDB();
