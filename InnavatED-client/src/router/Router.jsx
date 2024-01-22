import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import ErrorPage from "../page/errorPage/ErrorPage";
import Blog from "../page/blog/Blog";
import Contact from "../page/contact/Contact";
import Courses from "../page/courses/Courses";

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
                path: '/all-courses',
                element: <Courses/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path: 'contact',
                element:<Contact />
            },
        ]
    }
])

export default router;