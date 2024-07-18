import axios from "axios";

export const fetchReviews = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/v1/review/reviews"
  );

  return data;
};

export const createReview = async (values: any) => {
  const { data } = await axios.post(
    "http://localhost:8000/api/v1/review/reviews",
    values
  );
  return data;
};
