import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Icons/LOGO.png'
import ButtonReg from './ButtonReg'
import './HeaderLanding.css'
export default function HeaderLanding(props) {
  return (
    <div className='header'>
    <div className="header-inside">
        <div className="left-block">
            <div className="left-block_inside">
            <div className="logo">
            <Link to="/posts" className='links-routes'>

                <img src={logo} width={62}
                height={54} alt="" />
            </Link>
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
                <Link to="/registration" className='links-routes'>

                    <ButtonReg
                    text='Зарегистрироваться'/>
                </Link>
                </div>
            </div>
            </div>
        </div>
        <div className="right-block">
            <div className="right-block_inside">
                <div className="button2">
                    <Link to="/sign-in" className='links-routes'>
                        <ButtonReg
                        text='Вход'/>
                    </Link>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}
