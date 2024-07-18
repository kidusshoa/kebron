import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { createUser } from "../../../../../lib/services/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const CreateAdminSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const Skeleton = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateAdminSchema),
  });

  const { isPending, isSuccess, error, mutate, reset } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("admin added successfully");
      reset();
    }
  }, [isSuccess]);

  const onSubmit = (data: any) => {
    mutate({
      full_name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="h-full w-full flex pt-4 justify-center bg-gray-100">
      <div className="bg-white p-6 md:h-2/5 rounded-lg shadow-md md:w-3/5  sm:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Admin</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message?.toString()}
              </p>
            )}
          </div>
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
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
            {errors.email && typeof errors.email === "string" && (
              <p className="text-red-500 text-sm">{errors.email}</p>
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
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
            {errors.password && typeof errors.password === "string" && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Skeleton;
