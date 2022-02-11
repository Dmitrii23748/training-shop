import React from "react";
import "./Mens.css";
import CartMens from "../Cartmens/CartMens";
import {cartMens} from "../../data/data";



function Mens() {
  
  return (
    <>
      <section className="mens" data-test-id={`products-page-/training-shop/mens`}>
        <div className="container">
          <div className="mens-img__block">
            {
                cartMens.map((cart) => {
                   return (
                    <CartMens
                        key={cart.id}
                        id={cart.id}
                        title={cart.text}
                        price={cart.price}
                    />
                   )
                })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Mens;
