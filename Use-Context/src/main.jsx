import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './rotes/Home'
import Contats from './rotes/Contats'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/", element: <Home/>},
      {path: "/Contats", element: <Contats/>},
    ],
  },
]);

import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
    
  </React.StrictMode>,
)
