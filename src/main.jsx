import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import JobDetails from './Component/JobDetails.jsx';
import HomeData from './Component/HomeData.jsx';
import Aplied from './Component/Aplied.jsx';
 
  const router =createBrowserRouter([
    {
      path : '/',
      element: <Home></Home>,
      children:[
        {
          path: '/',
          element: <HomeData></HomeData>
        },
        {
          path: '/job/:id',
          element: <JobDetails></JobDetails>,
          loader: ()=> fetch('../jobs.json')
        },
        {
          path: '/aplied',
          element : <Aplied></Aplied>,
          loader: ()=> fetch('../jobs.json')
        }
      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
