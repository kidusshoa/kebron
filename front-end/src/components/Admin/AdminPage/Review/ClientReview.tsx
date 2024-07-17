import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../../../../lib/services/review";

const ClientReview = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  if (isLoading || !data || error) {
    return <div>Loading....</div>;
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 h-full w-full p-20 ">
      {data.map((review: any) => (
        <div className="h-40 w-full">
          <div key={review.id} className="bg-white p-4 rounded-lg  shadow-md">
            <h3 className="text-lg font-bold">{review.full_name}</h3>
            <p className="text-sm text-gray-500">{review.email}</p>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientReview;
