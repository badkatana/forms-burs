import { Routes, Route } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { authRoutes, publicRoutes } from "./routes";

export const AppRouter = () => {
  const isAuth = useCheckAuth();

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component()} />
      ))}
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} element={Component()} />
        ))}
    </Routes>
  );
};
