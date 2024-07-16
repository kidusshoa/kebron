import Picture from "../../assets/images/about.png";

const About = () => {
  return (
    <div className="w-full flex h-full items-center justify-center">
      <div id="about" className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src={Picture} />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Kebron Rents</span>
            </h2>
            <p className="text-gray-700">
              Welcome to Kebron Rents, Ethiopian based online home renting
              platform. Our mission is to connect landlords with customers in a
              seamless and efficient manner. Whether you're looking to rent out
              your property or find the perfect place to call home, Kebron Rents
              is here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
