import { Channel } from "@/pages/Channel/Channel";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword";
import { createHashRouter, Navigate } from "react-router-dom";

export const router = createHashRouter([
    // {
    //     path: '/',
    //     element: <Navigate to="/login" replace />
    // },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/forgot_password',
        element: <ForgotPassword />
    },
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: 'channel/:channelId',
                element: <Channel />
            }
        ]
    }
])