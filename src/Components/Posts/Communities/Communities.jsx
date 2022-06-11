import React from 'react'
import { communities } from '../../../files/communities'

export default function Communities() {
    return (
        <div>
            {communities.map(item =>
                <div className='communities-box'>
                    <div><img src={item.image} alt="" /></div>
                    <div className='communities-name'>{item.name}</div>
                </div>
            )}
        </div>
    )
}
