import Picture from "../../../../assets/images/appartment.jpg";

// var property: {
//   image: any;
//   phoneNumber: any;
//   address: any;
//   bedroom: any;
//   price: any;
//   city: any;
// };
const PropertyCard = () => {
  //   const { image, phoneNumber, address, bedroom, price, city } = property;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <img
        src={Picture}
        alt="Property"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">Hawassa</h3>
        <p className="text-gray-700">Phone: 0923345434</p>
        <p className="text-gray-700">Bedrooms: Three</p>
        <p className="text-gray-700">Address: Summit Giyorgis</p>
        <p className="text-gray-700">Price: 13000 ETB</p>
        <p className="text-gray-700">City: Addis Ababa</p>
        <div className="flex justify-between mt-4">
          <button
            // onClick={onUpdate}
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
  );
};

export default PropertyCard;
