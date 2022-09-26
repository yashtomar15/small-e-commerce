import styled from "styled-components";

export const ProdCont=styled.div`
display:flex;
justify-content:space-between;
gap:20px;
width:95%;
margin:auto;
`
export const ImageDiv=styled.div`
width:90%;
height:500px;
padding:50px;
// border:1px solid black;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
export const Image=styled.img`
width:inherit;
height:450px;
// object-fit:cover;
position:relative;
top:-30px;
`
export const DescriptionDiv=styled.div`
width:90%;
height:500px;
padding:30px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
export const Name=styled.h1`
text-align:left;
font-size:32px;
font-weight:600;
`
export const Price=styled.p`
text-align:left;
font-size:25px;
font-weight:600;
padding-top:5px;
`
export const Description=styled.p`
text-align:left;
font-size:20px;
font-weight:600;
padding-top:50px;
`
export const FavouriteButton=styled.button`
background-color:#4f46e5;
color:white;
width:90%;
height:50px;
border-radius:5px;
margin-top:5%;
`
export const RemoveButton=styled.button`
background-color:
#777b86;
color:white;
width:90%;
height:50px;
border-radius:5px;
margin-top:5%;
`
export const ButtonsDiv=styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;
`