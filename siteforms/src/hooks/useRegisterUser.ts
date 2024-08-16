import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUser, signInUser } from "../http/userAPI";
import { IUser } from "../interfaces/IUser";

const useRegisterUser = () => {
  const navigator = useNavigate();

  const doOnSuccess = (data: IUser) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigator("/news");
  };

  const { mutate: createNewUser } = useMutation({
    mutationFn: (newUser: IUser) => createUser(newUser),
    onSuccess: (data) => {
      doOnSuccess(data);
    },
    onError: (error) => console.error(error),
  });

  const { mutate: login } = useMutation({
    mutationFn: (data: { userPass: string; userPhone: string }) =>
      signInUser(data.userPass, data.userPhone),
    onSuccess: (data) => {
      doOnSuccess(data);
    },
    onError: (error) => console.error(error),
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
    console.log(data.password);
    login({ userPass: data.password, userPhone: data.phoneNumber });
  };

  return { handleSubmit, handleSignIn };
};

export default useRegisterUser;
