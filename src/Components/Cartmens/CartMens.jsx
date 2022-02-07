import React from "react";
import "./CartMens.css";
import Stars from "../Stars/Stars";

function CartMens({ id, title, price}) {
  return (
    <>
      <div className="men-cart">
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
      </div>
    </>
  );
}

export default CartMens;
