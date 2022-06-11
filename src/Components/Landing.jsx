import React from 'react'
import BodyLanding from './BodyLanding'
import FooterLanding from './FooterLanding'
import HeaderLanding from './HeaderLanding'

export default function Landing() {
  return (
    <div>
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
