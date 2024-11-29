import Dashboard from "../pages/Dashboard/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ServerPage from "@/pages/Dashboard/ServerPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import { Channel } from "@/pages/ChannelDetail/ChannelDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/channel/profile" replace />,
  },
  {
    path: "/channel",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: ":serverId",
        element: <ServerPage />,
        children: [
          {
            path: ":channelId",
            element: <Channel />,
          },
        ],
      },
    ],
  },
]);
