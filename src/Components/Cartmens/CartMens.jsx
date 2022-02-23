import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CartMens.css";
import Stars from "../Stars/Stars";

function CartMens({ id, name, price, img }) {
  return (
      <div className="men-cart" data-test-id={`clothes-card-/training-shop/mens`}>
        <Link to={`/mens/${id}`} className="men-cart__link" >
          <img
            className="mens-cart__img"
            src={`https://training.cleverland.by/shop/${img}`}
            // src={require(`../../img/mens/mens-${id}.jpg`)}
            alt="men-img"
          />
          <p className="mens-cart__text">{name}</p>
          <div className="mens-cart__stars">
            <div className="mens-cart__price-sale">
              <span className="mens-cart__stars-text">$ {price}</span>
            </div>
            <Stars />
          </div>
        </Link>
      </div>
  );
}





export default CartMens;

CartMens.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}