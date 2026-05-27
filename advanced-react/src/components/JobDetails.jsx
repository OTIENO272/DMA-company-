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
      <p><b>Job Summary:</b>We are seeking a talented Web Developer to join our growing tech team. You will build, maintain, and optimize responsive web applications. Your work will directly impact our user experience, site performance, and digital scaling.</p>
      <button id="btn" onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{


  const {id} = params;

  const response = await fetch('http://localhost:5000/jobs/' + id);
  if(!response.ok){
    throw Error("Job Details not Found!")
  }
  return response.json()

}