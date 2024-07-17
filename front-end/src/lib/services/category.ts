import axios from "axios";

export const fetchCategories = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/v1/property/categories"
  );

  return data;
};
