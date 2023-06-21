import React, { useState } from 'react';

const Cards = (props) => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="cards_component">
      <h1>{props.name}</h1>
      <p>{props.skill}</p>
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
              <li>Technical Skillset</li>
              <span><button>{props.skillset}</button></span>
              <li>Experience</li>
              <span><button>{props.experience}</button></span>
              <li>Achievements</li>
              <span><button>{props.achievement}</button></span>
            </ul>
          </div>
        )}
        {activeTab === 'contact' && (
          <div className='contact'>
            <ul className='exp_ul'>
              <li>Roll Number</li>
              <span><button>{props.rollno}</button></span>
              <li>LinkedIn Handle</li>
              <span><a href={props.linkedin} target='_blank' rel="noreferrer">LinkedIn</a></span>
              <li>Email ID</li>
              <span><a href={props.email} target='_blank' rel="noreferrer">Email ID</a></span>
            </ul>
          </div>
        )}
      </div>
      </div>
  );
};

export default Cards;