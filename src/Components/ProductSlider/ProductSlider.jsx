import React from 'react'
// import Swiper JS
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../Card/Card';
import './ProductSlider.css'


function ProductSlider ({card}) {
    return(
        <div className='card_container'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className='product_slider'
              style={{width: '1084px'}}
            >
              {card.map((cards) =>(
                <SwiperSlide key={cards.id}>
                  <Card cards ={cards}/>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
        
    )
}

export default ProductSlider