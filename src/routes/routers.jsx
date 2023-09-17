import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/AllProduct/AllProducts";
import Cart from "../pages/Cart/Cart";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allProducts',
            element: <AllProducts></AllProducts>
        },
        {
            path: '/cart',
            element: <Cart></Cart>
        },
      ]
    },
  ]);