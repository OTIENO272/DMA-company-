import { Link,useLoaderData } from "react-router-dom"


const Jobs = () => {
    const jobsData = useLoaderData();
  return (
   <div className="div">
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
