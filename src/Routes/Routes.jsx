import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Shared/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Sercet from "../pages/Sercet/Sercet";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Deshboard/MyCart";
import AllUsers from "../pages/Deshboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signUp',
                element:<SignUp/>
            },
            {
                path:'secret',
                element:<PrivateRoute><Sercet></Sercet></PrivateRoute>
            }
        ]   
    },
    {
        path:'deshbord',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'myCart',
                element:<MyCart/>
            },
            {
                path:'allusers',
                element:<AllUsers/>
            }
        ]
    }
])