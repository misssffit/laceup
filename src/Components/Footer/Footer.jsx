import React from 'react'
import inst from '../Assets/inst_icon.svg'
import tt from '../Assets/tiktok_icon.svg'
import logo from '../Assets/footer_logo.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer_container'>
        <div className="footer_logo">
            <img src={logo} alt="" />
        </div>
        <div className="footer_content">
            <div className='footer_contacts'>
                <h5>Контактна інформація</h5>
                <div className='footer_contacts_phone'>
                    <p className='footer_text'>Номер телефону</p>
                    <p className='footer_subtext'>+380994773463</p>
                </div>
                <div className='footer_contacts_email'>
                    <p className='footer_text'>Пошта</p>
                    <p className='footer_subtext'>laceupua@gmail.com</p>
                </div>
            </div>
            <div className='footer_about'>
                <h5>Про нас</h5>
                <p className='footer_text'>Доставка</p>
                <p className='footer_text'>Оплата</p>
                <p className='footer_text'>Є питання?</p>
            </div>
            <div className='footer_schedule'>
                <h5>Графік роботи</h5>
                <div className='footer_schedule_text'>
                    <p className='footer_text'>Понеділок - п’ятниця</p>
                    <p className='footer_subtext'>09:00 - 21:00</p>
                    <p className='footer_text'>Субота</p>
                    <p className='footer_subtext'>10:00 - 19:00</p>
                </div>
            </div>
            <div className='footer_socials'>
                <h5>Соціальні мережі</h5>
                <img src={inst} alt="" />
                <img src={tt} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer