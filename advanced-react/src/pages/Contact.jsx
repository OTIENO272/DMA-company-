import { Outlet, useNavigate, useLocation } from "react-router";

const Contact = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isChild = location.pathname.includes('/contact/')

  return (
    <div>
      {!isChild && (
        <div className="contact-page">
          <h1>Contact Page</h1>
        </div>
      )}
      <div className="contact-btns">
        <button onClick={() => navigate('info')}>ContactInfo</button>
        <button onClick={() => navigate('form')}>ContactForm</button>
      </div>
      <Outlet />
    </div>
  )
}

export default Contact