import axios from "axios";

export const fetchCities = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/v1/property/cities"
  );

  return data;
};
