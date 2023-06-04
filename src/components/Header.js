import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom"

const Header = () => {
  return (
    <div className='headers'>
    <header>
        <nav>
            <NavLink id='logos_nav' 
            to="/" className={({ isActive }) => (isActive ? 'inactive' : 'inactive')}>
            <img className='logos_2' src={require('../name-head.png')}/></NavLink>

            <NavLink id='shift_nav' 
            to="/vision"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >Vision</NavLink>

            <NavLink id='shift_nav' 
            to="/explore"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >Explore</NavLink>

            <NavLink id='shift_nav' 
            to="/opportunities"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >Opportunities</NavLink>

            <NavLink id='shift_nav' 
            to="/reach-out"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >Reachout</NavLink>

            <NavLink id='btn_nav'
            to="/listed"
            className={({ isActive }) => (isActive ? 'inactive' : 'inactive')}
            ><img className='logos_3' src={require('../get_listed.png')}/></NavLink>
        </nav>
    </header>
    <Outlet />
    </div>
  )
}

export default Header
