import React from 'react'

const DevCards = (props) => {
  return (
      <div className="dev_cont">
                <img className="dev_img" src={require("../images/user2.png")} />
                <h1>{props.name}</h1>
                <h2>{props.skill}</h2>
                <p>{props.descp}</p>
                <div className="dev_socials">
                    <button className='social_btn'>
                        <div><img className='social_logo' src={require('../images/conect-linkedin.png')} /></div>
                        <h1>LinkedIn</h1>
                    </button>
                    <button className='social_btn'>
                        <div><img className='social_logo' src={require('../images/conect-github.png')} /></div>
                        <h1>Github</h1>
                    </button>
                </div>

            </div>
  )
}

export default DevCards
