import React from 'react'
import Banner from "../Components/Banner/Banner"
import Footer from "../Components/Footer/Footer";
import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Landing