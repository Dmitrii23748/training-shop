import React from "react";
import "./Womens.css";
import CartWomens from "../Cartwomens/CartWomens";
import {cartWomens} from "../../data/data";



function Womens() {
  
  return (
    <>
      <section className="womens">
        <div className="container">
          <div className="womens-img__block">
            {
                cartWomens.map((cart) => {
                   return (
                    <CartWomens
                        key={cart.id}
                        id={cart.id}
                        title={cart.text}
                        price={cart.price}
                        sale={cart.sale}
                        percent={cart.percent}
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

export default Womens;
