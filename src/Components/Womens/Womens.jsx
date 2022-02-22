import React from "react";
import "./Womens.css";
import CartWomens from "../Cartwomens/CartWomens";
// import {cartWomens} from "../../data/data";
import { PRODUCTS } from "../../data/products";



function Womens() {
  const firstEightWomensProducts = PRODUCTS.women.slice(0, 8);
  return (
      <section className="womens" data-test-id={`products-page-/training-shop/womens`}>
        <div className="container">
          <div className="womens-img__block">
            {
                firstEightWomensProducts.map((cart, index) => {
                   return (
                    <CartWomens
                        key={cart.id}
                        id={index + 1}
                        name={cart.name}
                        price={cart.price}
                        sale={cart.sale}
                        discount={cart.discount}
                        img={cart.images[0].url}
                    />
                   )
                })
            }
          </div>
        </div>
      </section>
  );
}

export default Womens;
