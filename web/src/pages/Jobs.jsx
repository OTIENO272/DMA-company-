import { Link,useLoaderData, useNavigate } from "react-router-dom"
import '../styles/Jobs.css'


const Jobs = () => {
  const navigate =useNavigate()
 
  const Login=()=>{
    navigate('/jobs/login')
  }
  const Signup=()=>{
    navigate('/jobs/signup')
  }
  

    const jobsData = useLoaderData();
  return (
   <div className="div">
    <div className="account">
      <div className="acc">
        <button onClick={Login} >Login</button>
        <button onClick={Signup} >Sign Up</button>
      </div>
    </div>
         <h2>Job Vacancy</h2>
        <p>List of available roles in our company</p>
        <div className="jobs">
      
     {jobsData.map((job) =>{
       return<Link  to={job.id.toString()} key={job.id}>

             <h3>{job.title}</h3>
             <h2>{job.salary}</h2>
             <p>{job.location}</p>
        
        </Link>
       
     })}
    </div>

   </div> 
  
  )
}

export default Jobs

//use try catch ...
 export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5000/jobs");
  if (!response.ok) {
    throw Error("Job List Not Fount!")
  }
  return response.json();
}
