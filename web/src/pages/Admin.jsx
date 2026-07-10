import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router"
import useAuthContext from "../hooks/useAuthContext.jsx"
import '../styles/Admin.css'

const Admin = () => {
  
    const {user,dispatch} =useAuthContext()
     const navigate = useNavigate()

     const handleLogOut=()=>{
      localStorage.removeItem('user')
      dispatch({type:'LOGOUT'})

        navigate('/admin/login')
        
      
    }


  const Login=()=>{
     navigate('/admin/login')
   }
 const Signup=()=>{
    navigate('/admin/signUp')
 }

 const location =useLocation()

 useEffect(()=>{
  if (location.pathname === '/admin' || location.pathname === '/admin/') {
     navigate('/admin/login')
  }
 },[location,navigate])
  return (
    <div>

      {!user ? ( <div className="account">
        <div className="acc">
        <button onClick={Login} >Login</button>
        <button onClick={Signup} >Sign Up</button>
      </div>
      
    </div>) : (
      <div className="logout">
        <span>{user.email}</span>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    )}
       
    <div className="admin-content-area">
      <Outlet />
    </div>
    </div>
  )
}

export default Admin