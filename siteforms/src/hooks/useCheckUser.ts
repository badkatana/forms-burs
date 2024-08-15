export const useCheckUser = () => {
  const isUserLoggedIn = () => {
    return !!localStorage.getItem("user");
  };

  const getUserInfo = () => {
    return localStorage.getItem("user");
  };
  return { isUserLoggedIn, getUserInfo };
};
