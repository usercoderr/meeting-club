import React, { useState } from 'react'
import { posts } from '../../../files/posts'
import { BiHeart, BiCommentDetail } from "react-icons/bi";
import userCom from '../../../image/usercom.png'
import userAva from '../../../image/userAva.png'
import { Link } from 'react-router-dom';
import CommunitiesPage from '../Communities/CommunitiesPage';

export default function PostsList() {
  const [like, setLike] = useState('')

  const handleLike = () => {
    setLike(!like)
  }
  return (
    <div>
      {posts.map(news =>
          <div className='news-box'>
            <div className='news-box-container'>
            <div className='news-name'>
              <div className='news-ava'>
                <Link to='/communities' element={<CommunitiesPage/>}><img src={news.communitieImage} alt="" /></Link>
              </div>
              <div>
              <Link to='/communities' element={<CommunitiesPage/>}><p>{news.name}</p></Link>
                <p>{news.data}</p>
              </div>
            </div>
            <div>
              <p>{news.newsDescription}</p>
              <img src={news.newsImage} alt="" />
            </div>
            <div className='news-icons'>
              <div>
                {!like && <div onClick={handleLike} className="news-icon"><BiHeart className="icon cp" />{news.likes}</div>}
                {like && <div onClick={handleLike} className="news-icon"><BiHeart className="icon likes cp" />{news.likes + 1}</div>}
              </div>
              <div>
                <div className="news-icon"><BiCommentDetail className='cp icon' />{news.comments}</div>
              </div>
            </div>
            </div>
            <div className='news-comments-container'>
            <div className='news-comments'> 
              <div className='news-user-ava'>
                <img src={userCom} alt="" />
              </div>
              <div>
                <p><b>Камилла Айпери</b></p>
                <p>Круто! Мы придем!</p>
              </div>
            </div>
            <div className='user-comment'>
              <div className='news-user-ava'>
                <img src={userAva} alt="" />
              </div>
              <div className='user-comment-input'>
                <input type="text" placeholder='Комментировать'/>
                <button className='user-comment-button'>Send</button>
              </div>
            </div>
            </div>
          </div>
      )}
    </div>
  )
}
