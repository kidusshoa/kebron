import Header from "../../Header/Header";
import Skeleton from "./Skeleton";
import AdminCard from "./ViewAdmin";

const AddAdmin = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <Skeleton />
      <AdminCard />
    </div>
  );
};

export default AddAdmin;
