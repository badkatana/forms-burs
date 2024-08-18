import { Routes, Route } from "react-router-dom";
import { useCheckUser } from "hooks/user/useCheckUser";
import { authRoutes, publicRoutes } from "./routes";

export const AppRouter = () => {
  const { isUserLoggedIn } = useCheckUser();

  return (
    <Routes>
      {isUserLoggedIn() &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} element={Component()} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component()} />
      ))}
    </Routes>
  );
};
