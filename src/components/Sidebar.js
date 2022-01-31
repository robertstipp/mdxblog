import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { GiMuscleFat, GiMuscleUp } from 'react-icons/gi'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'showSidebar' : ''} `}>
      <button className="close-btn" onClick={toggle}>
        <GiMuscleUp />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links" />
      </div>
    </aside>
  )
}

export default Sidebar
