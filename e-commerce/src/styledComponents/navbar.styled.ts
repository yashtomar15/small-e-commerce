import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavCont=styled.div`
width:100%;
height:60px;
background-color:#4f46e5;
display:flex;
justify-content:space-around;
position:fixed;
z-index:100;
`
export const NavLink=styled(Link)`
text-decoration:none;
color:white;
font-size:23px;
font-weight:600;
padding-top:10px;
font-family: 'Inter Tight', sans-serif;
`
export const CreateButton=styled.button`
background-color:#66cbe9 ;
border-radius:5px;
color:white;
height:40px;
margin-top:10px;
padding-left:15px; 
padding-right:15px; 
font-family: 'Inter Tight', sans-serif;
`