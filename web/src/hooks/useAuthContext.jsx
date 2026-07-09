import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"



const useAuthContext = () => {
     
    const context = useContext(AuthContext)
     
    if(!context){
        throw new Error('useAthContext must be used inside an AuthContextProvider')
    }
      
  return context;
}

export default useAuthContext