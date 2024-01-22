import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import ErrorPage from "../page/errorPage/ErrorPage";
import Blog from "../page/blog/Blog";
import Contact from "../page/contact/Contact";
import Login from "../Login and Register/Login";
import Register from "../Login and Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path: 'contact',
                element:<Contact />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;