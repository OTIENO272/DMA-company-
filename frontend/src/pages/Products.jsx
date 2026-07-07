
import '../styles/Products.css'
const Products = () => {
  return (
    <div className="products-container">
      <div className="products-intro">
        <h1>Our Products</h1>
        <p>Everything your Business needs to thrive in this digital age</p>
        </div>
        <div className="prdct_description">
          <div className="web-card">
            <span>🌐</span>
            <h3>Web Solutions</h3>
            <p>Custom Websites and web apps built for performance and scale</p>
          </div>
          <div className="network_infrastructure">
            <span>📡</span>
            <h3>Network Infrastructure</h3>
            <p>End-to-end network setup and management for your business</p>
          </div>
          <div className="cybersecurity">
            <span>🔒</span>
            <h3>Cybersecurity</h3>
            <p>Protect your systems with our advanced security solutions</p>
          </div>
          <div className="cloud">
            <span>☁️</span>
            <h3>Cloud Hosting</h3>
            <p>Reliable,fast cloud hosting with 99.9% uptime guarantee </p>
          </div>
          <div className="app">
            <span>📱</span>
            <h3>Mobile Apps</h3>
            <p>Cross-platform nobile for Android and IOS</p>
          </div>
          <div className="data">
            <span>📊</span>
            <h3>Data Analytics</h3>
            <p>Turn your data /info into actionable business analysis</p>
          </div>
        </div>
      
      
    </div>
  )
}

export default Products