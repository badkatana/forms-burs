import { useQuery } from "@tanstack/react-query";
import { checkUserQuestionnaire } from "http/questionnaireApi";
import { getUsersStatistics } from "http/userAPI";
import { IUser } from "interfaces/IUser";
import { useEffect, useState } from "react";

// this hook provides information for LOGGED user and statistics
// FIXME: split in another hooks (like one for statistics, one for local storage)

export const useCheckUser = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(!!localStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const getUserInfo = () => {
    const currentUser = localStorage.getItem("user");
    return JSON.parse(currentUser!) as IUser;
  };

  const phoneNumber = getUserInfo() == null ? "" : getUserInfo().phoneNumber;

  const { data: isUserAnswered, isLoading: AnsweringLoading } = useQuery({
    queryKey: ["userAnswers", phoneNumber],
    enabled: !!phoneNumber,
    queryFn: () => checkUserQuestionnaire(phoneNumber),
  });

  const logOutUser = () => {
    return localStorage.clear();
  };

  const { data: usersStatistics, isLoading } = useQuery({
    queryKey: ["usersStatistics"],
    queryFn: getUsersStatistics,
  });

  return {
    isUserLoggedIn: () => loggedIn,
    getUserInfo,
    logOutUser,
    usersStatistics,
    statsLoading: isLoading,
    isUserAnswered,
    AnsweringLoading,
  };
};
