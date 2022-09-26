import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/input.css';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <Provider store={store} >
    <App />
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
   </React.StrictMode>
)
