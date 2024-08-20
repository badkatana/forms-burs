import { $host } from ".";
import { IUser } from "interfaces/IUser";

export const getUsersStatistics = async () => {
  const { data } = await $host.get("/users_statistics");
  return data;
};

export const createUser = async (user: IUser) => {
  const { data } = await $host.post("/new_user", user);
  return data;
};

// FIXME: bad practice for passwords

export const signInUser = async (userPass: string, userPhone: string) => {
  const params = new URLSearchParams();
  params.append("userPhone", userPhone);
  params.append("userPass", userPass);
  const { data } = await $host.get("/user/login", { params: params });
  return data;
};

export const saveUserImages = async (formData: FormData) => {
  const { data } = await $host.post("/api/save/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
