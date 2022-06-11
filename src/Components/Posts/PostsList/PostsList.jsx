import React, { useState } from 'react'
import { posts } from '../../../files/posts'
import { BiHeart } from "react-icons/bi";

export default function PostsList() {
  const [like, setLike] = useState('')

  const handleLike = () => {
    setLike(!like)
  }
  return (
    <div>
      {posts.map(news =>
        <div className='news-box'>
          <div className='news-name'>
            <div className='news-ava'>
              <img src={news.communitieImage} alt="" />
            </div>
            <div>
              <p>{news.name}</p>
              <p>{news.data}</p>
            </div> 
          </div>
          <div>
            <p>{news.newsDescription}</p>
            <img src={news.newsImage} alt="" />
          </div>
          <div>
            <div>
              {!like && <div onClick={handleLike}><BiHeart/></div>}
              {like && <div onClick={handleLike} className="likes"><BiHeart/></div>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
