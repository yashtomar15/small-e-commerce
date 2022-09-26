import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const FilterButton=styled.button`
width:100%;
height:70px;
background-color:grey;
font-weight:500;
font-size:28px;
z-index:100;
`
export const IconDiv=styled.div`
position:relative;
top:25px;
left:30%;
`
export const Span=styled.span`
position:relative;
top:-11px;
font-size:30px;
`
export const NavLink=styled(Link)`
text-decoration:none;
`

export const TopSpace=styled.div`

// margin-top:100px;
`