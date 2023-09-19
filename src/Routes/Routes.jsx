import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: 'home',
            element: <Home></Home>
        },
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        },
        // {
        //     path: '/order',
        //     element: <OrderFood></OrderFood>
        // },
        {
            path: 'order/:category',
            element: <OrderFood></OrderFood>
        },
        // {
        //     path: '/order/salad',
        //     element: <PrivateRoutes><OrderFood></OrderFood></PrivateRoutes>
        // },
        // {
        //     path: '/order/:category',
        //     element: <OrderFood></OrderFood>
        // },
       
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        }
      ]

    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
            path: 'userhome',
            element: <UserHome></UserHome>
        },
        {
            path: 'adminhome',
            element: <AdminHome></AdminHome>
        },
        {
            path: 'mycart',
            element:<MyCart></MyCart>
        },
        {
            path: 'mycart/dashboard/payment',
            element: <Payment></Payment>
        },
        
        {
            path: 'allusers',
            element:<AllUsers></AllUsers>
        },
        {
            path: 'additem',
            element:<AddItem></AddItem>
        },
        {
            path: 'manageitems',
            element: <ManageItems></ManageItems>
        },
        
      ]

    },
  ]);