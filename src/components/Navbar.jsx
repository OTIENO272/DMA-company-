import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const goContact = () => { navigate('/contact', { replace: true }); closeMenu() }

  return (
    <div className='navbar'>
      <img src={Logo} alt="logo" width="130px" className='img' />

      {/* desktop */}
      <ul className='desktop-nav'>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/jobs'><li>Jobs</li></NavLink>
      </ul>
      <button className='desktop-btn' onClick={goContact}>Get Started</button>

      {/* hamburger */}
      <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* mobile dropdown */}
      {menuOpen && (
        <div className='mobile-menu'>
          <NavLink to='/'         onClick={closeMenu}>Home</NavLink>
          <NavLink to='/products' onClick={closeMenu}>Products</NavLink>
          <NavLink to='/about'    onClick={closeMenu}>About</NavLink>
          <NavLink to='/contact'  onClick={closeMenu}>Contact</NavLink>
          <NavLink to='/jobs'     onClick={closeMenu}>Jobs</NavLink>
          <button className='mobile-btn' onClick={goContact}>Get Started</button>
        </div>
      )}
    </div>
  )
}

export default Navbar