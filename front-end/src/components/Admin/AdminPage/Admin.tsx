import AddPropertyButton from "./CRUD/AddProperty";

import PropertyCard from "./CRUD/PropertyCard";
import Header from "./Header/Header";

const Admin = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <AddPropertyButton />
      <PropertyCard />
    </div>
  );
};

export default Admin;
