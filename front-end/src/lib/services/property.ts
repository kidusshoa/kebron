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

export const updateProperty = async (values: any) => {
  const { data } = await axios.patch(
    `http://localhost:8000/api/v1/property/properties/${values.id}`,
    values
  );
  return data;
};

export const deleteProperty = async (id: string) => {
  const { data } = await axios.delete(
    `http://localhost:8000/api/v1/property/properties/${id}`
  );
  return data;
};
