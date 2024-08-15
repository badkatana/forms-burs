import { Routes, Route } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { authRoutes, publicRoutes } from "./routes";
import useRegisterUser from "../hooks/useRegisterUser";

export const AppRouter = () => {
  const { isUserLoggedIn } = useRegisterUser();

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
