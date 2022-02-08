import React from "react";
import PropTypes from "prop-types";
import "./CartWomens.css";
import Stars from "../Stars/Stars";

function CartWomens({ id, title, price, sale, percent }) {
  return (
    <>
      <div className="women-cart">
        <a href="#womens" className="women-cart__link">
          <img
            className="womens-cart__img"
            src={require(`../../img/womens/womens-${id}.jpg`)}
            alt="women-img"
          />
          <p className="womens-cart__text">{title}</p>
          <div className="womens-cart__stars">
            <div className="womens-cart__price-sale">
              <span className="womens-cart__stars-text">$ {price}</span>
              {sale ? (
                <span className="womens-cart__stars-sale">$ {sale}</span>
              ) : (
                null
              )}
            </div>
            <Stars />
          </div>
          {percent ? (
            <div className="womens-percent">
              <p className="womens-percent__text">-{percent}%</p>
            </div>
          ) : (
            null
          )}
        </a>
      </div>
    </>
  );
}

export default CartWomens;


CartWomens.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sale: PropTypes.string,
  percent: PropTypes.string
}
