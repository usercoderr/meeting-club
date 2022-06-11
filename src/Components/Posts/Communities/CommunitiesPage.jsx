import React, { useState } from 'react'
import '../Posts.css'
import logo from '../../../image/logo.png'
import user from '../../../image/user.png'
import userPhoto from '../../../image/userphoto.png'
import Communities from '../Communities/CommunitiesCategories'
import comunitiesPhoto from '../../../image/communitiesphoto.png'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import comImg from '../../../image/postPhoto3.png'
import CommunitiesList from './CommunitiesList'

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState('')

  const handleClick = () => {
    setCommunities(!communities)
  }
  return (
    <div>
      <div className='row '>
        <div className='panel'>
          <a href="#"><img src={logo} alt="" /></a>
          <a href="#" className='panel-icon'><img src={user} alt="" /></a>
        </div>
        <div className='user-panel'>
          <img src={userPhoto} alt="" />
          <p>Манас Султанов</p>
          {communities &&
            <div className='user-panel-button' onClick={handleClick}>
              <div>
                Сообщества
              </div>
              <span>
                <BiChevronDown />
              </span>
            </div>
          }
          {!communities && <div className='user-panel-button' onClick={handleClick}>
            <div>
              Сообщества
            </div>
            <span>
              <BiChevronUp />
            </span>
          </div>}
          {communities && <div className='communities'>
            <Communities />
          </div>}
        </div>
        <div className='communities-container'>
          <img src={comunitiesPhoto} alt="" />
          <div className='df communities-name'>
            <div className='df'>
              <div>
                <img src={comImg} alt="" />
              </div>
              <div className='communities-description'>
                <p className='communities-title'>Твин Пикс </p>
                <p>Не только кино</p>
              </div>
            </div>
            <div className='communities-button'>
              <button>
                <div className='communities-icons'>
                  Вы подписаны
                  <span className='communities-icon'>
                    <BiChevronDown />
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className='communities-information'>
            <div className='information-name'>
              <div className='information-container'>
              Информация
              </div>
            </div>
            <div className='information-container'>
              <p>Для любителей сериалов и кино. Присоединяйтесь к нашим уютным киновечерам. Анализируем кино и пьем вино!</p>
              <p><a href="https://t.me/ooorange">https://t.me/ooorange</a> наш телеграм</p>
            </div>
          </div>
          <div className='posts-container'>
                <div className='posts'>
                    <CommunitiesList />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
