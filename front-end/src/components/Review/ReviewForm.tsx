import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReview } from "../../lib/services/review";

const ReviewSchema = z.object({
  full_name: z.string(),
  email: z.string(),
  comment: z.string(),
});

const ReviewForm = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ReviewSchema),
  });
  const { isPending, isSuccess, error, mutate, reset } = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("Property added successfully");
      reset();
    }
  }, [isSuccess]);

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    mutate({
      full_name: data.full_name,
      email: data.email,
      comment: data.comment,
    });
  };

  return (
    <div className="max-w-md md:w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Leave a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("full_name", { required: "Name is required" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-third"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message?.toString()}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-third"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message?.toString()}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Comment
          </label>
          <textarea
            id="comment"
            {...register("comment", { required: "Comment is required" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-third"
            rows={4}
          ></textarea>
          {errors.comment && (
            <span className="text-red-500 text-sm">
              {errors.comment.message?.toString()}
            </span>
          )}
        </div>
        <div className="text-center w-full">
          <button
            type="submit"
            className="bg-second text-third px-4 py-2 rounded-lg hover:bg-first w-full focus:outline-none focus:bg-second"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
