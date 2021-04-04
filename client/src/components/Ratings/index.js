import React from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import "./style.css";

function Ratings(rating) {
  let stars = [];
  // Convert object to number
  let val = Object.values(rating);

  // Add filled in star(s)
  for (let i = 0; i < Math.floor(val); i++) {
    stars.push(<FaStar key={`star-${i}`} />);
  }

  // Add half star
  if (val % 1 > 0) stars.push(<FaStarHalfAlt key={`star-half`} />);

  // Add empty star(s)
  while (stars.length < 5)
    stars.push(<FaRegStar key={`star-empty-${stars.length}`} />);

  return <span className="star">{stars}</span>;
}

export default Ratings;
