import { useState } from 'react'
import useAuthContext from './useAuthContext'
import { loginApi } from '../api/api'

const useLogin = () => {

    const {dispatch} =useAuthContext()
    const [error,setError] =useState(null)
    const [isLoading,setIsLoading] = useState(false)

    const login=async(formData)=>{
        setError(null)
        setIsLoading(true)
        try {
            const data= await loginApi(formData)
           localStorage.setItem('user',JSON.stringify(data))
           dispatch({type:'LOGIN',payload:data})
        } catch (error) {
            setError(error.message)
        } finally{
            setIsLoading(false)
        }
    }
  return {error,login,isLoading}
}

export default useLogin