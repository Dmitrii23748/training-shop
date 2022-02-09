import React from "react";
import "./MensBtn.css";

function MensBtn() {
  return (
    <section className="section-mens-btn">
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
      </div>
    </section>
  );
}

export default MensBtn;
