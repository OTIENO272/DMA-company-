import { Navigate, Outlet } from "react-router";
import useAuthContext from "../hooks/useAuthContext";


const ProtectedRoute = () => {

    const {user} =useAuthContext()
    
    if(!user){
        return <Navigate to="/admin/login"  replace/>
    }
   
    return <Outlet />
}

export default ProtectedRoute