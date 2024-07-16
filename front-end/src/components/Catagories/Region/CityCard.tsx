//import { useHistory } from 'react-router-dom'; // If you are using react-router for navigation
var city = "kidus";

const CityCard = ({ city, image, link }) => {
  //   const history = useHistory();

  const handleClick = () => {
    // history.push(link);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mb-6 transition-transform transform hover:scale-105"
    >
      <img
        src={image}
        alt={`${city} image`}
        className="w-1/3 h-48 object-cover"
      />
      <div className="p-4 w-2/3">
        <h3 className="text-2xl font-bold text-gray-800">{city}</h3>
      </div>
    </button>
  );
};

export default CityCard;
