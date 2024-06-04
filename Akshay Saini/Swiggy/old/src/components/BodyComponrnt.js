import React, { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import { SWIGGY_URL, LOGO_URL } from "../utils/constants";
import logo from "../../resource/images/search-icon.svg";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [restroData, setRestroData] = useState([]);
  const [restroFilterData, setrestroFilterData] = useState([]);
  const [inputString, setinputString] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const featchData = await fetch(SWIGGY_URL);
    const data = await featchData.json();
    setRestroData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setrestroFilterData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restroData.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body-wrapper">
        <div className="search-area-wrapper">
          <button
            className="filter-data"
            onClick={() => {
              const filterData = restroData.filter((eachRestro) => {
                return eachRestro.info.avgRating > 4.2;
              });
              setrestroFilterData(filterData);
            }}
          >
            Filter top Restaurants
          </button>
          <div className="search-wrapper">
            <img src={logo} alt="search icon" />
            <input
              type="text"
              className="search-input"
              onChange={(eventData) => {
                setinputString(eventData.target.value);
              }}
              value={inputString}
            ></input>
            <button
              className="search-btn"
              onClick={() => {
                const filterData = restroData.filter((eachRestro) => {
                  return eachRestro.info.name
                    .toLowerCase()
                    .includes(inputString.toLowerCase());
                });
                setrestroFilterData(filterData);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="reset-data"
            onClick={() => {
              setrestroFilterData(restroData);
              setinputString("");
            }}
          >
            Rest Filter
          </button>
        </div>
        <div className="reastro-card-wrapper">
          {restroFilterData.map((eachRestro) => (
            <RestroCard data={eachRestro.info} />
          ))}
        </div>
      </div>
    );
  }
};

export default BodyComponent;
