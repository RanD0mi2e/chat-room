import Dashboard from "../pages/Dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import ServerPage from "@/pages/Dashboard/ServerPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import { Channel } from "@/pages/ChannelDetail/ChannelDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "channels",
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
