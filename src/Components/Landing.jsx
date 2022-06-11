import React from 'react'
import BodyLanding from './BodyLanding'
import FooterLanding from './FooterLanding'
import HeaderLanding from './HeaderLanding'
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
