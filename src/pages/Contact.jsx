import { Outlet, useNavigate } from "react-router"



const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="contact-page">
        <h1>Contact Page</h1>
      
      </div>
      <div className="contact-btns">
        <button onClick={()=> navigate('info')}>ContactInfo</button>
      <button onClick={()=> navigate('form')}>ContactForm</button>
      </div>
      <Outlet />
    </div>
  )
}

export default Contact