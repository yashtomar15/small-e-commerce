import React from 'react';
import { useSelector } from 'react-redux';
import { addFavourite } from '../Redux/actions';
import { useAppDispatch } from '../State/hooks';
import { ProductList } from './Productlist';
import { TopSpace } from '../styledComponents/Home.styled';

export const Favourite=()=>{
    const {favouriteProd}=useSelector((state:any)=>state);
    console.log(favouriteProd);
    const dispatch=useAppDispatch();

    React.useEffect(()=>{
        updateProduct();
    },[])

    const updateProduct=async ()=>{
        let existedFavouriteProd=localStorage.getItem('favouriteProds') || '[]';
        existedFavouriteProd=await JSON.parse(existedFavouriteProd);
        dispatch(addFavourite([...existedFavouriteProd]));
    }
    return (<>
    <TopSpace></TopSpace>
    <ProductList displayProdData={favouriteProd} isFavourite={true} />
    </>)
}