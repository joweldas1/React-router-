import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Meals from './Component/Meals/Meals';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import MealDetails from './Component/Meals/MealDetails';
import ErrorComponent from './Component/ErrorComponent/ErrorComponent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorComponent></ErrorComponent>,
    children:[
      {
      path:'/Meals',
      loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
      element:<Meals></Meals>
      },
      {
        path:'/meal/:id',
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
        element:<MealDetails></MealDetails>
      },
      {
        path:"/AboutUs",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/Contact",
        element:<Contact></Contact>
      },
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
