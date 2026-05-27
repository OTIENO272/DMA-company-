import { useNavigate } from "react-router"


const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h2>404 | Page Not Found</h2>
        <br />
        <button onClick={()=> navigate('/')} >Go to HomePage</button>
    </div>
  )
}

export default NotFound