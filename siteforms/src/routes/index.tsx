import { Routes, Route } from "react-router-dom";
import { useCheckUser } from "../hooks/useCheckUser";
import { authRoutes, publicRoutes } from "./routes";

export const AppRouter = () => {
  const { isUserLoggedIn } = useCheckUser();

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component()} />
      ))}
      {isUserLoggedIn() &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} element={Component()} />
        ))}
    </Routes>
  );
};
