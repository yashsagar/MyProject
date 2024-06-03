import { useState, useEffect } from "react";
import { IMAGE_BASE_URL } from "../utils/utility";
import { Link } from "react-router-dom";

const Card = ({ cardData, searchData, setSearchData, reset }) => {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(cardData);
  }, [cardData, reset]);

  function filterCard(card) {
    let searchText = searchData.toLowerCase();
    let nameText = card.name.toLowerCase();
    if (nameText.includes(searchText)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (searchData) {
      setFilterData(() => cardData.filter((card) => filterCard(card.info)));
      setSearchData("");
    }
  }, [searchData]);

  return filterData.map((card) => {
    const { id, cloudinaryImageId, name, avgRating, sla, areaName } = card.info;
    return (
      <Link
        to={`/Restaurant/${id}`}
        key={id}
        className="w-1/4 grow hover:scale-95"
      >
        <div className="aspect-video rounded-2xl overflow-hidden prese">
          <img
            className="w-full h-full object-cover"
            src={IMAGE_BASE_URL + cloudinaryImageId}
            alt="restaurants image"
          />
        </div>
        <div className="mt-3 ml-3">
          <p className="font-bold">{name}</p>
          <div className="flex items-center gap-x-2 font-bold">
            <span>{avgRating}</span>
            <span className="w-1 h-1 bg-black rounded-full"></span>
            <span>{sla.slaString}</span>
          </div>
          <p>{areaName}</p>
        </div>
      </Link>
    );
  });
};

export default Card;
