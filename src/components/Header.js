import Logo from '../asset/logo.png'
import { Link,NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
   <header>
    <NavLink to='/' className='logo'>
    <img src={Logo} alt='Routemate Logo' />
    <span>RouteMate</span>
    </NavLink>
    <nav className='navigation'>
    <NavLink to='/' className='link' end>Home</NavLink>
    <NavLink to='/products' className='NavLink'>Products</NavLink>
    <NavLink to='/contact' className='link'>Contact</NavLink>
    </nav>
   </header>
  )
}

export default Header
