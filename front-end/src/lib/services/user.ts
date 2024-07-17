import axios from "axios";

export const fetchUsers = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/v1/account/users"
  );

  return data;
};
