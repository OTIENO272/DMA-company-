import { useNavigate, useRouteError } from "react-router"


const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate()
  return (
    <div className="job-details">
        <h3>Error Occurred!</h3>
        <p>{error.message}</p>
        <button onClick={()=> navigate('/')}>Back Home</button>

    </div>
  )
}

export default Error