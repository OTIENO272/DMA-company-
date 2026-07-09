import { createContext, useEffect, useReducer } from "react";


 const AuthContext =createContext()

 export const authReducer =(state,action)=>{

    switch(action.type){
        case 'LOGIN' :
            return {user:action.payload}
        
        case 'SIGNUP':
              return {user:action.payload}

        case 'LOGOUT':
            return {user:null}      

        default:
            return state;    
    }

}


 const AuthContextProvider =({children})=>{

    const [state,dispatch] = useReducer(authReducer,{user:null})

    useEffect(()=>{
      
        const storedUser = localStorage.getItem('user')

        if (storedUser) {
            dispatch({type:'LOGIN',payload:JSON.parse(storedUser)})
        }

    },[])

    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthContext,AuthContextProvider}