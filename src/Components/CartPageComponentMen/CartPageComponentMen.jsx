import React from "react";
import "./CartPageComponentMen.css";
import { cartMens } from "../../data/data";

function CartPageComponentMen({id}) {
  return (
    <section className="cart-page">
      <div className="container">
        <p>{ cartMens[id-1].text}</p>
        <img
            src={require(`../../img/mens/mens-${id}.jpg`)}
            alt="men-img"
          />
      </div>
    </section>
  );
}

export default CartPageComponentMen;
