import axios from "axios";

export const login = async (values: any) => {
  const { data } = await axios.post(
    "http://localhost:8000/api/v1/auth/login",
    values
  );
  return data;
};
