
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import NewArrivals from './pages/NewArrivals';
import MensWallets from './pages/Mens/MensWallets';


function App() {


  return (
    <div>
<Routes>
  <Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/NewArrivals" element={<NewArrivals/>}/>
    <Route path="/mens/wallets" element={<MensWallets/>}/>

  </Route>
</Routes>
    </div>
  )
}

export default App
