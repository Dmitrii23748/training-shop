import React from "react";
import "./Womens.css";
import CartWomens from "../Cartwomens/CartWomens";
import {cartWomens} from "../../data/data";



function Womens() {
  
  return (
    <>
      <section className="womens">
        <div className="container">
          <div className="womens-block__title">
            <h2 className="womens-title">WOMEN’S</h2>
            <ul className="womens-category__list">
              <li className="womens-category__item">
                <a className="womens-category__link" href="#NEW ARRIVALS">
                  NEW ARRIVALS
                </a>
              </li>
              <li className="womens-category__item">
                <a className="womens-category__link" href="#SPECIALS">
                  SPECIALS
                </a>
              </li>
              <li className="womens-category__item">
                <a className="womens-category__link" href="#BESTSELLERS">
                  BESTSELLERS
                </a>
              </li>
              <li className="womens-category__item">
                <a className="womens-category__link" href="#MOST VIEWED">
                  MOST VIEWED
                </a>
              </li>
              <li className="womens-category__item">
                <a className="womens-category__link" href="#FEATURED PRODUCTS">
                  FEATURED PRODUCTS
                </a>
              </li>
            </ul>
          </div>
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
          <div className="womens-see__btn-block">
            <button className="womens-btn">see all</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Womens;
