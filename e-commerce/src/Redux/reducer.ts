import {Actiontypes,Statetypes} from '../State/index';

const initstate={
productsData:[],
displayProdData:[],
categories:[],
favouriteProd:[],
}

export const reducer=(state:Statetypes=initstate,{type,payload}:Actiontypes)=>{
 switch(type){
    case 'SET_PRODS_DATA':{
        return {...state,productsData:payload};
    }
    case 'SET_DISPLAY_PROD_DATA':{
        return {...state,displayProdData:payload}
    }
    case 'SET_CATEGORIES':{
        return {...state,categories:payload}
    }
    case 'ADD_FAVOURITE':{
        return {...state,favouriteProd:payload}
    }
    default:{
        return state;
    }
 }
}
