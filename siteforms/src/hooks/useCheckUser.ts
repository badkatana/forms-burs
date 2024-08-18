import { useQuery } from "@tanstack/react-query";
import { getUsersStatistics } from "http/userAPI";
import { IUser } from "interfaces/IUser";

// this hook provides information for LOGGED user and statistics
// FIXME: split in another hooks
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

  const { data: usersStatistics, isLoading } = useQuery({
    queryKey: ["usersStatistics"],
    queryFn: getUsersStatistics,
  });

  return {
    isUserLoggedIn,
    getUserInfo,
    logOutUser,
    usersStatistics,
    statsLoading: isLoading,
  };
};
