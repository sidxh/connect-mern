import React from 'react'
import Cards from './Cards'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react';
import axios from 'axios';


const CardsSet = () => {

    const { category, skill } = useParams();

    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/${category}`);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [category]);

    console.log(category)
      console.log(data)



  // data.map(x=> console.log(x.name))

  // const specificData = data

  const specificData = data.filter(
    (skillData) =>
      skillData.category.toLowerCase() === category.toLowerCase() &&
      skillData.skill.toLowerCase() === skill.toLowerCase()
  );

  if (specificData.length === 0) {
    // Handle case when skill data is not found
    return (
      <div className='not-found'>
            <img id='no-data-img' src={require('../images/no-data.png')} />
            <h1>No Data Yet</h1>
            <p>We are working on expanding and scaling our database which is currently facing some non-technical issues. Hopefully we'll get it resolved ASAP. Meanwhile you can check all of other domains! </p>

      </div>
    )
    
    
    
;
  }

  const firstSkill = specificData[0];

  return (
<div className='cards_set_head'>
        <h1>{firstSkill.skill}</h1>
        <div className='cards_set'>
        {specificData.map((specificData, index) => (
            <>
                <Cards 
                name={specificData.name}
                skill={specificData.skill}
                technicalSkillset={specificData.technicalSkillset}
                experience={specificData.experience}
                achievement={specificData.achievement}
                linkedin={specificData.linkedin}
                />

            </>        
      ))}
            
        </div>
    </div>
  )
}




export default CardsSet

























































