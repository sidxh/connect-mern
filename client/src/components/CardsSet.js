import React from 'react'
import Cards from './Cards'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react';
import axios from 'axios';


const Loader = () => (
  // <div className="loader">
  //   <div className="spinner"></div>
  // </div>
  <div class="loader">
    {/* <h1>Hold on,the initial render may take some time!</h1> */}
<svg class="pl" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="hsl(193, 90%, 55%)" />
      <stop offset="100%" stop-color="hsl(223, 90%, 55%)" />
    </linearGradient>
  </defs>
  <circle class="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0, 10%, 10%, 0.1)" stroke-width="16" stroke-linecap="round" />
  <path class="pl__worm" d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" fill="none" stroke="url(#pl-grad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="44 1111" stroke-dashoffset="10" />
</svg>
</div>
);


const CardsSet = () => {

    const { category, skill } = useParams();

    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://connectlnm-backend.onrender.com/${category}`);
          setData(response.data);
          setIsLoading(false);
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

  if (isLoading) {
    return <Loader />;
  }


  if (specificData.length === 0) {
    // Handle case when skill data is not found
    return (
      <div className='not-found'>
            <img id='no-data-img' src={require('../images/no-data.png')} alt='No Data Available' />
            <div className='not-found-text'>
            <h1>No Data Yet</h1>
            <p>We are working on expanding and scaling our database which is currently facing some non-technical issues. Hopefully we'll get it resolved ASAP. Meanwhile you can check all of other domains! </p>
            </div>

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
                skillset={specificData.skillset}
                experience={specificData.experience}
                achievement={specificData.achievement}
                rollno={specificData.rollno}
                linkedin={specificData.linkedin}
                email={specificData.email}
                />

            </>        
      ))}
            
        </div>
    </div>
  )
}




export default CardsSet

























































