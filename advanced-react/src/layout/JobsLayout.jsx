import { Outlet } from "react-router"


const JobsLayout = () => {
  return (
    <div className="jobs-page">
        <h2>Job Vacancy</h2>
        <p>List of available roles in our company</p>
        <Outlet />
    </div>
  )
}

export default JobsLayout