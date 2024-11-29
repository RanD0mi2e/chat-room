import Dashboard from "../pages/Dashboard/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ServerPage from "@/pages/Dashboard/ServerPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import { Channel } from "@/pages/ChannelDetail/ChannelDetail";
import { NotFound } from "@/pages/NotFound/NotFound";

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
  { // 拦截未匹配的路由并重定向到404页面
    path: "*",
    element: <Navigate to="/404NotFound" />
  },
  {
    path: "/404NotFound",
    element: <NotFound />
  }
]);
