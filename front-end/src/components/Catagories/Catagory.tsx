import Header from "../Header/Header";
import FilterComponent from "./Region/FilterCard";
import CityList from "./Region/Region";

const Catagory = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <FilterComponent />
      <CityList />
    </div>
  );
};

export default Catagory;
