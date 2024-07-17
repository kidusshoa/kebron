import FilterComponent from "./Region/FilterCard";
import PropertyList from "./Region/PropertyCard";
import Header from "./Region/Header/Header";

const Catagory = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <FilterComponent />
      <PropertyList />
    </div>
  );
};

export default Catagory;
