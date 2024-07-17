import axios from "axios";

export const fetchCategories = async () => {
  const { categories: any } = await axios.get(
    "http://localhost:8000/api/v1/account/users"
  );

  return categories;
};
