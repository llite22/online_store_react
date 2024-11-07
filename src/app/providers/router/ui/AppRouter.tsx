import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { MoonLoader } from "react-spinners";

export const AppRouter = () => {
  const renderWithWrapper = (route: RouteProps) => {
    return <Route key={route.path} element={route.element} path={route.path} />;
  };

  return (
    <Suspense
      fallback={
        <div className="flex w-full justify-center items-center h-[70vh]">
          <MoonLoader color={"#36d7b7"} loading={true} size={70} />
        </div>
      }
    >
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};
export default AppRouter;
