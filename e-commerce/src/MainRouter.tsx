import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';

export const Favourite=()=>{
    return (<>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favourite' element={<Favourite />}></Route>
    </Routes>
    </>)
}