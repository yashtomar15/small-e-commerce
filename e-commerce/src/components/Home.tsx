import axios from 'axios';
import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Prodtypes } from '../State/index';;
import { getProducts, setProdsData } from '../Store/actions';
import { useAppDispatch } from '../State/hooks';

export const Home=()=>{

    const {productsData}=useSelector((state:any)=>state);
    console.log(productsData,'from redux');
    const dispatch=useAppDispatch();
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWFyeWFzaDE1QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS95YXNodG9tYXIxNSIsImlhdCI6MTY2NDAxOTg4OCwiZXhwIjoxNjY0NDUxODg4fQ.g6u5LezG7jl2beyTDoVRf5Yk1sZIcU7ZiouOTMfqRXY';
useEffect(()=>{
dispatch(getProducts(token));
},[])
    return (<>
    Home
    </>)
}