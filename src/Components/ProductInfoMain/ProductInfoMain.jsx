import React from 'react'
import "./ProductInfoMain.css"
import ProductInfoHorizontal from '../ProductInfoSliders/ProductInfoHorizontal'
import ProductInfoVertical from '../ProductInfoSliders/ProductInfoVertical'
import sl from '../Assets/size_list.svg'
import like from '../Assets/like icon.svg'
import cart from '../Assets/Header_icon_cart.svg'
import im from '../Data/productInfo'
import ProductSlider from '../ProductSlider/ProductSlider'
import card from '../Data/catalog'

function ProductInfoMain() {
  return (
    <div className='product_container'>
        <div className="product_content">
            <div className="product_description">
                <div className="description_sliders">
                    <ProductInfoVertical/>
                    <ProductInfoHorizontal/>
                </div>
                <div className="description_content">
                    <h3 className='content_title'>
                        Опис
                    </h3>
                    <div className="content_text">
                        <div className="text_start">
                            <p>Застібка:</p>
                            <p>Стать:</p>
                            <p>Бренд:</p>
                            <p>Колекція:</p>
                            <p>Матеріал підкладки:</p>
                            <p>Призначення:</p>
                        </div>
                        <div className="text_end">
                            <p>Шнурівка</p>
                            <p>Чоловіча</p>
                            <p>Nike</p>
                            <p>air max</p>
                            <p>Текстиль</p>
                            <p>Бігові</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_choose">
                <div className="choose_name">
                    <div className="name_shoe">
                        <h3>
                        Nike Air Max Animal
                        </h3>
                        <p>
                        DQ3977-001
                        </p>
                    </div>
                    <div className="name_price">
                        <p className='name_price_new'>2 360₴</p>
                        <p className='name_price_old'>2 560₴</p>
                    </div>
                </div>
                <div className="choose_size">
                    <div className="size_title">
                        <h3>
                            Розміри
                        </h3>
                        <button>
                            <span>Таблиця розмірів</span>
                            <img src={sl} alt="" />
                        </button>
                    </div>
                    <div className="size_array">
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                        <button>44</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                        <button>44</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                        <button>44</button>
                    </div>
                </div>
                <div className="choose_delivery">
                    <h3>
                        Доставка
                    </h3>
                    <div className="delivery_type">
                        <div className="delivery_buttons">
                            <button>1-2 дні</button>
                            <button>7-14 днів</button>
                        </div>
                        <div className="delivery_text">
                            <p>- з України</p>
                            <p>- з-за кордону</p>
                        </div>
                    </div>
                </div>
                <div className="choose_color">
                    <h3>
                        Колір
                    </h3>
                    <div className="color_images">
                        <img src={im[1].img} alt="" />
                        <img src={im[2].img} alt="" />
                        <img src={im[3].img} alt="" />
                    </div>
                </div>
                <div className="choose_buttons">
                    <button className='buy_button'>
                        <span>Купити</span>
                        <img src={cart} alt="" />
                    </button>
                    <button className='like_button'>
                        <span>Обране</span> 
                        <img src={like} alt="" />
                    </button>
                </div>
            </div>
        </div>
        <div className="product_recommend">
            <h1>
                Рекомендуємо
            </h1>
            <ProductSlider card={card}/>
        </div>
    </div>
  )
}

export default ProductInfoMain