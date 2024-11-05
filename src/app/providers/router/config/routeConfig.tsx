import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, getRouteMain } from "@/shared/const/router";
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: getRouteMain(),
    element: <MainPage />,
  },

  [AppRoutes.Not_Found]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
