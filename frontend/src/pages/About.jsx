import '../styles/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <h1>About DMA </h1>
      <p>We are a Kenyan based infrastructure company on a mission to connect businesses locally and across East Africa with fast reliable and secure technology solutions.Founded in 2019, we`ve grown and server many clients across the region</p>
      </div>
      <div className="about">

        <div className="mission">
          <span>🏹</span>
          <h4>Our Mission</h4>
          <p>To make world-class infrastructure accessible to every business in Africa.</p>
        </div>
       <div className="vision">
        <span>🚡</span>
        <h4>Our Vision</h4>
        <p>A fully connected Africa where technology drives economic growth and opportunity</p>
       </div>

      </div>
      <div className="choice">
        <h2>Why Choose us?</h2>
        <ul>
          <li>✅5+ years of combined industry experience</li>
          <li>✅Local presence with global standards</li>
          
          <li>✅Transparent pricing,no hidden fees</li>
          <li>✅Dedicated account manager for every client</li>
        </ul>
      </div>
      
      <div className="team">
        <h3>Meet the Head Team</h3>
         <div>
          <span>B</span>
          <span>Brian Onyango</span>
          <p>CEO & Founder</p>
         </div>
         <div>
          <span>A</span>
          <span>Aish Kamau</span>
          <p>System Architect</p>
         </div>

         <div>
          <span>J</span>
          <span>James Makau</span>
          <p>lead Designer</p>
         </div>
      </div>
    </div>
  )
}

export default About