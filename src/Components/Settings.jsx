import React from 'react'
import logo from '../Icons/LOGO2.png'
import plus from '../Icons/Plus.png'
import './Settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settings-inside">
            <div className="logo">
                <img src={logo} width={62}
                height={54} alt="" />
            </div>
            <div className="avatar">
                <div className="avatar-frame">
                    <div className="add">
                        <button>

                        <img src={plus} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
