import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import ProfilePage from "@/pages/ProfilePage/ui/ProfilePage";
import { AppRoutes, getRouteLogin, getRouteMain, getRouteProfile } from "@/shared/const/router";
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

  [AppRoutes.Profile]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
  },

  [AppRoutes.Not_Found]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
