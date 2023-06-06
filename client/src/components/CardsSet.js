import React from 'react'
import Cards from './Cards'
import { useParams } from 'react-router-dom'
import SkillsData from '../pages/SkillsData'

import { useEffect, useState } from 'react';
import axios from 'axios';


const CardsSet = () => {

  // const MyComponent = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/web-technologies');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

    return(
      console.log(data)
    )

  // };


  const { category, skill } = useParams();

const skillData = SkillsData.filter(
    (skillData) =>
      skillData.category.toLowerCase() === category.toLowerCase() &&
      skillData.skill.toLowerCase() === skill.toLowerCase()
  );

  if (!skillData) {
    // Handle case when skill data is not found
    return <div>Invalid skill</div>;
  }


  return (
<div className='cards_set_head'>
        <h1>Web Technologies Mentors</h1>
        <div className='cards_set'>
        {skillData.map((skillData, index) => (
            <>
                <Cards 
                name={skillData.name}
                technicalSkillset={skillData.technicalSkillset}
                experience={skillData.experience}
                achievement={skillData.achievement}
                linkedin={skillData.linkedin}
                />

            </>        
      ))}
            
        </div>
    </div>
  )
}




export default CardsSet

























































