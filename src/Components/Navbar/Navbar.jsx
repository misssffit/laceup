import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import search from '../Assets/Header_icon_search.svg'
import cart from '../Assets/Header_icon_cart.svg'
import contacts from '../Assets/Header_icon_contacts.svg'
import account from '../Assets/Header_icon_account.svg'
function Navbar() {
  return (
    <div className='header'>
        <div className='header_sale'>
            <div className='header_sale_text'>
                <span>Знижка в честь відкриття!</span>
            </div>
        </div>
        <div className='header_nav'>
            <nav className='navigation'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='menu'>
                    <Link to="/">Головна</Link>
                    <Link to="/catalog">Каталог</Link>
                    <a href="#">З-за кордону</a>
                    <a href="#">Про нас</a>
                    <a href="#">Новини</a>
                </div>
                <div className='nav_icons'>
                    <img src={search} alt="" />
                    <img src={cart} alt="" />
                    <img src={contacts} alt="" />
                    <img src={account} alt="" />
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar