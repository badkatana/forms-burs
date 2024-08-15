import { IUser } from "../interfaces/IUser";

export const useCheckUser = () => {
  const isUserLoggedIn = () => {
    return !!localStorage.getItem("user");
  };

  const getUserInfo = () => {
    const currentUser = localStorage.getItem("user");
    return JSON.parse(currentUser!) as IUser;
  };

  const logOutUser = () => {
    return localStorage.clear();
  };
  return { isUserLoggedIn, getUserInfo, logOutUser };
};
