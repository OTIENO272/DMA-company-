import { useLoaderData, useNavigate, useParams } from "react-router"
import { getJobDetails} from "../api/api.js"





const JobDetails = () => {
      const jobDetails= useLoaderData()
      const {id}=useParams()
      const navigate =useNavigate()

 const handleApply =()=>{
    
   navigate(`/jobs/${id}/apply`,{
      state:{position:jobDetails.title}
   })
    
   

 }

  return (
    <div className="job-details">
      
      <p><b>Job Title:</b>{jobDetails.title}</p>
      <p><b>Salary:</b>{jobDetails.salary}</p>
      <p><b>Area Of Work:</b>{jobDetails.location}</p>
      <p><b>Type:</b>{jobDetails.type}</p>
      <p><b>Job Summary:</b>{jobDetails.summary}</p>
      <button id="btn" onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails
 export const jobDetailsLoader =async()=>{

    const data = await getJobDetails()
   
    return data;
}