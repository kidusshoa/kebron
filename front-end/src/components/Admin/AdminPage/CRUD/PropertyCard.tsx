import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Picture from "../../../../assets/images/appartment.jpg";

const PropertyCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "0923345434",
    address: "Summit Giyorgis",
    bedroom: "Three",
    price: 13000,
    city: "Addis Ababa",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform update logic here
    console.log("Updated data:", formData);
    closeModal();
  };

  return (
    <div className="grid w-full h-full md:grid-cols-4 p-5 gap-5  grid-cols-1">
      <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={Picture}
          alt="Property"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Hawassa</h3>
          <p className="text-gray-700">Phone: {formData.phoneNumber}</p>
          <p className="text-gray-700">Bedrooms: {formData.bedroom}</p>
          <p className="text-gray-700">Address: {formData.address}</p>
          <p className="text-gray-700">Price: {formData.price} ETB</p>
          <p className="text-gray-700">City: {formData.city}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={openModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Update
            </button>
            <button
              // onClick={onDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={Picture}
          alt="Property"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Hawassa</h3>
          <p className="text-gray-700">Phone: {formData.phoneNumber}</p>
          <p className="text-gray-700">Bedrooms: {formData.bedroom}</p>
          <p className="text-gray-700">Address: {formData.address}</p>
          <p className="text-gray-700">Price: {formData.price} ETB</p>
          <p className="text-gray-700">City: {formData.city}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={openModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Update
            </button>
            <button
              // onClick={onDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Update Dialog */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={closeModal}
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
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
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
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
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
                            name="bedroom"
                            type="text"
                            value={formData.bedroom}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
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
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                            onClick={closeModal}
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
    </div>
  );
};

export default PropertyCard;
