import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleGetStarted = () => {
    navigate('/contact', { replace: true })
    closeMenu()
  }
 const handleAdmin =()=>{
  navigate('/admin')
 }
  return (
    <div className='navbar'>
      <img src={Logo} alt="logo" className='img' />

      {/* desktop nav */}
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/jobs'><li>Jobs</li></NavLink>
      </ul>

      {/* desktop button */}
      {/* <button onClick={handleGetStarted}>Get Started</button> */}
      <button className='admin' onClick={handleAdmin}>Admin</button>

      {/* hamburger — only visible on mobile via CSS */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* mobile menu overlay */}
      <ul className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to='/'        onClick={closeMenu}><li>Home</li></NavLink>
        <NavLink to='/products'onClick={closeMenu}><li>Products</li></NavLink>
        <NavLink to='/about'   onClick={closeMenu}><li>About</li></NavLink>
        <NavLink to='/contact' onClick={closeMenu}><li>Contact</li></NavLink>
        <NavLink to='/jobs'    onClick={closeMenu}><li>Jobs</li></NavLink>
        <button onClick={handleGetStarted}>Get Started</button>
      </ul>
    </div>
  )
}

export default Navbar