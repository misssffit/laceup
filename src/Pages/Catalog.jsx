import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/Card/Card'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import './Catalog.css'
import card from '../Components/Data/catalog'

function Catalog() {
  return (
    <div>
        <Navbar/>
        <div className='catalog_main'>
          <Sidebar/>
          <div className='catalog_list'>
            {card.map((cards)=>(
              <Card cards={cards}/>
            ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Catalog