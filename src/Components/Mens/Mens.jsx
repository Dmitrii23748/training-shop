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
                <a className="mens-category__link" href="#NEW ARRIVALS">
                  NEW ARRIVALS
                </a>
              </li>
              <li className="mens-category__item">
                <a className="mens-category__link" href="#SPECIALS">
                  SPECIALS
                </a>
              </li>
              <li className="mens-category__item">
                <a className="mens-category__link" href="#BESTSELLERS">
                  BESTSELLERS
                </a>
              </li>
              <li className="mens-category__item">
                <a className="mens-category__link" href="#MOST VIEWED">
                  MOST VIEWED
                </a>
              </li>
              <li className="mens-category__item">
                <a className="mens-category__link" href="#FEATURED PRODUCTS">
                  FEATURED PRODUCTS
                </a>
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
