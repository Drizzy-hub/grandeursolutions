import React from 'react'
import './Card.css';

function Card({title, icon, iconColor, description1, onClickFunc,description}) {
  return (
    <div className='card' onClick={onClickFunc}>
        <div className='card-icon' style={{color: iconColor}}>{icon}</div>
        <div className='card-title'>{title}</div>
        <div className='card-desciption'>{description}</div>
        <div className='card-desciption1'>{description1}</div>
    </div>
  )
}

export default Card