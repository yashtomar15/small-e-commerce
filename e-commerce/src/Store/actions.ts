import axios from 'axios';
import { SET_DISPLAY_PROD_DATA,SET_PRODS_DATA } from "./actiontypes";
import {Prodtypes,Actiontype} from '../State/index';
import { Dispatch } from 'redux';

export const setProdsData=(payload:Array<Prodtypes>):Actiontype=>{
 return{
    type:SET_PRODS_DATA ,
    payload
 }
}

export const setDisplayProdsData=(payload:Array<Prodtypes>):Actiontype=>{
    return{
       type:SET_DISPLAY_PROD_DATA ,
       payload
    }
   }

   export const getProducts=(token:string)=>(dispatch:Dispatch<Actiontype>)=>{
      axios.get('https://upayments-studycase-api.herokuapp.com/api/products/',   {headers: {authorization:`Bearer ${token}`}})
     .then((res)=>{
        console.log(res.data,'response');
        dispatch(setProdsData(res.data.products));
     })
     .catch((err)=>console.log("error occured",err));
   }