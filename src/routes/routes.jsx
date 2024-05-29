import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import ErrorPage from "../components/pages/ErrorPage";
import Dashboard from "../components/pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import AllProducts from "../components/pages/AllProducts";
import AddProduct from "../components/pages/AddProduct";
import ProductDetails from "../components/pages/ProductDetails";
import EditProduct from "../components/pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("http://localhost:3000/laptops")

        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {
            path: '/register',
            element: <Register/>

        },
    ]
  },
  {
    path:"/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    {
      path:"/dashboard/allProducts",
      element:<PrivateRoute><AllProducts/></PrivateRoute>,
    },
    {
      path:"/dashboard/addProduct",
      element:<PrivateRoute><AddProduct/></PrivateRoute>
    },
    {
      path:"/dashboard/allProducts/products/:id",
      element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
      loader: ({params})=> fetch(`http://localhost:3000/laptops/${params.id}`)
    },
    {
      path:"/dashboard/allProducts/edit/:id",
      element:<PrivateRoute><EditProduct/></PrivateRoute>,
      loader: ({params})=> fetch(`http://localhost:3000/laptops/${params.id}`)
    },
        
    ]
  }
]);