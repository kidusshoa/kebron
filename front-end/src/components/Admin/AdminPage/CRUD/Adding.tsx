import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCities } from "../../../../lib/services/city";
import { fetchCategories } from "../../../../lib/services/category";
import { createProperty } from "../../../../lib/services/property";
import { useEffect } from "react";

const AddPropertySchema = z.object({
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Image is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  bedroom: z.string().min(1, "Bedroom Number is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  city: z.string().min(1, "City is required"),
});

const AddPropertyForm = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddPropertySchema),
  });

  const { data: cities } = useQuery<any, any>({
    queryKey: ["cities"],
    queryFn: fetchCities,
  });

  const { data: categories } = useQuery<any, any>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { isPending, isSuccess, error, mutate, reset } = useMutation({
    mutationFn: createProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
  if (error) {
    toast.error("Failed to Add the Property");
  }
  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
      toast.success("Property added successfully");
      reset();
    }
  }, [isSuccess]);

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("cover", data.image[0]);
    formData.append("phone_number", data.phoneNumber);
    formData.append("address", data.address);
    formData.append("number_of_bedrooms", data.bedroom);
    formData.append("price", data.price);
    formData.append("city", data.city);
    formData.append("category", data.category);

    mutate(formData);
  };

  return (
    <div className="bg-white p-6 md:h-2/3 rounded-lg md:w-full sm:w-96">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Property</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold"
          >
            Property Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">
              {errors.image.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-bold"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone number"
            {...register("phoneNumber")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">
              {errors.phoneNumber.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            {...register("address")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">
              {errors.address.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="bedroom"
            className="block text-gray-700 text-sm font-bold"
          >
            Number of Bedroom
          </label>
          <input
            id="bedroom"
            type="text"
            placeholder="number of bedroom"
            {...register("bedroom")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          {errors.bedroom && (
            <p className="text-red-500 text-sm">
              {errors.bedroom.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            placeholder="Price"
            {...register("price", { valueAsNumber: true })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">
              {errors.price.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="categories"
            className="block text-gray-700 text-sm font-bold"
          >
            Categories
          </label>
          <select
            id="category"
            {...register("category")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          >
            <option value="">Choose a Category</option>
            {categories?.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">
              {errors.category.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm font-bold"
          >
            City
          </label>
          <select
            id="city"
            {...register("city")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          >
            <option value="">Select a city</option>
            {cities?.map((city: any) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city && (
            <p className="text-red-500 text-sm">
              {errors.city.message?.toString()}
            </p>
          )}
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full py-2 bg-first text-third rounded-lg hover:bg-second focus:outline-none focus:bg-indigo-600"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
