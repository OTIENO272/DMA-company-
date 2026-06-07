import { Outlet } from "react-router"
import Navbar from "../components/Navbar"


const RouteLayout = () => {
  const date =new Date().getFullYear()
  return (
    <div>
       <Navbar />
       <div className="container">
             <Outlet />
       </div>
   
<footer className="footer">
    <p>&copy; {date} Velonith Labs. All rights reserved.</p>
</footer>
   
    </div>
  )
}

export default RouteLayout