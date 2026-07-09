import { Link,useLoaderData} from "react-router-dom"
import '../styles/Jobs.css'
import { getJobs } from "../api/api.js";


const Jobs = () => {
 
    const jobsData = useLoaderData();

  if (!Array.isArray(jobsData)) {
    return <p>Something went wrong loading jobs.</p>;
  }
  return (
   <div className="div">
    
         <h2>Job Vacancy</h2>
        <p>List of available roles in our company</p>
        <div className="jobs">
      
     {jobsData.map((job) =>{
       return<Link  to={job._id.toString()} key={job.id}>

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

  const data = await getJobs();
  return data;

}
