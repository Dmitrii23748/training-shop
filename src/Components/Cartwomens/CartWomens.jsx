import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CartWomens.css";
import Stars from "../Stars/Stars";

function CartWomens({ id, name, price, sale, discount, img, rating }) {
  return (
    <>
      <div className="women-cart" data-test-id={`clothes-card-/training-shop/womens`}>
        <Link to={`/womens/${id}`} className="women-cart__link">
          <img
            className="womens-cart__img"
            src={`https://training.cleverland.by/shop/${img}`}
            // src={require(`../../img/womens/womens-${id}.jpg`)}
            alt="women-img"
          />
          <p className="womens-cart__text">{name}</p>
          <div className="womens-cart__stars">
            <div className="womens-cart__price-sale">
              <span className="womens-cart__stars-text">$ {price}</span>
              {sale ? (
                <span className="womens-cart__stars-sale">$ {sale}</span>
              ) : (
                null
              )}
            </div>
            <Stars rating={rating} />
          </div>
          {discount ? (
            <div className="womens-percent">
              <p className="womens-percent__text">{discount}</p>
            </div>
          ) : (
            null
          )}
        </Link>
      </div>
    </>
  );
}


CartWomens.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.string,
  discount: PropTypes.string
}

export default CartWomens;




