import React from 'react'
import { communitiesCategories } from '../../../files/communitiesCategories'

export default function Communities() {
    return (
        <div>
            {communitiesCategories.map(item =>
                    <div className='communities-box'>
                    <div><img src={item.image} alt="" /></div>
                    <div className='communities-name'>{item.name}</div>
                    </div>
            )}
        </div>
    )
}
