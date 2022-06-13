import React from 'react'
import './BodyLanding.css'
import pic_one from '../../Icons/Rectangle 2 (1).png'
import lines from '../../Icons/вектор.png'
import pic_two from '../../Icons/Rectangle 3.png'
import pic_three from '../../Icons/Rectangle 4.png'
import ButtonReg from './ButtonReg'
import { Link } from 'react-router-dom'

export default function BodyLanding(props) {
  return (
      <div className='body-landing'>
        <div className='main'>
        <div className="first-block">
            <div className="first-block_inside">
                <div className="picture-one">
                    <img src={pic_one}  alt="" />
                </div>
                <div className="desc-block">
                    <div className="first-block_line_left">
                        <img src={lines} alt="" />
                    </div>
                    <div className="text">
                        <p>
                        Собирайтесь в группы, где вход <span className='yellow-text'>
                        только по приглашениям
                        </span> , чтобы чувствовать себя комфортно
                        </p>
                    </div>
                    <div className="first-block_line_right">
                        <img src={lines} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="second-block">
            <div className="second-block_inside">
                <div className="desc-block_two">
                    <div className="second-block_line_left">
                        <img src={lines} alt="" />
                    </div>
                    <div className="text_2">
                        <p>
                        Проведи выходные в компании друзей по интересам
                        </p>
                    </div>
                    <div className="second-block_line_right">
                        <img src={lines} alt="" />
                    </div>

                </div>
                <div className="picture-two">
                    <img src={pic_two} alt="" />
                </div>
            </div>
        </div>
        <div className="third-block">
            <div className="third-block_inside">
              <div className="picture-three">
                  <img src={pic_three} alt="" />
              </div>
              <div className="third-block_text">
                 <p>
                 Используй <span className='yellow-text'>
                 MEETING CLUB
                     </span>  для поддержаний отношений как с коллегами, так и друзьями
                 </p>
              </div>
            </div>
        </div>
        <div className="join">
            <div className="join_inside">
                <p>
                Готовы начать своё путешествие?
                </p>
            </div>
            <div className="registration">
            <Link to="/registration" className='links-routes'>

                <ButtonReg
                text='Зарегистрироваться'/>
                </Link>
            </div>
            
        </div>
    </div>
    </div>
  )
}
