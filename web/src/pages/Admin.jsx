import { useNavigate } from "react-router"

const Admin = () => {
 const navigate =useNavigate()
  const Login=()=>{
     navigate('/jobs/login')
   }
 const Signup=()=>{
    navigate('/jobs/signup')
 }
  return (
    <div>
        <div className="account">
        <div className="acc">
        <button onClick={Login} >Login</button>
        <button onClick={Signup} >Sign Up</button>
      </div>
    </div>
    </div>
  )
}

export default Admin