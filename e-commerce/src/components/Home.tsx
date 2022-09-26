import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { getCategories, getProducts, setCategories} from '../Redux/actions';
import { useAppDispatch } from '../State/hooks';
import Products from './Products';

export const Home=()=>{
    const {productsData,displayProdData,categories}=useSelector((state:any)=>state);
    // console.log(productsData,'from redux');
    // console.log(displayProdData,'display prod');
    // console.log(categories,'categories');
    const dispatch=useAppDispatch();
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWFyeWFzaDE1QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS95YXNodG9tYXIxNSIsImlhdCI6MTY2NDAxOTg4OCwiZXhwIjoxNjY0NDUxODg4fQ.g6u5LezG7jl2beyTDoVRf5Yk1sZIcU7ZiouOTMfqRXY';

useEffect(()=>{
    if(productsData.length===0 && displayProdData.length===0){
        dispatch(getProducts(token));
        dispatch(getCategories(token));
    }
},[])

    return (<>
    {/* Products component */}
   <Products categoryOptions={categories}/>
    </>)
}