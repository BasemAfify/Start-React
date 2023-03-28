import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Layout from './Component/Layout/Layout'
import Contacts from './Component/Contacts/Contacts'
import Portofolio from './Component/Portofolio/Portofolio'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Notfound from './Component/Notfound/Notfound'



let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index:true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'Portofolio', element: <Portofolio /> },
      { path: 'contacts', element: <Contacts /> },
      { path: '*', element: <Notfound/> },
      
  ]}
])


export default function App() {
  return <>
    < RouterProvider router={routers}></RouterProvider>
  </>
}


