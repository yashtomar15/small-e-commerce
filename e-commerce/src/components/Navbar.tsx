import React from 'react';
import { NavCont,NavLink,CreateButton } from '../styledComponents/navbar.styled';
import { CreateScreen } from './CreateScreen';

export const Navbar=()=>{
    
    return (<>
    <NavCont>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favourite">Favourite</NavLink>
        <CreateScreen />
    </NavCont>
    </>)
}