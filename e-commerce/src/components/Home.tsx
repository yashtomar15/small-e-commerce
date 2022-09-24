import axios from 'axios';
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Prodtypes } from '../State/index';;
import { setProdsData } from '../Store/actions';

export const Home=()=>{

    const {productsData}=useSelector((state:any)=>state);
    console.log(productsData,'from redux');
    const dispatch=useDispatch();
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWFyeWFzaDE1QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS95YXNodG9tYXIxNSIsImlhdCI6MTY2NDAxOTg4OCwiZXhwIjoxNjY0NDUxODg4fQ.g6u5LezG7jl2beyTDoVRf5Yk1sZIcU7ZiouOTMfqRXY';
useEffect(()=>{
axios.get('https://upayments-studycase-api.herokuapp.com/api/products/',   {headers: {authorization:`Bearer ${token}`}})
     .then((res)=>{
        console.log(res.data,'response');
        dispatch(setProdsData(res.data.products));
     })
     .catch((err)=>console.log("error occured",err));
},[])
    return (<>
    Home
    </>)
}