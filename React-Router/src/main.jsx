import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1- configurando router

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetails from './routes/ContactDetails.jsx'
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "Contact",
    element: <Contact/>
  },
]);
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // 3- Pagina de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
  },
  {
    path: "Contact",
    element: <Contact/>
  },
  // 5- nested routes - identificado unico - dynamic routes
  {
    path: "/contact/:id",
    element: <ContactDetails />,
  },
  // 7 - navigate para páginas não existentes
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
