import { Link } from "react-router-dom";
import AddisAbabaImage from "../../../assets/images/addis.jpg";
// import AdamaImage from '../../../../assets/images/adama.jpg';
// import HawassaImage from '../../../../assets/images/hawassa.jpg';
// import HararImage from '../../../../assets/images/harar.jpg';
// import DireDawaImage from '../../../../assets/images/dire_dawa.jpg';

//
const CityList = () => {
  return (
    <div className="h-full w-full rounded shadow-md bg-gray-100 gap-5 flex flex-col items-center justify-center p-6">
      <Link
        to="/addisababa"
        className="w-full h-full flex items-center justify-center"
      >
        <div className="md:w-2/3 hover:bg-first h-96 md:h-96 flex bg-white flex-col md:flex-row items-center gap-3 justify-center">
          <div className="md:w-1/3 h-full flex items-center p-2 md:p-0 ">
            <img src={AddisAbabaImage} className="cover rounded-md" alt="" />
          </div>
          <div className="text-3xl text-left">
            <h1>Addis Ababa</h1>
          </div>
        </div>
      </Link>
      <Link
        to="regions/addisababa"
        className="w-full h-full flex items-center justify-center"
      >
        <div className="md:w-2/3 hover:bg-first h-96 md:h-96 flex bg-white flex-col md:flex-row items-center gap-3 justify-center">
          <div className="md:w-1/3 h-full flex items-center p-2 md:p-0 ">
            <img src={AddisAbabaImage} className="cover rounded-md" alt="" />
          </div>
          <div className="text-3xl text-left">
            <h1>Addis Ababa</h1>
          </div>
        </div>
      </Link>
      <Link
        to="regions/addisababa"
        className="w-full h-full flex items-center justify-center"
      >
        <div className="md:w-2/3 hover:bg-first h-96 md:h-96 flex bg-white flex-col md:flex-row items-center gap-3 justify-center">
          <div className="md:w-1/3 h-full flex items-center p-2 md:p-0 ">
            <img src={AddisAbabaImage} className="cover rounded-md" alt="" />
          </div>
          <div className="text-3xl text-left">
            <h1>Addis Ababa</h1>
          </div>
        </div>
      </Link>
      <Link
        to="regions/addisababa"
        className="w-full h-full flex items-center justify-center"
      >
        <div className="md:w-2/3 hover:bg-first h-96 md:h-96 flex bg-white flex-col md:flex-row items-center gap-3 justify-center">
          <div className="md:w-1/3 h-full flex items-center p-2 md:p-0 ">
            <img src={AddisAbabaImage} className="cover rounded-md" alt="" />
          </div>
          <div className="text-3xl text-left">
            <h1>Addis Ababa</h1>
          </div>
        </div>
      </Link>
      <Link
        to="regions/addisababa"
        className="w-full h-full flex items-center justify-center"
      >
        <div className="md:w-2/3 hover:bg-first h-96 md:h-96 flex bg-white flex-col md:flex-row items-center gap-3 justify-center">
          <div className="md:w-1/3 h-full flex items-center p-2 md:p-0 ">
            <img src={AddisAbabaImage} className="cover rounded-md" alt="" />
          </div>
          <div className="text-3xl text-left">
            <h1>Addis Ababa</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CityList;
