import axios from 'axios';
import { SET_PRODS_DATA,SET_DISPLAY_PROD_DATA ,SET_CATEGORIES, ADD_FAVOURITE} from "./actiontypes";
import {Prodtypes,Actiontypes, Categorytypes, CategoryOptionstype, StringProdtypes} from '../State/index';
import { Dispatch } from 'redux';

export const setProdsData=(payload:Array<Prodtypes>):Actiontypes=>{
 return{
    type:SET_PRODS_DATA ,
    payload
 }
}

export const setDisplayProdsData=(payload:Array<Prodtypes>):Actiontypes=>{
    return{
       type:SET_DISPLAY_PROD_DATA ,
       payload
    }
   }

export const setCategories=(payload:Array<CategoryOptionstype>):Actiontypes=>{
   return{
      type:SET_CATEGORIES,
      payload
   }
}
type FavouritePayloadtyp=Array<Prodtypes>|Array<string>
export const addFavourite=(payload:Array<string>):Actiontypes=>{
   return{
      type:ADD_FAVOURITE ,
      payload
   }
  }

   export const getProducts=(token:string)=>(dispatch:Dispatch<Actiontypes>)=>{
      axios.get('https://upayments-studycase-api.herokuapp.com/api/products/',   {headers: {authorization:`Bearer ${token}`}})
     .then((res)=>{
        console.log(res.data,'response');
        dispatch(setProdsData(res.data.products));
        dispatch(setDisplayProdsData(res.data.products));

     })
     .catch((err)=>console.log("error occured",err));
   }

   export const getCategories=(token:string)=>(dispatch:Dispatch<Actiontypes>)=>{
      axios.get('https://upayments-studycase-api.herokuapp.com/api/categories/',   {headers: {authorization:`Bearer ${token}`}})
     .then((res)=>{
      //   console.log(res.data,'category response');
        let tempCategories:CategoryOptionstype[]=[];
        res.data.categories.forEach((cat:Categorytypes)=>{
         tempCategories.push({'value':cat.name,'label':cat.name,'checked':false});
        })
        dispatch(setCategories(tempCategories));
     })
     .catch((err)=>console.log("error occured",err));
   }

   export const addProduct=(token:string,payload:Prodtypes|{})=>(dispatch:Dispatch<Actiontypes>):void=>{
      console.log('inside addproducts')
      axios.post('https://upayments-studycase-api.herokuapp.com/api/products/', payload,  {headers: {authorization:`Bearer ${token}`}})
     .then((res)=>{
      console.log(res.data,'post response');
      // Update data 
      axios.get('https://upayments-studycase-api.herokuapp.com/api/products/',   {headers: {authorization:`Bearer ${token}`}})
      .then((res)=>{
         console.log(res.data,'response');
         dispatch(setProdsData(res.data.products));
         dispatch(setDisplayProdsData(res.data.products));
 
      })
     })
     .catch((err)=>console.log("error occured",err));
   }

