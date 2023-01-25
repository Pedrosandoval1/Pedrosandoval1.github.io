import React from "react";
import FibeStarRating from "../fivestarRanting/FibeStarRating";
import "./tvShowDetaile.css"
// para traer la data de rating desde el app y poder pintar y así 
//compartir a FiberStarRating y pintar en bootstrapicons
const TvShowDetaile = ({ tvShow }) => {
  // console.log(FibeStarRating);
  // console.log("detaile", tvShow);
  const rating = tvShow.vote_average / 2;
  // console.log(rating);
  return (
    <div>
      <div className="tvShow_name">{tvShow.name}</div>
      <div>
        <FibeStarRating rating={rating} />
        <span className="tvShow_rating">{rating}/ 5</span>
      </div>
      <div className="tvShow_overview">{tvShow.overview}</div>
    </div>
  );
};

export default TvShowDetaile;
