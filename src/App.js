import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footers/Footer";
import Contact from "./components/Contacts/Contact";
import About from "./components/About/About";

import Portfoilo from "./components/Portfoilos/Portfoilo";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Layouts/Layout ";

export default function App() {
  const routers=createHashRouter([
    {
path:'/',element:<Layout/>,children:[{
  index:true,element:<Home/>,

},{
  path:"/about",element:<About/>,
},{
  path:"/contact",element:<Contact/>,
},{
  path:"/portfoilo",element:<Portfoilo/>,
},{
  path:"*",element:<h1>This Page Not Found !!</h1>

  
}]
  }

  ])
  return (
    <>
 <RouterProvider router={routers}/>
    </>
  );
}
