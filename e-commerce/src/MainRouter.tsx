import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Favourite } from './components/Favourite';
import { ProdDetails } from './components/ProductDetails';

export const MainRouter=()=>{
    return (<>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favourite' element={<Favourite />}></Route>
        <Route path='/proddetails/:id' element={<ProdDetails />}></Route>
    </Routes>
    </>)
}