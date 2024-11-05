import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, getRouteLogin, getRouteMain } from "@/shared/const/router";
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: getRouteMain(),
    element: <MainPage />,
  },

  [AppRoutes.Login]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },

  [AppRoutes.Not_Found]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
