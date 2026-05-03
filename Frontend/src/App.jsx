
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import NewArrivals from './pages/NewArrivals';


function App() {


  return (
    <div>
<Routes>
  <Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/NewArrivals" element={<NewArrivals/>}/>

  </Route>
</Routes>
    </div>
  )
}

export default App
