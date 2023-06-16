import React from "react"
import { NavLink } from "react-router-dom"

export default function Domains(){
    return(
        <div className="domains">
            <nav>
                <NavLink
                to="/explore" end
                id="shift_nav2"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >Web Technologies</NavLink>

                <NavLink
                to="/explore/nontech"
                id="shift_nav2"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >Non-Technical</NavLink>

                <NavLink
                to="/explore/core"
                id="shift_nav2"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >Core Domains</NavLink>

                <NavLink    
                to="/explore/media"
                id="shift_nav2"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >Media & Design</NavLink>

                <NavLink
                to="/explore/misc"
                id="shift_nav2"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >Miscellaneous</NavLink>
                
            </nav> 

        


        </div>
    )
}