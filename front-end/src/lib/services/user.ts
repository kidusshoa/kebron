import axios from "axios";

export const fetchUsers = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/v1/account/users"
  );

  return data;
};

export const createUser = async (values: any) => {
  const { data } = await axios.post(
    "http://localhost:8000/api/v1/account/users",
    values
  );
  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await axios.delete(
    `http://localhost:8000/api/v1/account/users/${id}`
  );
  return data;
};
