import { applyMiddleware, legacy_createStore as createStore} from "redux";
import {reducer} from './reducer';
import {Statetypes,Actiontype} from '../State/index';
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

// type Storetypes=Statetypes & Actiontype;

export const store=()=>{
   return createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
}