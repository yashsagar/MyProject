import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  REST_BASE_URL_1,
  REST_BASE_URL_2,
  SWIGGY_CYCLE_ICON,
} from "../utils/utility";
import star from "../images/star.svg";
import Items from "../components/Items";

const Restaurant = () => {
  const { restId } = useParams();
  const [restData, setRestData] = useState({});

  useEffect(() => {
    fetch(REST_BASE_URL_1 + restId + REST_BASE_URL_2)
      .then((res) => res.json())
      .then((data) => setRestData(data.data));
  }, []);

  if (Object.keys(restData).length) {
    const {
      avgRating,
      name,
      costForTwoMessage,
      cuisines,
      areaName,
      sla,
      feeDetails,
      totalRatingsString,
    } = restData.cards[2].card.card.info;

    // console.log(restData);

    return (
      <div className="main-wrapper">
        <p className="mt-8 mb-4 text-2xl font-bold capitalize">{name}</p>
        <div className="p-4 rounded-2xl bg-gradient-to-t from-gray-400/40 to-transparent">
          <div className="border rounded-2xl px-4 pt-2 bg-white">
            <div className="  flex gap-x-2 items-center font-semibold">
              <img className="pb-1" src={star} alt="star icon" />
              <span>{avgRating}</span>
              <span>({totalRatingsString})</span>
              <span className="block w-1 h-1 bg-gray-800/80 rounded-full" />
              <span>{costForTwoMessage}</span>
            </div>
            <div className="text-red-500 pt-1 underline font-semibold capitalize">
              {cuisines.join(", ")}
            </div>
            <div
              id="path"
              className="border-l-2 border-gray-800/50 pl-4 mt-4 ml-2 relative p-1 "
            >
              <div className="space-x-2  -mt-2.5 pb-2">
                <span className="font-semibold capitalize ">outlet</span>
                <span className="text-gray-600 capitalize">{areaName}</span>
              </div>
              <div className="-mb-[18px] font-semibold">{sla.slaString}</div>
            </div>
            <hr className="mt-8" />
            <div className="py-3 flex gap-x-2">
              <img
                className="w-5 h-5"
                src={SWIGGY_CYCLE_ICON}
                alt="cycle icon"
              />
              <p>{feeDetails.message}</p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <Items restData={restData} />
        </div>
      </div>
    );
  } else {
    return <div className="main-wrapper">fetching</div>;
  }
};

export default Restaurant;
