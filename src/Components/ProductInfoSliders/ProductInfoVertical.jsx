import React from 'react'
import pi from '../Data/productInfo'
import './Vertical.css'

// import Swiper JS
import { Navigation, Mousewheel} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProductInfoVertical() {

  return (
    <div className="vertical_container">
        <Swiper

          modules={[Navigation,Mousewheel,]}
          direction={'vertical'}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          mousewheel={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='product_slider'
          style={{height: '584px'}}
        >
              {pi.map((item) =>(
                <SwiperSlide key={item.id} style={{textAlign: 'center'}}>
                  <img src={item.img} alt="" />
                </SwiperSlide>
              ))}
        </Swiper>
    </div>
  )
}

export default ProductInfoVertical