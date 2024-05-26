import React from 'react'
import news from '../Data/news'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css"
import nr from '../Assets/new_arrow.png'

function News() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
    <div className='news_container'>
        <Slider {...settings} className='news_slider'>
                    {news.map((item) =>
                        <div className='news_component' key={item.id}>
                            <div className='news_content' style={{
                                  backgroundImage: `linear-gradient(180deg, rgba(15,15,15,1) 0%, rgba(255,255,255,0) 100%), url(${item.image})`,
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: '50% 50%',
                                  width: '532px',
                                  height: '355px'
                            }}>
                                <div className='news_text'>
                                    <h1>{item.title}</h1>
                                    <p>{item.context}</p>
                                    <img src={nr} alt="" />
                                </div>
                            </div>
                        </div>
                    )}
        </Slider>
    </div>
  )
}

export default News