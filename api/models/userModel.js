import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const userSchema = new  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
    }
})
userSchema.statics.signup=async function(username,email,password,confirmPassword){

    

  //Check for any empty inputs
  console.log({ username, email, password, confirmPassword });
if (!username || !email || !password || !confirmPassword) {
  throw new Error("Fill the Empty fields");
}

  //check whether is already existing
    const exist = await this.findOne({email:email})

    if(exist){
        throw new Error("Email Already in use")
    }
     
   


    //validate the email and password
    if(!validator.isEmail(email)){
        throw new Error("Enter a valid email!")
    }
    if( !validator.isStrongPassword(password)){
        throw new Error("Enter a strong password!")
    }
   
    //check if passwords are matching

    if(password != confirmPassword){
        throw new Error("Passwords must match!")
    }

    //hashing of the password(bcrypt)

    const salt = await  bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)
    
    
     //create the user
    const user = await this.create({email,username,password:hash})
    return user;

}

userSchema.statics.login=async function (email,password) {
    //Check for empty fields
    if(!password || !email){
        throw new Error("All fields must be field")
    }
    //verify email
      
      if(!validator.isEmail(email)){
        throw new Error("Enter a valid email!")
    }

    //check whether user has an account

    const user = await this.findOne({email:email})

    if(!user){
        throw new Error("User not found,enter the correct email")
    }
   

    //compare the passwords

    const match = await bcrypt.compare(password,user.password)
    
    if(!match){
        throw new Error("Incorrect Password")
    }

    return user;
}

const User = mongoose.model("User",userSchema)
export default User;