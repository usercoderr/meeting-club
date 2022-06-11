import React, { useState } from 'react'
import './Posts.css'
import logo from '../../image/logo.png'
import user from '../../image/user.png'
import userPhoto from '../../image/userphoto.png'
import Communities from './Communities/Communities'
import PostsList from './PostsList/PostsList'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";



export default function Posts() {
    const [communities, setCommunities] = useState('')

    const handleClick = () => {
        setCommunities(!communities)
    }
    return (
        <div className='row '>
            <div className='panel'>
                <a href="#"><img src={logo} alt="" /></a>
                <a href="#" className='panel-icon'><img src={user} alt="" /></a>
            </div>
            <div className='user-panel'>
                <img src={userPhoto} alt="" />
                <p>Манас Султанов</p>
                {communities &&
                        <a href="#" className='user-panel-button' onClick={handleClick}>
                            <div>
                            Сообщества
                            </div>
                            <span>
                                <BiChevronDown />
                            </span>
                        </a>
                }
                {!communities &&  <a href="#" className='user-panel-button' onClick={handleClick}>
                            <div>
                            Сообщества
                            </div>
                            <span>
                                <BiChevronUp />
                            </span>
                        </a>}
                {communities && <div className='communities'>
                    <Communities />
                </div>}
            </div>
            <div className='posts-container'>
                <div className='posts'>
                    <div className='posts-input'>
                        <input type="text" placeholder='Поиск' />
                    </div>
                    <PostsList />
                </div>
                <div className='posts-button'>
                    <button>Выход</button>
                </div>
            </div>
        </div>
    )
}
