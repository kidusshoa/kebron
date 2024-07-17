import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "../../../lib/services/property";

const PropertyList = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });
  if (isLoading || !data || error) {
    return <div>Loading....</div>;
  }
  return (
    <div className="w-full gap-4 md:gap-5 h-full grid md:grid-cols-4 grid-cols-1 p-5  md:px-4 ">
      {/*place-items-center */}
      {data.map((property: any) => (
        <div className="h-full rounded md:w-full shadow-lg bg-white">
          <div key={property.id} className="w-full h-2/3 overflow-hidden">
            <img
              className="w-full aspect-square object-cover"
              src={property.cover}
              alt="Rental"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{property.city.name}</div>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Phone:</span>{" "}
              {property.phone_number}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Bedrooms:</span>{" "}
              {property.number_of_bedrooms}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Address:</span>
              {property.address}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Price:</span> {property.price}
            </p>

            <p className="text-gray-700 text-base">
              <span className="font-semibold">Category:</span>{" "}
              {property.category.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
