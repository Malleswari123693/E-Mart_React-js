import React from 'react';
import { Routes, Route } from 'react-router-dom' 
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import KitchenPage from './stores/pages/KitchenPage'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import AcPage from './stores/pages/AcPage'
import FridgePage from './stores/pages/FridgePage'  
import FurniturePage from './stores/pages/FurniturePage' 
import MobileSingle from "./singles/MobileSingle";
import UserCart from './stores/UserCart'
import ComputerSingle from './singles/ComputerSingle'
import WatchSingle from './singles/WatchSingle'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle'
import AcSingle from './singles/AcSingle'
import FridgeSingle from './singles/FridgeSingle'
import KitchenSingle from './singles/KitchenSingle'
import FurnitureSingle from './singles/FurnitureSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
         <Route path='/watch' element= {<WatchPage />} />
         <Route path='/Men' element= {<MenPage />} /> 
          <Route path='/Woman' element= {<WomanPage />} />
           <Route path='/Ac' element= {<AcPage />} /> 
        <Route path='/Fridge' element={<FridgePage />} />
        <Route path='/Furniture' element= {<FurniturePage />} />  
            <Route path='/mobiles/:id' element = {<MobileSingle />} />
       <Route path='/cart' element = {<UserCart />} />
        <Route path='/computers/:id' element = {<ComputerSingle />} />
       <Route path='/watch/:id' element = {<WatchSingle />} />
        <Route path='/men/:id' element = {<MenSingle />} />
       <Route path='/woman/:id' element = {<WomanSingle />} />
        <Route path='/ac/:id' element = {<AcSingle />} />
        <Route path='/fridge/:id' element = {<FridgeSingle />} />
        <Route path='/kitchen/:id' element = {<KitchenSingle />} />
        <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      </Routes>
        
    </div>
  )
}
export default App