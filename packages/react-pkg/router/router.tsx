import Dashboard from "@/pages/Dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";
Dashboard

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    }
])