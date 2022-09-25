import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { getProducts} from '../Redux/actions';
import { useAppDispatch } from '../State/hooks';
import { ProductList } from './Productlist';

export const Home=()=>{
    const {productsData,displayProdData}=useSelector((state:any)=>state);
    console.log(productsData,'from redux');
    console.log(displayProdData,'display prod');
    const dispatch=useAppDispatch();
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWFyeWFzaDE1QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS95YXNodG9tYXIxNSIsImlhdCI6MTY2NDAxOTg4OCwiZXhwIjoxNjY0NDUxODg4fQ.g6u5LezG7jl2beyTDoVRf5Yk1sZIcU7ZiouOTMfqRXY';

useEffect(()=>{
dispatch(getProducts(token));
},[dispatch])

    return (<>
  <ProductList displayProdData={displayProdData} />
    </>)
}