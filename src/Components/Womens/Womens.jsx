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
                <button className="womens-category__link" type="button">
                  NEW ARRIVALS
                </button>
              </li>
              <li className="womens-category__item">
                <button className="womens-category__link" type="button">
                  SPECIALS
                </button>
              </li>
              <li className="womens-category__item">
                <button className="womens-category__link" type="button">
                  BESTSELLERS
                </button>
              </li>
              <li className="womens-category__item">
                <button className="womens-category__link" type="button">
                  MOST VIEWED
                </button>
              </li>
              <li className="womens-category__item">
                <button className="womens-category__link" type="button">
                  FEATURED PRODUCTS
                </button>
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
