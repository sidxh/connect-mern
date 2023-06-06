// import React from "react"
// import Tilt from "react-parallax-tilt";

// export default function Cards(props){
//     return(
//         <div className="cards_component">
//             <img src={require("../images/user2.png")} />
//             <h1>{props.name}</h1>
//             <ul>
//                 <li>Line1</li>
//                 <li>Line2</li>
//                 <li>Line3</li>
//             </ul>
//         </div>
//     )
// }


import React, { useState } from 'react';

const Cards = (props) => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="cards_component">
      <img src={require("../images/user2.png")} alt="User" />
      <h1>{props.name}</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => handleTabChange('experience')}
        >
          Experience
        </button>
        <button
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabChange('contact')}
        >
          Contact
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'experience' && (
          <div>
            {/* Render experience content here */}
            <ul className='exp_ul'>
              <li>{props.technicalSkillset}</li>
              <li>{props.experience}</li>
              <li>{props.achievement}</li>
            </ul>
          </div>
        )}
        {activeTab === 'contact' && (
          <div className='contact'>
            <h3>Contact</h3>
            {/* Render contact content here */}
            <button><a href={props.linkedin} target="_blank">LinkedIn</a></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;


{/*         <div className="cards_component">
            <img className="user_img" src={require("../images/user2.png")} />
            <h1>{props.name}</h1>
            <p>{props.role}</p>
        </div> */}