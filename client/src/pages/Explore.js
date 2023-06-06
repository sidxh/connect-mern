import React from "react"
import { Link } from "react-router-dom"
import Domains from "./Domains"
import { Outlet } from "react-router-dom"

export default function Explore(){
    return(
        <div className="explore">
            <div className="explore_contents">
            </div>
            <div className="search_bar"></div>
            <Domains />
            <Outlet />
        </div>
    )
}


{/* <div className="App">
<Particles options={particlesOptions} init={particlesInit}/>           
</div> */}