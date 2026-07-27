import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Todos from './../components/Todos';
import Todoadd from './../components/Todoadd';
import About from './../components/About';
import MainLayout from './../layout/MainLayout';


const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    },
    {
     path: "/about",
        element: <About />
    }
  ])


  return <RouterProvider router={router} />

}

export default AppRoutes
