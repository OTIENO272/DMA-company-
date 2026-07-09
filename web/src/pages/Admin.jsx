import { Outlet, useNavigate } from "react-router"

const Admin = () => {
 const navigate =useNavigate()
  const Login=()=>{
     navigate('/admin/login')
   }
 const Signup=()=>{
    navigate('/admin/signUp')
 }
  return (
    <div>
        <div className="account">
        <div className="acc">
        <button onClick={Login} >Login</button>
        <button onClick={Signup} >Sign Up</button>
      </div>
      
    </div>
    <div className="admin-content-area">
      <Outlet />
    </div>
    </div>
  )
}

export default Admin