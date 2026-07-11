import { Link, useNavigate } from "react-router"
import '../styles/Login.css'
import {useForm} from 'react-hook-form'
import useLogin from "../hooks/useLogin.jsx"
import useAuthContext  from "../hooks/useAuthContext"
import { Navigate } from "react-router-dom"


const Login = () => {
    const {login,error} =useLogin()
    const navigate = useNavigate()
    const { user } = useAuthContext()
  

    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm()

    const onSubmit =async(data)=>{

      
      const success=  await login(data) 
      if (success) {
        await navigate('/admin/dashboard')
        
      }
        
      
    }
      if (user) return <Navigate to="/admin/dashboard" replace />
  return (
    <div className="acc-login">
         <div className="job-login">
            <h2>Login</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
           <label >Email:</label>
           <input {...register("email",{
            required:"Email is required",
            
           })} type="email" />
           {errors.email && <span className="errors">{errors.email.message}</span> }

           <label >Password:</label>
           <input type="password" {...register("password",{
            required:"Password is required",
            minLength:{
              value:8,
              message:'Password must be at least 8 characters'
            }
           })} />
            {errors.password && (<span className="error">{errors.password.message}</span>) }
           <button disabled={isSubmitting}>Login</button>
           <div className="div">
            <span>Don`t Have an Account ?</span> <Link to="/admin/signup">SignUp</Link>
           </div>

        </form>
        {error && (<span className="errors">{error}</span> )}
      </div>

    </div>
  )
}

export default Login