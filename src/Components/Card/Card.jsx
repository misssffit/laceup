import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card({cards}) {
  return (
    <Link to="/ProductInfo">
    <div className='card_list_container'>
            <div className='card' key={cards.id}>
                <div className='card_icons'>
                        <img src={cards.new} alt="" className='card_icons_new'/>
                        <img src={cards.like} alt="" className='card_icons_like'/>
                    </div>
                        <div className='card_img'>
                            <img src={cards.img} alt="" />
                        </div>
                    <div className='card_content'>
                        <div className='card_content_text'>
                            <p className='card_content_model'>{cards.shoe_name}</p>
                            <p className='card_content_color'>{cards.shoe_color_name}</p>
                        </div>
                    <div className='card_content_price'>
                        <p className='card_content_price_new'>{cards.new_price}</p>
                        <p className='card_content_price_old'>{cards.old_price}</p>
                    </div>
                </div>
            </div>
    </div>
    </Link>
  )
}

export default Card