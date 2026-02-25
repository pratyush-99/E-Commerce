import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'   // 👈 Tailwind yahi se load hota hai
import {BrowserRouter} from 'react-router-dom'  // 👈 React Router ke liye
import ShopContextProvider, { ShopContext } from './context/ShopContext'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
    </BrowserRouter>
  
)