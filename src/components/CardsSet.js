import React from 'react'
import Cards from './Cards'
import { useParams } from 'react-router-dom'
import SkillsData from '../pages/SkillsData'

const CardsSet = () => {

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
                <Cards name={skillData.name} />
            </>        
      ))}
            
        </div>
    </div>
  )
}

export default CardsSet
