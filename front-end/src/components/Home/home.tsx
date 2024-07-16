import Four from "../Four/Four";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Three from "../Three/Three";
import Two from "../Two/Two";
import About from "../About/About";

const Home = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <div id="home" className="bg-custom-image bg-cover bg-center h-screen">
        <div className="w-2/3 md:ml-0 text-center md:h-full md:mt-10 flex justify-center items-center md:items-start h-1/6 ">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Kebron
            </span>{" "}
            Rents
          </h1>
        </div>
      </div>
      <Two />
      <Three />
      <Four />
      <Review />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
