import { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

const FilterComponent = () => {
  const cities = ["Addis Ababa", "Adama", "Hawassa", "Harar City", "Dire Dawa"];
  const categories = ["Appartment", "Villa"];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="w-full h-full p-5 flex flex-row-reverse">
        <div className=" h-full rounded md:scale-150 flex flex-row px-3 items-center justify-center ">
          <button
            onClick={openModal}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Filter
          </button>
        </div>
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full md:h-vhh md:w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle  md:w-1/4 sm:w-full sm:p-6">
                  <div className="sm:flex md:w-full sm:items-start">
                    <div className="mt-3 text-center md:w-full sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Filter Properties
                      </Dialog.Title>
                      <div className="mt-2 w-full">
                        <div className="mt-5 w-full sm:mt-6 sm:flex flex-col gap-2 ">
                          <div className="space-y-2 w-full gap-3 flex flex-col ">
                            <label
                              htmlFor="categories"
                              className="block text-gray-700 text-sm font-bold"
                            >
                              Categories
                            </label>
                            <select
                              id="category"
                              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                            >
                              <option value="">Choose a Category</option>
                              {categories.map((categories) => (
                                <option key={categories} value={categories}>
                                  {categories}
                                </option>
                              ))}
                            </select>

                            <p className="text-red-500 text-sm"></p>
                          </div>
                          <div className="space-y-2 w-full gap-3 flex flex-col ">
                            <label
                              htmlFor="city"
                              className="block text-gray-700 text-sm font-bold"
                            >
                              City
                            </label>
                            <select
                              id="city"
                              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                            >
                              <option value="">Select a city</option>
                              {cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>

                            <p className="text-red-500 text-sm"></p>
                          </div>
                          <div className="w-full h-full flex flex-row-reverse gap-2">
                            <button
                              type="submit"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Apply
                            </button>
                            <button
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                              onClick={closeModal}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default FilterComponent;
