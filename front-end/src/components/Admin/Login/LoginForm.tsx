import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, "Email is required").email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      setLoading(false);
      // Navigate to dashboard or other page
    }, 2000);
  };

  return (
    <div className="max-w-md  mx-auto bg-white md:w-2/3 md:h-2/5 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login into Kebron</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email address"
            {...register("email")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register("password")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-second text-white rounded-lg hover:bg-first focus:outline-none focus:bg-indigo-600"
          disabled={loading}
        >
          {loading && <span className="loader mr-2"></span>}
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
