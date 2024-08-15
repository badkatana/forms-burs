import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUser } from "../http/userAPI";
import { IUser } from "../interfaces/IUser";

const useRegisterUser = () => {
  const navigator = useNavigate();

  const { mutate: createNewUser } = useMutation({
    mutationFn: (newUser: IUser) => createUser(newUser),
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      navigator("/news");
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

  return { handleSubmit };
};

export default useRegisterUser;
