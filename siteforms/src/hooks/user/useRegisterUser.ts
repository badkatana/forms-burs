import { useMutation } from "@tanstack/react-query";
import { createUser, signInUser } from "http/userAPI";
import { IUser } from "interfaces/IUser";

// fixme: it should be two different hooks (register and login???)

export const useRegisterUser = () => {
  const doOnSuccess = (data: IUser) => {
    localStorage.setItem("user", JSON.stringify(data));
  };

  const {
    mutate: createNewUser,
    error: registrationError,
    isSuccess: registrationSuccess,
  } = useMutation({
    mutationFn: (newUser: IUser) => createUser(newUser),
    onSuccess: (data) => {
      doOnSuccess(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const {
    mutate: login,
    error: signInError,
    isSuccess: loginSuccess,
  } = useMutation({
    mutationFn: (data: { userPass: string; userPhone: string }) =>
      signInUser(data.userPass, data.userPhone),
    onSuccess: (data) => {
      doOnSuccess(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (data: IUser) => {
    const newUser: IUser = {
      name: data.name,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };
    createNewUser(newUser);
  };

  const handleSignIn = (data: { phoneNumber: string; password: string }) => {
    login({ userPass: data.password, userPhone: data.phoneNumber });
  };

  return {
    handleSubmit,
    handleSignIn,
    registrationError,
    signInError,
    registrationSuccess,
    loginSuccess,
  };
};
