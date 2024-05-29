import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import About from "../components/pages/About";
import ErrorPage from "../components/pages/ErrorPage";
import Dashboard from "../components/pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <Home></Home>

        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {
            path: '/register',
            element: <Register/>

        },
        {
            path: '/about',
            element: <About></About>

        },

    ]
  },
  {
    path:"/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
      path:"",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
        
    ]
  }
]);