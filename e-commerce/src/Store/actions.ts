import { SET_DISPLAY_PROD_DATA,SET_PRODS_DATA } from "./actiontypes";
import {Prodtypes,Actiontype} from '../commonTypes';

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