import React from 'react'
import NewsTicker from '../components/common/TopBar.jsx'
import Navbar from '../components/Layout/Navbar.jsx'
import Slider from '../components/common/Slider.jsx'
import TopsallerProduct from '../components/products/TopsellerCard.jsx'
import CategorySection from '../components/Layout/Categories.jsx'

import Footer from '../components/Layout/Footer.jsx'




const Home = () => {
  return (
    <div>
<NewsTicker/>
<Navbar/>
<Slider/>
<CategorySection/>
<TopsallerProduct/>
<Footer/>


    </div>
  )
}

export default Home