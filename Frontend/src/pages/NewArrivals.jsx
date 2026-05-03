import React from 'react'
import NewsTicker from '../components/common/TopBar.jsx'
import Navbar from '../components/Layout/Navbar.jsx'
import Cards from '../components/products/Cards.jsx'
const NewArrivals = () => {
  return (
    <div>
        <NewsTicker/>
        <Navbar/>
        {/* Header */}
              <h1 className="text-center text-3xl font-semibold">New Arrivals</h1>
              <p className="text-center text-sm text-gray-500 mt-2">
                Home &gt; New Arrivals
              </p>
        <Cards/>
    </div>
  )
}

export default NewArrivals