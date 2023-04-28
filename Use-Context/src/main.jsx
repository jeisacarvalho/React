
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import React from 'react'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    Children:[
      {path: "/", element: <Home/>},
      {path: "/contact", element: <Contact/>},

      {
    path: "oldcontact",
    element: <Navigate to="/contact" />,
  }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
