/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./WomensBtn.css";

function WomensBtn({filtersWomensMainPage}) {

  const [activeBtn, setActiveBtn ] = useState(0)

  useEffect(() => {
    filtersWomensMainPage('isNewArrivals')
  }, [])

  const buttons = [
    { name:'isNewArrivals', label: 'NEW ARRIVALS', func: 'isNewArrivals', id: 1},
    { name:'isSpecial', label: 'SPECIALS', func: 'isSpecial', id: 2},
    { name:'isBestseller', label: 'BESTSELLERS', func: 'isBestseller', id: 3},
    { name:'isMostViewed', label: 'MOST VIEWED', func: 'isMostViewed', id: 4},
    { name:'isFeatured', label: 'FEATURED PRODUCTS', func: 'isFeatured', id: 5}
  ]

  return (
    <section className="section-womens-btn">
      <div className="container">
        <div className="womens-block__title">
          <h2 className="womens-title">WOMEN’S</h2>
          <ul className="womens-category__list">
            {
              buttons.map((item, index) => {
                return (
                  <li className="womens-category__item" key={item.name} onClick={() => setActiveBtn(index) }>
                    <button                 
                      className={ activeBtn === index ? 'womens-category__link active' : 'womens-category__link'}
                      type="button"
                      onClick={() => filtersWomensMainPage(`${item.func}`)}>
                      {item.label}
                    </button>
                </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WomensBtn;
