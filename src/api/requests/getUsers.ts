import { axiosInstance } from "../axios/axiosConfig";

export const getUsers = async () => {
  const { data } = await axiosInstance.get("/users");

  return data;
};
