import React from 'react'
import { Link } from 'gatsby'
import { GiMuscleUp, GiMuscleFat } from 'react-icons/gi'
import logo from '../assets/logo.svg'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
const Navbar = ({ toggle }) => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="mdx logo" />
          </Link>
          <button className="toggle-btn" onClick={toggle}>
            <GiMuscleUp />
          </button>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  )
}

export default Navbar
