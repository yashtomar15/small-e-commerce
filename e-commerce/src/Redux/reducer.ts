import {Actiontype,Statetypes} from '../State/index';

const initstate={
productsData:[],
displayProdData:[],
}

export const reducer=(state:Statetypes=initstate,{type,payload}:Actiontype)=>{
 switch(type){
    case 'SET_PRODS_DATA':{
        return {...state,productsData:payload}
    }
    case 'SET_DISPLAY_PROD_DATA':{
        return {...state,displayProdData:payload}
    }
    default:{
        return state;
    }
 }
}
