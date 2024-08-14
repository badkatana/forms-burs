import { FormGenerator } from "../../formGenerator/FormGenerator";
import { IUser } from "../../../interfaces/IUser";
import { authFields } from "../configs/authConfig";
import { useId } from "react";

import { createUser } from "../../../http/userAPI";
import { useMutation } from "@tanstack/react-query";
import { create } from "domain";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const newId = useId();
  const navigator = useNavigate();

  const { data, mutate: createNewUser } = useMutation({
    mutationFn: (newUser: IUser) => createUser(newUser),
    onSuccess: (data) => navigator("/news"),
    onError: (error) => console.log(error),
  });

  const handleSubmit = (data: IUser) => {
    const newUser: IUser = {
      id: newId,
      name: data.name,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      password: "1111",
    };
    createNewUser(newUser);
  };

  return <FormGenerator fields={authFields} submitFunction={handleSubmit} />;
};
