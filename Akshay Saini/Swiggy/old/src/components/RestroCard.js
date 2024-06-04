import Rract from "react";
import { IMAGE_URL } from "../utils/constants";

const RestroCard = (props) => {
  let { id, name, cloudinaryImageId, cuisines, ...rest } = props.data;
  return (
    <div className="card card-1">
      <div className="img-wrapper">
        <img
          className="restaurant-image"
          src={IMAGE_URL + cloudinaryImageId}
          alt="restaurant image"
        />
      </div>
      <div className="text-info-wrapper">
        <h4 className="restaurant-name">{name}</h4>
        <p className="cusin"> {cuisines.join(", ")}</p>
        <div className="info-wrapper">
          <p className="rating">{rest.avgRating}</p>
          <div className="dot"></div>
          <p className="time">{rest.sla.slaString}</p>
        </div>
        <p className="place">{rest.areaName} </p>
      </div>
    </div>
  );
};

export default RestroCard;
