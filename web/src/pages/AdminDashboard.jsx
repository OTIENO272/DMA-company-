import { useEffect, useState } from "react"
import { getJobs } from "../api/api"
import useAuthContext from "../hooks/useAuthContext"
import { NavLink, Outlet } from "react-router"
import '../styles/Admindashboad.css'


const AdminDashboard = () => {
  const {user} =useAuthContext()
  const  [jobs,setJobs]=useState([])
  const [loadingJobs,setLoadingJobs] =useState(true)



  useEffect(()=>{
    const fetchJobs =async()=>{
      try {
        const data =await getJobs()
        setJobs(data ||[])
      } catch (error) {
         console.error("Failed to fetch jobs:", error);
      }finally{
        setLoadingJobs(false)

      }
    }

    fetchJobs()
  },[])
      if (!user) {
    return <p>Loading...</p> 
  }
 return (
  <div className="dashboard">
    <h2 className="dash-welcome">Welcome Back!</h2>

    <div className="dashboard-body">
      <div className="sidebar">
        <NavLink to='/admin/overview' className={({isActive}) => isActive ? "link-active" : "lnk"}> 📊 Overview</NavLink>
        <NavLink to='/admin/addJob' className={({isActive}) => isActive ? "link-active" : "lnk"}>➕ Add Job</NavLink>
        <NavLink to='/admin/tracker' className={({isActive}) => isActive ? "link-active" : "lnk"}>👥 Applicants Tracker</NavLink>
      </div>

      <div className="main-content">
        <div className="dash-overview">
          {loadingJobs ? (
            <p>Loading jobs..</p>
          ) : jobs.length === 0 ? (
            <p>No jobs Found</p>
          ) : (
            jobs.map((job) => (
              <div className="job-card" key={job._id}>
                <h3>{job.title}</h3>
                <h2>{job.salary}</h2>
                <p>{job.location}</p>
              </div>
            ))
          )}
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
)
}
export default AdminDashboard