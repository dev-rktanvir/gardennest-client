import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";
import PrivateRoute from "../routes/PrivateRoute";
import ShearTips from "../Pages/ShearTips/ShearTips";
import BrowseTips from "../Pages/BrowseTips/BrowseTips";
import TipsDetails from "../Pages/TipsDetails/TipsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/share-tip',
                element: <PrivateRoute><ShearTips></ShearTips></PrivateRoute>
            },
            {
                path: '/browse-tips',
                loader: () => fetch('http://localhost:5000/tips'),
                Component: BrowseTips
            },
            {
                path: '/tips-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/tips/${params.id}`),
                element: <PrivateRoute><TipsDetails></TipsDetails></PrivateRoute>
            }
        ]
    },
]);