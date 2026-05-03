import React from 'react'
import NewsTicker from '../../components/common/TopBar'
import Navbar from '../../components/Layout/Navbar'
import Cards from '../../components/products/Cards'

const MensWallets = () => {
  return (
    <div>
        <NewsTicker/>
        <Navbar/>
                {/* Header */}
                      <h1 className="text-center text-3xl font-semibold">Mens Wallets</h1>
                      <p className="text-center text-sm text-gray-500 mt-2">
                        Home &gt; MENS &gt;  Wallet
                      </p>
        
        <Cards/>
    </div>
  )
}

export default MensWallets