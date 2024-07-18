import { useState } from "react";
import { UpdatePropertyModel } from "./UpdatePropertyModel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { deleteProperty } from "../../../../lib/services/property";
import { toast } from "react-toastify";

export const UpdatePropertyCard = (props: any) => {
  const { property } = props;
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  const { isSuccess: deleteSuccess, mutate: deleteMutate } = useMutation({
    mutationFn: deleteProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Deleted properties");
    }
  }, [deleteSuccess]);

  const handleDelete = (id: string) => {
    deleteMutate(id);
  };

  return (
    <>
      <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={property.cover}
          alt="Property"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{property.city.name}</h3>

          <p className="text-gray-700">Phone: {property.phone_number}</p>
          <p className="text-gray-700">
            Bedrooms: {property.number_of_bedrooms}
          </p>
          <p className="text-gray-700">Address: {property.address}</p>
          <p className="text-gray-700">Price: {property.price} ETB</p>
          <p className="text-gray-700">Category: {property.category.name}</p>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(property.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <UpdatePropertyModel
        property={property}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
