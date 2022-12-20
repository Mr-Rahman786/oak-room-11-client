import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Details from "../../Pages/Details/Details.js";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Review from "../../Pages/Reviews/Review";
import Service from "../../Pages/Services/Service";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://food-junction-server.vercel.app/services/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/services',
                element:<Service></Service>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://food-junction-server.vercel.app/services/${params.id}`),
                element: <Details></Details>,
            }
        ]
    }
])

export default router