import React from "react";
import "./WomensBtn.css";

function WomensBtn() {
  return (
    <section className="section-womens-btn">
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
      </div>
    </section>
  );
}

export default WomensBtn;
