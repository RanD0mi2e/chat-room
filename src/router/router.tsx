import Dashboard from "../pages/Dashboard/Dashboard";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import ServerPage from "@/pages/Dashboard/ServerPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import { Channel } from "@/pages/ChannelDetail/ChannelDetail";
import { NotFound } from "@/pages/NotFound/NotFound";
import React, { createElement } from "react";

// 页面异步加载
// 必须是export default默认导出的组件，否则懒加载会报错！
export const lazyLoadedPage = (pageName: string) => {
  return React.lazy(() => import(`@/pages/${pageName}`));
};

export type PermissionRoute = {
  index?: boolean; // 是否是索引页
  path: string;
  name: string;
  pageName: string;
  children: PermissionRoute[];
}

// 后端权限控制路由拼接前端非权限控制路由
export const generateMixinRoutes = (
  routes: PermissionRoute[],
  sourceRoute: RouteObject[]
): void => {
  return routes.forEach((permission) => {
    // 检查是否已经存在路由
    const existingIndex = sourceRoute.findIndex(
      (route) => route.path === permission.path
    );
    if (existingIndex !== -1) {
      // 如果存在路径相同的路由，则递归比较它们的子路由
      if (permission.children && sourceRoute[existingIndex].children) {
        generateMixinRoutes(permission.children, sourceRoute[existingIndex].children)
      } else {
        sourceRoute[existingIndex].children = recursivePermissionMap(permission.children)
      }

    } else {
      // 不存在对应路由，直接从原路由
      sourceRoute.push({
        path: permission.path,
        children: recursivePermissionMap(permission.children),
        element: createElement(lazyLoadedPage(permission.pageName))
      });
    }
  });
};

// 递归映射后端路由map——>前端react路由map
export const recursivePermissionMap = (
  arr: PermissionRoute[]
): RouteObject[] => {
  return arr.map((permission) => {
    if (permission.children && permission.children.length) {
      return {
        // index: permission.index,
        path: permission.path,
        children: recursivePermissionMap(permission.children),
        element: createElement(lazyLoadedPage(permission.pageName)),
      };
    } else {
      return {
        index: permission.index,
        path: permission.path,
        element: createElement(lazyLoadedPage(permission.pageName)),
      };
    }
  });
};

// 路由表
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Navigate to="profile" />,
      },
      // 个人页
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "channel",
        children: [
          // 服务器页
          {
            path: ":serverId",
            element: <ServerPage />,
            children: [
              // 频道页
              {
                path: ":channelId",
                element: <Channel />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    // 拦截未匹配的路由并重定向到404页面
    path: "*",
    element: <Navigate to="/404NotFound" />,
  },
  {
    path: "/404NotFound",
    element: <NotFound />,
  },
]
// 创建路由器函数
export const createRouter = (routes: RouteObject[]) => createBrowserRouter(routes)
