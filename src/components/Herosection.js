import React from 'react';
import './Herosection.css';
import bgImage from './Videos/Churchfile1.mp4'

function Herosection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4"/>
      </video>  
      <h2>Worship with us at any Christ Living Church near you.</h2>

      <h3>“Come to me, all you who are weary and burdened, and I will give you rest.”</h3>

      <p>- Matthew 11:28</p>

    </div>
  )
}

export default Herosection;