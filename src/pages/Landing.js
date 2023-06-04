import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";import Header from '../components/Header';
import { Link } from "react-router-dom"

const Landing = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  return (
      <div className="landing">
            <Particles options={particlesOptions} init={particlesInit}/>
            <div className='main'>
              <div className='new_main'>
            <img className="logos" src={require('../logos.png')} />
          <div className="main-text">
              <h1>Connections</h1>
              <p id="landing-p-desk">Upskill By Harnessing the Power of Community!</p>
        </div>
    </div>
    <p id="landing-p-mob">Upskill By Harnessing the Power of Community!</p>

    
    </div> 
    <Link id="landing-btn" to="/vision">Get Started</Link>         
      </div>
  )
}

export default Landing
