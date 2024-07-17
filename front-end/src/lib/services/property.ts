import axios from "axios";

export const fetchProperties = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/v1/property/properties"
  );

  return data;
};

export const createProperty = async (values: any) => {
  const { data } = await axios.post(
    "http://localhost:8000/api/v1/property/properties",
    values,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};
