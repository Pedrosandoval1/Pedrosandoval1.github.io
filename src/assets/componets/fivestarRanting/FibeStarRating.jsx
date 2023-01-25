import React from "react";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

// para realizar las estrellas con bootstrap icons
const FibeStarRating = ({ rating }) => {
  // console.log("rating",rating);
  const starList = [];
  const starFillCount = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  // console.log(hasHalfStar);
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={i} />);
  }

  //para que se meustre las estrellas vacias xd
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<Star key={i + starFillCount} />);
  }

  return <div className="starList">{starList}</div>;
};

export default FibeStarRating;
