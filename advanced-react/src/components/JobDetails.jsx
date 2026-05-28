import { useLoaderData } from "react-router"



const JobDetails = () => {
 const jobDetails= useLoaderData()


 const handleApply =()=>{
   const val = document.getElementById('btn')
  window.alert("Applied Successfully")
  val.textContent ="Applied"

  

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
 export const jobDetailsLoader =async({params})=>{

  const {id} = params;
  const res = await fetch('http://localhost:5000/jobs/' + id)

  if (!res.ok) {
    throw new Error("Job Details Not Found");
    
  }
  return res.json();
}