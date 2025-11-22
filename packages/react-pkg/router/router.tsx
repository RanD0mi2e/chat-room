import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword";
import { createHashRouter, Navigate } from "react-router-dom";

export const router = createHashRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/forgot_password',
        element: <ForgotPassword />
    },
    {
        path: '/main_window',
        element: <Dashboard />
    }
])