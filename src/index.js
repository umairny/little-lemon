import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    prim1: '#F4CE14',
    prim2: '#495E57',
    sec1: '#333333',
    sec2: '#EDEFEE',
    sec3: '#FBDABB',
    sec4: '#EE9972',
  }
}

const fonts = {
  body: "system-ui, sans-serif, karla",
  heading: "Georgia, serif, Markazi Text",
}


const theme = extendTheme({
  colors, fonts
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);