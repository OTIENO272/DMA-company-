import { useState } from 'react'
import useAuthContext from './useAuthContext'
import { loginApi } from '../api/api'


const useLogin = () => {

    const {dispatch} =useAuthContext()
    const [error,setError] =useState(null)
    const [isLoading,setIsLoading] = useState(false)
     const [user,setUser]=useState(null)

    const login=async(formData)=>{
        setError(null)
        setIsLoading(true)
        setUser(null)
        try {
            const data= await loginApi(formData)
        //    localStorage.setItem('user',JSON.stringify(data))
           setUser(data)
           dispatch({type:'LOGIN',payload:data})
           return true;
        } catch (error) {
            setError(error.message)
            return false;
        } finally{
            setIsLoading(false)
        }
    }
  return {error,login,isLoading,user}
}

export default useLogin