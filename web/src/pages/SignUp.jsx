import { useForm } from "react-hook-form"
import { NavLink } from "react-router"
import '../styles/SignUp.css'

const SignUp = () => {
    const {register ,handleSubmit,formState:{errors,isSubmitting}} = useForm()


    const onSubmit=async(data)=>{
      await console.log(data);
      
    }

    
  return ( 
    <div className="sign-up">
        <form  onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="">UserName</label>
            <input type="text" placeholder="username"  {...register('username',{
                required:true,
        
            })}  />
             {errors.username &&<span className="error" >{errors.username.message}</span> }

            <label htmlFor="">Email</label>
            <input type="email" placeholder="email" {...register("email",{
                required:true,
            })} />
             {errors.email &&<span className="error">{errors.email.message}</span> }

            <label htmlFor="">Password</label>
            <input type="password" placeholder="password"   {...register("password",{
                required:true,
            })}  />
             {errors.password &&<span className="error">{errors.password.message}</span> }


            <label htmlFor="">Confirm-password</label>
            <input type="password" placeholder="confirm"  {...register("confirm-password",{
                required:"Confirm Your password",
                validate:(value,formValues) => value ===formValues.password || 'Passwords do not match'

            })}/>
            {errors.confirm &&<span className="error">{errors.confirm.message}</span> }
            <button disabled={isSubmitting} >Sign Up</button>
            <div className="div">
                <p>Already Have an Account ?</p>
                <NavLink to='/jobs/login'>Login</NavLink>
            </div>
        </form>
    </div>
  )
}

export default SignUp