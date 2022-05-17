import React from 'react';
import './HeroOptions.css';
import Card from '../components/Card'


function HeroOptions() {
  return (
    <div className='card-container'>
        <Card  title='Location'  icon={<i class='fa fa-map-marker'/>} iconColor={'#00AEB8'} iconBg={'#E8F8F9'} description="N0, 12 Roversenre street, Belgium"/>
        <Card  title='Service Days'  icon={<i class='fas fa-clock'/>} iconColor={'#00AEB8'} iconBg={'#E8F8F9'} description="Every Sunday" description1="9.00 Am - 12.00 PM"/>
        <Card  title='Tithes & Offering'  icon={<i class='fas fa-hand-holding-usd'/>} iconColor={'#00AEB8'} iconBg={'#E8F8F9'} description="Do you want to pay your tithe? " description1="Kindly click here "/>
    </div>
  )
}

export default HeroOptions;