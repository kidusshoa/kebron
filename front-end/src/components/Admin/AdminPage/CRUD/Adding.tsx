import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Image is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  bedroom: z.string().min(1, "Bedroom Number is required"),
  price: z.number().positive("Price must be a positive number"),
  city: z.string().min(1, "City is required"),
});

const cities = ["Addis Ababa", "Adama", "Hawassa", "Harar City", "Dire Dawa"]; // Example cities

const AddPropertyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic here (e.g., send data to server)
  };

  return (
    <div className="h-full md:h-screen w-full flex items-center justify-center pt-4 md:pt-0 bg-gray-100">
      <div className="bg-white p-6 md:h-2/3 rounded-lg shadow-md md:w-3/5 sm:w-96">
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
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
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
            type="submit"
            className="w-full py-2 bg-first text-third rounded-lg hover:bg-second focus:outline-none focus:bg-indigo-600"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyForm;
