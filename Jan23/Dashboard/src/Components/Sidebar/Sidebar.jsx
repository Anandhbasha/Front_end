import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
    </div>
  )
}

export default Sidebar