import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import ErrorPage from "../page/errorPage/ErrorPage";
import Blog from "../page/blog/Blog";
import Contact from "../page/contact/Contact";
import Courses from "../page/courses/Courses";
import DashboardLayout from "../layout/DashboardLayout";
import JoiningTeacher from "../page/home/joining  teacher/JoiningTeacher";
import Dashboard from "../components/dashboard/Dashboard";

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
            {
                path: 'join',
                element:<JoiningTeacher />
            },
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
        ]
    }
])

export default router;