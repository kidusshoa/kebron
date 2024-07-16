import Header from "../../../Header/Header";
import Pic from "../../../../assets/images/appartment.jpg";

const Harar = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="w-full gap-4 md:gap-5 h-full grid md:grid-cols-4 grid-cols-1 p-5  md:px-4 ">
        {/*place-items-center */}
        {[12, 3, 4, 5, 6].map((item) => (
          <div className="h-full rounded md:w-full shadow-lg bg-white">
            <div key={item} className="w-full h-2/3 overflow-hidden">
              <img
                className="w-full aspect-square object-cover"
                src={Pic}
                alt="Rental"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Addis Ababa</div>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Phone:</span> 0987766554
              </p>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Bedrooms:</span> Two
              </p>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Address:</span> 4 killo
              </p>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Price:</span> 4500 ETB
              </p>

              <p className="text-gray-700 text-base">
                <span className="font-semibold">Category:</span> Villa
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Harar;
