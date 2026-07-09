import {  useState } from "react"
import useAuthContext from "./useAuthContext"
import { signupApi } from "../api/api"



const useSignup = () => {
  const[errors,setErrors]=useState(null)
  const [isLoading,setIsLoading]= useState(false)
  const {dispatch} = useAuthContext

  const signup =async(formData)=>{
    setIsLoading(true)
    setErrors(null)

    try {
        const data = await signupApi(formData)
        localStorage.setItem('user',JSON.stringify(data))
        dispatch({type:'LOGIN',payload:data})
    } catch (error) {
        setErrors(error.message)
    }
    finally{
        setIsLoading(false)
    }

  }
 
  return {signup,errors,isLoading}

    
  
}

export default useSignup