/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import "./Stars.css";
import staryellow from "../../img/stars/yellow-star.svg";
import stargrey from "../../img/stars/grey-star.svg";

function Stars({ rating }) {
  console.log(rating);
  let starLength = 5;
  return (
    <>
      <div className="womens-cart__stars-block">
        { rating <= 5 ?
        [...Array(rating)].map((star, i) => {
          return (
            <img
              key={i}
              className="womens-cart__star"
              src={staryellow}
              alt="staryellow"
            />
          );
        }) : null}
        { rating <= 5 ?
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
        {rating > 5 ? [...Array(5)].map((star, i) => {
          return (
            <img
              key={i}
              className="womens-cart__star"
              src={stargrey}
              alt="stargrey"
            />
          );
        }) : null}
      </div>
    </>
  );
}

export default Stars;


Stars.propTypes = {
  rating: PropTypes.number.isRequired
}