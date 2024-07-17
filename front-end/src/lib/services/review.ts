import axios from "axios";

export const fetchReviews = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/v1/review/reviews"
  );

  return data;
};
