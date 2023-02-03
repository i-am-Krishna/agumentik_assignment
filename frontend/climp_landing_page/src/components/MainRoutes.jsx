import React from 'react'
import {Routes,Route} from 'react-router-dom';
import About from './About';
import Admin from './Admin';
import Bussiness from './Bussiness';
import Main from './Main';
import Pricing from './Pricing';
import Works from './Works';
import Auth from './Auth';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/bussiness' element={<Bussiness/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/works' element={<Works/>}/>
    </Routes>
  )
}

export default MainRoutes