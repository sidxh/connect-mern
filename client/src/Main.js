import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import Landing from './pages/Landing';
import Vision from "./pages/Vision"
import Explore from "./pages/Explore"
import Opportunities from "./pages/Opportunities"
import ReachOut from "./pages/ReachOut"
import WebTech from './pages/WebTech';
import NonTech from './pages/NonTech';
import Core from './pages/Core';
import Media from './pages/Media';
import Misc from './pages/Misc';

const Main = () => {
  return (
    <BrowserRouter>
        <header>
            <nav>
                <NavLink id='logos_nav' 
                to="/" className={({ isActive }) => (isActive ? 'inactive' : 'inactive')}>
                <img className='logos_2' src={require('./name-head.png')}/></NavLink>

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
                ><img className='logos_3' src={require('./listed2.png')}/></NavLink>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/explore" element={<Explore />}>
                <Route index element={<WebTech />} />
                <Route path="nontech" element={<NonTech />} />
                <Route path="core" element={<Core />} />
                <Route path="media" element={<Media />} />
                <Route path="misc" element={<Misc />} />
            </Route>
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/reach-out" element={<ReachOut />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Main
