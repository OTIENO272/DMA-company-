import { Link } from "react-router"
import '../styles/Login.css'
import {useForm} from 'react-hook-form'

const Login = () => {

    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm()

    const onSubmit =(data)=>{
       console.log(data);
      
      
    }
  return (
    <div className="acc-login">
         <div className="job-login">
            <h2>Login</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
           <label >Email:</label>
           <input {...register("email",{
            required:true,
            
           })} type="email" />
           {errors.email && <span className="errors">{errors.email.message}</span> }

           <label >Password:</label>
           <input type="password" {...register("password",{
            required:true,
            minLength:{
              value:8,
              message:'Password must be at least 8 characters'
            }
           })} />
            {errors.password && <span className="error">{errors.password.message}</span> }
           <button disabled={isSubmitting}>Login</button>
           <div className="div">
            <span>Don`t Have an Account ?</span> <Link to="/jobs/signup">SignUp</Link>
           </div>
        </form>
      </div>

    </div>
  )
}

export default Login