import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "../../../../lib/services/property";
import { UpdatePropertyCard } from "./UpdatePropertyCard";

interface Property {
  id: string;
  cover: string;
  phone_number: string;
  address: string;
  number_of_bedrooms: number;
  price: number;
  category: { name: string };
  city: { name: string };
}

const PropertyCard: React.FC = () => {
  const { isLoading, data, error } = useQuery<Property[], Error>({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid w-full h-full md:grid-cols-4 p-5 gap-5 grid-cols-1">
      {data?.map((property) => (
        <UpdatePropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyCard;
