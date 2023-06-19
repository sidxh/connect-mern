import React from 'react'

const DevCards = (props) => {
  return (
      <div className="dev_cont">
                <img className="dev_img" src={require("../images/user2.png")} alt='Developer' />
                <h1>{props.name}</h1>
                <h2>{props.skill}</h2>
                <p>{props.descp}</p>
                <div className="dev_socials">
                    <button className='social_btn'>
                        <a href={props.linkedin} target="_blank" rel='noreferrer'>
                            <div><img className='social_logo' src={require('../images/conect-linkedin.png')} alt='LinkedIN' /></div>
                        <h1>LinkedIn</h1>
                        </a>
                    </button>
                    <button className='social_btn'>
                        <a href={props.github} target="_blank" rel='noreferrer'><div><img className='social_logo' src={require('../images/conect-github.png')} alt="Github" /></div>
                        <h1>Github</h1></a>
                    </button>
                </div>

            </div>
  )
}

export default DevCards
