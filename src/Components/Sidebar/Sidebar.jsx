import React from 'react'
import tr from '../Assets/trash.svg'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar_container'>
        <div className="sidebar_filter">
            <div className="filter_title">
                Фільтр
            </div>
            <div className="sidebar_price filter_mg">
                <div className="filter_category_title">
                    Ціна
                </div>
                <div className="price_content">
                    <div className="price_filter display">
                        <p>від</p>
                        <input type="text" placeholder='0' className='price_input' />
                    </div>
                    <div className="price_filter display">
                        <p>до</p>
                        <input type="text" placeholder='10 000' className='price_input'/>
                    </div>
                </div>
            </div>
            <div className="sidebar_sex filter_mg">
                <div className="filter_category_title">
                    Стать
                </div>
                <div className="sex_content ">
                    <div className="sex_filter display">
                        <input type="checkbox" className='filter_checkbox' />
                        <p>Чоловіча</p>
                    </div>
                    <div className="sex_filter display">
                        <input type="checkbox" className='filter_checkbox' />
                        <p>Жіноча</p>
                    </div>
                    <div className="sex_filter display">
                        <input type="checkbox"  className='filter_checkbox'/>
                        <p>Дитяча</p>
                    </div>
                    <div className="sex_filter display">
                        <input type="checkbox"  className='filter_checkbox'/>
                        <p>Унічекс</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_brand filter_mg">
                <div className="filter_category_title">
                    Бренд
                </div>
                <div className="brand_content">
                    <div className="brand_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Nike</p>
                    </div>
                    <div className="brand_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Adidas</p>
                    </div>
                    <div className="brand_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>New Balance</p>
                    </div>
                    <div className="brand_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Asics</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_category filter_mg">
                <div className="filter_category_title">
                    Тип
                </div>
                <div className="category_content">
                    <div className="category_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Кеди</p>
                    </div>
                    <div className="category_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Кросівки</p>
                    </div>
                    <div className="category_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Туфлі</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_size filter_mg">
                <div className="filter_category_title">
                    Розмір
                </div>
                <div className="size_content">
                    <div className="size_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>40</p>
                    </div>
                    <div className="size_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>41</p>
                    </div>
                    <div className="size_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>42</p>
                    </div>
                    <div className="size_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>42.5</p>
                    </div>
                    <div className="size_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>43</p>
                    </div>
                    <div className="size_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>44</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_color filter_mg">
                <div className="filter_category_title">
                    Колір
                </div>
                <div className="color_content">
                    <div className="color_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <span className='color_box white'></span><p>Білий</p>
                    </div>
                    <div className="color_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <span className='color_box black'></span><p>Чорний</p>
                    </div>
                    <div className="color_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <span className='color_box grey'></span><p>Сірий</p>
                    </div>
                    <div className="color_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <span className='color_box red'></span><p>Червоний</p>
                    </div>
                    <div className="color_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <span className='color_box yellow'></span><p>Жовтий</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_seson filter_mg">
                <div className="filter_category_title">
                    Сезон
                </div>
                <div className="seson_content">
                    <div className="seson_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Зима</p>
                    </div>
                    <div className="seson_filter display">
                        <input type="checkbox" className='filter_checkbox' />
                        <p>Весна</p>
                    </div>
                    <div className="seson_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Літо</p>
                    </div>
                    <div className="seson_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>Осінь</p>
                    </div>
                    <div className="seson_filter display">
                        <input type="checkbox" />
                        <p>Демісезон</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_delivery filter_mg">
                <div className="filter_category_title">
                    Доставка
                </div>
                <div className="delivery_content">
                    <div className="delivery_filter display">
                        <input type="checkbox" className='filter_checkbox'/>
                        <p>1-2 дні</p>
                    </div>
                    <div className="delivery_filter display">
                        <input type="checkbox" className='filter_checkbox' />
                        <p>7-14 дні</p>
                    </div>
                </div>
            </div>
            <div className="filter_clear">
                <p>Очистити</p><img src={tr} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sidebar