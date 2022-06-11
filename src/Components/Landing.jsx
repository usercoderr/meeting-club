import React from 'react'
import HeaderLanding from './Landing/HeaderLanding'
import BodyLanding from './Landing/BodyLanding'
import FooterLanding from './Landing/FooterLanding'
import './Landing.css'
export default function Landing() {
  return (
    <div className='landing'>
        <HeaderLanding
        first= 'Meeting club'
        second= 'Найди единомышленников'
        third= 'Присоединяйся к ближайшим событиям'/>
        <BodyLanding 
        text=''/>
        <FooterLanding/>
        
    </div>
  )
}
