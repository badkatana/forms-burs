import { FormGenerator } from "../../formGenerator/FormGenerator";
import { IUser } from "../../../interfaces/IUser";
import { authFields } from "../configs/authConfig";
import { createUser } from "../../../http/userAPI";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigator = useNavigate();

  const { data, mutate: createNewUser } = useMutation({
    mutationFn: (newUser: IUser) => createUser(newUser),
    onSuccess: (data) => navigator("/news"),
    onError: (error) => console.log(error),
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

  return (
    <FormGenerator
      fields={authFields}
      submitFunction={handleSubmit}
      formTitle="Registration"
    />
  );
};
