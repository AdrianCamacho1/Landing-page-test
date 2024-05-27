import React from 'react'
import Logo from '../assets/Logo.png'

import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <div className='nav-header'>
        <div className="nav-header__logo">
          <a href = "/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className='nav-header__items'>
          <a href='/'>Home</a>
          <a>Service</a>
          <a>Tools</a>
          <a>Pricing</a>
          <a>Faq</a>
          <a>Carrers</a>
        </div>
        <div>
          <a>Blog</a>
        </div>
      </div>
    </nav>
  )
}




