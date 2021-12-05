import React from 'react'
import item_image from "./assets/lamp.jpg"

const MayLikeItem = ({ name, info}) => {
    return (
        <div className='may-like-item'>
            <img src={item_image} alt='item'/>
            <h2>{name}</h2>
            <p> {info}</p>
        </div>
    )
}

export default MayLikeItem
