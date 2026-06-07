import './Home.css'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div className="home-container" >
       <h1>DMA CONNECT</h1>
       <h2>Connecting Africa,Digitally</h2>
       <div className="card-info">
        <p>
          We build fast,secure ,and scalable digital infrastructure for businesses across East Africa</p>
          <div className="buttons">
            <button className='btn-primary'>
              <NavLink to='contact'>
            Get Started 
              </NavLink>
            </button>
            <button className='btn-secondary'>
              <NavLink to='products'>
                View Products
                </NavLink>
                </button>
          </div>
          <div className="info-cards">
            <div>
              <span>500+</span>
              <p>Clients</p>
            </div>
             <div>
              <span>10 +</span>
              <p>Countries</p>
            </div>
             <div>
              <span>24/7</span>
              <p>Support</p>
            </div>
             <div>
              <span>99.9%</span>
              <p>Uptime</p>
            </div>
          </div>
        
       </div>
       <div className="card-description">
        <div>
          <span className='feature-icon'>🌐</span>
          <h2>Fast Connectivity</h2>
          <p>High-speed networks built for modern business across Africa.</p>
        </div>
        <div>
          <span className='feature-icon'>🔒</span>
          <h2>Secure networks</h2>
          <p>Our Cybersecurity team offer Enterprise-grade security protection to your data at every layer</p>
        </div>
        <div>
          <span className='feature-icon'>✨</span>
          <h2>24/7 Support</h2>
          <p>Round-the-clock technical support whenever you need it.</p>
        </div>
       </div>
     
    </div>
  )
}

export default Home