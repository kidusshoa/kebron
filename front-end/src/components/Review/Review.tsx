import Picture from "../../assets/images/house.jpg";
import ReviewForm from "./ReviewForm";

const Review = () => {
  return (
    <div className="flex w-full md:h-vhhh h-full flex-row justify-center items-center ">
      <div className="w-1/2 items-center justify-center md:flex hidden">
        <img src={Picture} alt="Picture" className="rounded" />
      </div>
      <div className="flex md:w-1/2 w-full h-full items-center justify-center">
        <ReviewForm />
      </div>
    </div>
  );
};
export default Review;
