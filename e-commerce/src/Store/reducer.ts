import { setProdsData } from "./actions"
import {Prodtypes,Actiontype} from '../State/index';

interface Statetypes{
 productsData:Array<Prodtypes>;
 displayProdData:Array<Prodtypes>
}

const initstate={
productsData:[],
displayProdData:[],
}

export const reducer=(state:Statetypes=initstate,{type,payload}:Actiontype)=>{
 switch(type){
    case 'SET_PRODS_DATA':{
        return {...state,productsData:payload}
    }
    case 'SET_PRODS_DATA':{
        return {...state,productsData:payload}
    }
    default:{
        return state;
    }
 }
}
