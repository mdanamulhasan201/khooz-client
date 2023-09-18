import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/AllProduct/AllProducts";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/AllProduct/ProductDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Shipping from "../pages/AllProduct/Shipping";



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
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/allProducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/product/details/:slug',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/shipping',
        element: <Shipping></Shipping>
      },
    ]
  },
]);