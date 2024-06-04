import filledStar from "../images/filledStar.svg";
import rupeeSymbol from "../images/rupeeSymbol.svg";
import { IMAGE_BASE_URL } from "../utils/utility";

const Item = ({ item }) => {
  const { name, price, description, ratings, imageId } = item;
  return (
    <div className="flex justify-between items-center border-b-2 p-2 gap-x-8">
      <div className="pt-6 space-y-1">
        <p className="font-semibold text-lg">{name}</p>
        <div className="flex items-center">
          <span className="w-5 h-5 mb-0.5">
            <img src={rupeeSymbol} alt="rupee symbol" />
          </span>
          <span>{`${price / 100}`}</span>
        </div>
        <div className="flex  gap-1 py-2">
          <span className="w-5 h-5 inline-block">
            <img src={filledStar} alt="star icon" />
          </span>
          <span>{ratings.aggregatedRating.rating}</span>
          <span>({ratings.aggregatedRating.ratingCountV2})</span>
        </div>
        <p className="pb-8">{description}</p>
      </div>
      <div className="aspect-square h-36 relative ">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={IMAGE_BASE_URL + imageId}
          alt="food item photo"
        />
        <div className="absolute text-xl left-1/2 bottom-0 text-green-500 -translate-x-1/2 translate-y-1/2 z-10 bg-white font-semibold px-4 py-1 rounded-lg  border-2 border-gray-400/50 shadow cursor-pointer">
          ADD
        </div>
      </div>
    </div>
  );
};

export default Item;
