import React from 'react'
import logo from './../Icons/LOGO.png'
import ButtonReg from './ButtonReg'
import './HeaderLanding.css'
export default function HeaderLanding(props) {
  return (
    <div className='header'>
    <div className="header-inside">
        <div className="left-block">
            <div className="left-block_inside">
            <div className="logo">
                <img src={logo} width={62}
                height={54} alt="" />
            </div>
            <div className="info-block">
                <div className="first">
                    <p>
                        {props.first}
                    </p>
                </div>
                <div className="second">
                    <p>
                        {props.second}
                    </p>
                </div>
                <div className="third">
                    <p>
                        {props.third}
                    </p>
                </div>
                <div className="button">
                    <ButtonReg
                    text='Зарегистрироваться'/>
                </div>
            </div>
            </div>
        </div>
        <div className="right-block">
            <div className="right-block_inside">
                <div className="button2">
                    <ButtonReg
                    text='Вход'/>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}
