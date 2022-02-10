import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CartMens.css";
import Stars from "../Stars/Stars";

function CartMens({ id, title, price }) {
  return (
    <>
      <div className="men-cart">
        <Link to={`/training-shop/mens/${id}`} className="men-cart__link">
          <img
            className="mens-cart__img"
            src={require(`../../img/mens/mens-${id}.jpg`)}
            alt="men-img"
          />
          <p className="mens-cart__text">{title}</p>
          <div className="mens-cart__stars">
            <div className="mens-cart__price-sale">
              <span className="mens-cart__stars-text">$ {price}</span>
            </div>
            <Stars />
          </div>
        </Link>
      </div>
    </>
  );
}



export default CartMens;

CartMens.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}