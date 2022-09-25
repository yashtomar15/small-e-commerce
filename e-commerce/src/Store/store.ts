import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './reducer';

export const store=configureStore({reducer});

// console.log(typeof store,"store");
export type AppDispatch = typeof store.dispatch;