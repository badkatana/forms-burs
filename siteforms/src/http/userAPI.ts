import { $host } from ".";
import { IUser } from "../interfaces/IUser";

export const getUser = () => {};

export const createUser = async (user: IUser) => {
  const { data } = await $host.post("/new_user", user);
  return data;
};

export const createUser1 = async (newRole: IUser) => {
  const { data } = await $host.post("/new_user", newRole);
  return data;
};
