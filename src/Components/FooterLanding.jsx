import React from 'react'
import './FooterLan.css'
import insta from '../Icons/Vector (1).png'
import youtube from '../Icons/Vector (2).png'

export default function FooterLanding() {
  return (
    <div className='footer'>
        <div className="footer-inside">
            <div className="footer-inside_block">
                <div className="icons">
                    <div className="icons_inside">
                        <a href="/">
                            <img src={insta} className="insta" width={30} height={30} alt="" />
                        </a>
                        <a href="/">
                            <img src={youtube} width={40} height={30} alt="" />
                        </a>

                    </div>
                </div>
                <div className="about-us">
                    <ul>
                        <li>
                            Компания
                        </li>
                        <li>
                            О нас
                        </li>
                    </ul>
                </div>
                <div className="other">
                    <ul>
                        <li>
                            Политика
                        </li>
                        <li>
                            Условия пользования
                        </li>
                        <li>
                            Конфиденциальность
                        </li>
                        <li>
                            Настройки Cookie
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
