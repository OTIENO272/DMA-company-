import { useForm } from "react-hook-form"
import { NavLink } from "react-router"
import '../styles/SignUp.css'
import useSignup from "../hooks/useSignup"


const SignUp = () => {
    const {register ,handleSubmit,formState:{errors,isSubmitting}} = useForm()
     
    const {signup,error} =useSignup()

    
    const onSubmit = async (data) => {
        await signup(data);

  }

      

    
  return ( 
    <div className="sign-up">
        <form  onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="">UserName</label>
            <input type="text" placeholder="username"  {...register('username',{
                required:'Username is required',
        
            })}  />
             {errors.username &&<span className="errors" >{errors.username.message}</span> }

            <label htmlFor="">Email</label>
            <input type="email" placeholder="email" {...register("email",{
                required:'Email is required',
            })} />
             {errors.email &&<span className="errors">{errors.email.message}</span> }

            <label htmlFor="">Password</label>
            <input type="password" placeholder="password"   {...register("password",{
                required:'Password is required',
            })}  />
             {errors.password &&<span className="errors">{errors.password.message}</span> }


            <label htmlFor="">Confirm-password</label>
            <input type="password" placeholder="confirm"  {...register("confirmPassword",{
                required:"Confirm Your password",
                validate:(value,formValues) => value ===formValues.password || 'Passwords do not match'

            })}/>
            {errors.confirmPassword &&<span className="errors">{errors.confirmPassword.message}</span> }
            <button disabled={isSubmitting} >Sign Up</button>
            <div className="div">
                <p>Already Have an Account ?</p>
                <NavLink to='/jobs/login'>Login</NavLink>
            </div>
            {error && (
                 <span className="errors">{error}</span>
                          ) }
        </form>
    </div>
  )
}

export default SignUp