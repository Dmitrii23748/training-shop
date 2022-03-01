import React from "react";
import "./Stars.css";
import staryellow from "../../img/stars/yellow-star.svg";
import stargrey from "../../img/stars/grey-star.svg";

function Stars({ rating }) {
  let starLength = 5;
  return (
    <>
      <div className="womens-cart__stars-block">
        {[...Array(rating)].map((star, i) => {
          return (
            <img
              key={i}
              className="womens-cart__star"
              src={staryellow}
              alt="staryellow"
            />
          );
        })}
        { rating > 0 ?
        [...Array(starLength - rating )].map((star, i) => {
          return (
            <img
              key={i}
              className="womens-cart__star"
              src={stargrey}
              alt="stargrey"
            />
          );
        }) : null
        }
      </div>
    </>
  );
}

export default Stars;
