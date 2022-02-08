import React from "react";
import "./Mens.css";
import CartMens from "../Cartmens/CartMens";
import {cartMens} from "../../data/data";



function Mens() {
  
  return (
    <>
      <section className="mens">
        <div className="container">
          <div className="mens-block__title">
            <h2 className="mens-title">MEN’S</h2>
            <ul className="mens-category__list">
              <li className="mens-category__item">
                <button className="mens-category__link" type="button">
                  NEW ARRIVALS
                </button>
              </li>
              <li className="mens-category__item">
                <button className="mens-category__link" type="button">
                  SPECIALS
                </button>
              </li>
              <li className="mens-category__item">
                <button className="mens-category__link" type="button">
                  BESTSELLERS
                </button>
              </li>
              <li className="mens-category__item">
                <button className="mens-category__link" type="button">
                  MOST VIEWED
                </button>
              </li>
              <li className="mens-category__item">
                <button className="mens-category__link" type="button">
                  FEATURED PRODUCTS
                </button>
              </li>
            </ul>
          </div>
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
          <div className="mens-see__btn-block">
            <button className="mens-btn">see all</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mens;
