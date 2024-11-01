import { Channel } from "@/pages/Channel/Channel";
import Dashboard from "../pages/Dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
], {
    basename: '/main_window'
})