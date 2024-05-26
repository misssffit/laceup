import React from 'react'
import './Main.css'
import nike from "../Assets/Main_nike.svg"
import adidas from "../Assets/Main_adidas.svg"
import puma from "../Assets/Main_puma.svg"
import reebok from "../Assets/Main_reebok.svg"
import newbalance from "../Assets/Main_newbalance.svg"
import asics from "../Assets/Main_asics.svg"
import ProductSlider from '../ProductSlider/ProductSlider'
import News from '../News/News'

import card from '../Data/catalog'

function Main() {
    
  return(
    
    <div className='main'>
        <div className='container'>
            <div className='main_brands'>
                <p>Бренди</p>
                <div className='main_brands_images'>
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                    <img src={puma} alt="" />
                    <img src={reebok} alt="" />
                    <img src={newbalance} alt="" />
                    <img src={asics} alt="" />
                </div>
            </div>
            <div className='main_catalog'>
                <h2 className='main_catalog_title'>Нові натходження</h2>
                <ProductSlider card={card}/>
            </div>
            <div className='main_news'>
                <h2 className='main_news_title'>Новини</h2>
                <News/>
            </div>
        </div>
    </div>
  )
}



export default Main