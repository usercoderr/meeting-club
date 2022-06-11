import React, { useState } from 'react'
import '../Posts.css'
import logo from '../../../image/logo.png'
import user from '../../../image/user.png'
import userPhoto from '../../../image/userphoto.png'
import Communities from '../Communities/CommunitiesCategories'
import comunitiesPhoto from '../../../image/communitiesphoto.png'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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
            </div>
        </div>
    </div>
  )
}
