import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCities } from "../../../../lib/services/city";
import { fetchCategories } from "../../../../lib/services/category";
import { updateProperty } from "../../../../lib/services/property";

const UpdatePropertySchema = z.object({
  phone_number: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  number_of_bedrooms: z.number().positive({
    message: "Number of bedrooms must be positive",
  }),
  price: z.number(),
  category: z.string().min(1, "Category is required"),
  city: z.string().min(1, "City is required"),
});

export const UpdatePropertyModel = (props: any) => {
  const { property, isOpen, onClose } = props;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UpdatePropertySchema),
    defaultValues: {
      ...property,
      city: property.city.id,
      category: property.category.id,
    },
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
    mutationFn: updateProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Property updated successfully");
      reset();
      onClose();
    }
  }, [isSuccess]);

  const onSubmit = (values: any) => {
    mutate({
      id: property.id,
      ...values,
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg md:w-full sm:w-full sm:p-6">
              <div className="sm:flex md:w-full sm:items-start">
                <div className="mt-3 text-center md:w-full sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Update Property
                  </Dialog.Title>
                  <div className="mt-2 w-full">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phoneNumber"
                          {...register("phone_number")}
                          type="text"
                          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.phone_number && (
                          <p className="text-red-500 text-sm">
                            {errors.phone_number.message?.toString()}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <input
                          id="address"
                          {...register("address")}
                          type="text"
                          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm">
                            {errors.address.message?.toString()}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="bedroom"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Number of Bedrooms
                        </label>
                        <input
                          id="bedroom"
                          {...register("number_of_bedrooms", {
                            valueAsNumber: true,
                          })}
                          type="text"
                          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.number_of_bedrooms && (
                          <p className="text-red-500 text-sm">
                            {errors.number_of_bedrooms.message?.toString()}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Price
                        </label>
                        <input
                          id="price"
                          {...register("price", {
                            valueAsNumber: true,
                          })}
                          type="number"
                          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.price && (
                          <p className="text-red-500 text-sm">
                            {errors.price.message?.toString()}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Category
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
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
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
                      <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                        <button
                          disabled={isPending}
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                          onClick={onClose}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
