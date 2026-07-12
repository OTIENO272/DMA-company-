import { useEffect, useState } from "react"
import { deleteJobApi, getJobs } from "../api/api"
import useAuthContext  from "../hooks/useAuthContext.jsx" //
import '../styles/Admindashboad.css'
import { RingLoader, MoonLoader} from 'react-spinners'
import {NavLink,Outlet} from 'react-router-dom'
const AdminDashboard = () => {
  const { user, isLoading: authLoading } = useAuthContext() 
  const [jobs, setJobs] = useState([])
  const [loadingJobs, setLoadingJobs] = useState(true)

  const handleDeleteJob =async(jobId)=>{
    try {
     const deleted= await deleteJobApi(jobId)
      setJobs((prev)=>prev.filter((jobs) =>jobs._id !==deleted._id))
      
      
    } catch (error) {
     console.log(error.message)
    }
  }
const handleJobAdded = (newJob) => {
    setJobs((prev) => [newJob, ...prev])
  }
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs()
        setJobs(data || [])
      } catch (error) {
        console.error("Failed to fetch jobs:", error)
      } finally {
        setLoadingJobs(false)
      }
    }

    fetchJobs()
  }, [])

  // still checking localStorage for an existing session — show spinner only
  if (authLoading) {
    return <RingLoader color="#096d2a" size={50} />
  }

  // definitively logged out — show spinner NEVER here, just the real options
  if (!user) {
    return (
      <div className="auth-prompt">
        <NavLink to="/admin/login" className={({ isActive }) => isActive ? "btn active" : "btn"}>
          Login
        </NavLink>
        <NavLink to="/admin/signup" className={({ isActive }) => isActive ? "btn active" : "btn"}>
          Sign Up
        </NavLink>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <h2 className="dash-welcome">Welcome Back!</h2>

      <div className="dashboard-body">
        <div className="sidebar">
          <NavLink to='/admin/dashboard' className={({ isActive }) => isActive ? "link-active" : "lnk"}> 📊 Overview</NavLink>
          <NavLink to='/admin/dashboard/addJobs' className={({ isActive }) => isActive ? "link-active" : "lnk"}>➕ Add Job</NavLink>
          <NavLink to='/admin/dashboard/tracker' className={({ isActive }) => isActive ? "link-active" : "lnk"}>👥 Applicants Tracker</NavLink>
        </div>

        <div className="main-content">
          <div className="dash-overview">
            {loadingJobs ? (
              <div className="loader">
                <MoonLoader  color="#09a03c" size={50}/>
              <p>Loading Jobs.</p></div>
            
            ) : jobs.length === 0 ? (
              <p>No jobs Found</p>
            ) : (
              jobs.map((job) => (
                <div className="job-card" key={job._id}>
                  <h3>{job.title}</h3>
                  <h2>{job.salary}</h2>
                  <p>{job.location}</p>
                  <button onClick={()=>handleDeleteJob(job._id)} className="delete-job" >🗑️</button>
                </div>
              ))
            )}
          </div>

          <div className="content">
            <Outlet context={{onJobAdded:handleJobAdded}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard