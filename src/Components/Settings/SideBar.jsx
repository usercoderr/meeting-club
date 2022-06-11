import React from 'react'
import logo from '../../Icons/LOGO2.png'
import setIcon from '../../Icons/settings.png'
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='side-bar'>
        <div className="side-bar_inside">
          <div className="side-bar_inside_logo">
              <img src={logo} width={62} height={54} alt="" />
          </div>
          
        </div>


    </div>
  )
}
