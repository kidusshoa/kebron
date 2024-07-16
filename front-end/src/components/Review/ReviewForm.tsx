import { useForm } from "react-hook-form";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle form submission logic here
    reset(); // Reset form fields after submission
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
            {...register("name", { required: "Name is required" })}
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
