import AddPropertyForm from "./CRUD/Adding";

import PropertyCard from "./CRUD/PropertyCard";
import Header from "./Header/Header";

const Admin = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <AddPropertyForm />
      <PropertyCard />
    </div>
  );
};

export default Admin;
