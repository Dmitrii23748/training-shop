import React from "react";
import "./Stars.css";
import staryellow from "../../img/stars/yellow-star.svg";
import stargrey from "../../img/stars/grey-star.svg";

function Stars() {
  const starFour = [1, 2, 3, 4];
  return (
    <>
      <div className="womens-cart__stars-block">
        {starFour.map((star, i) => {
          return (
            <img
            key={i}
              className="womens-cart__star"
              src={staryellow}
              alt="staryellow"
            />
          );
        })}
        <img className="womens-cart__star" src={stargrey} alt="stargrey" />
      </div>
    </>
  );
}

export default Stars;
