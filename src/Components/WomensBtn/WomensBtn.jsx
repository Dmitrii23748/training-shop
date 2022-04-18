/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./WomensBtn.css";

function WomensBtn({ filtersWomensMainPage, womensMainPageProducts }) {
  const [activeBtn, setActiveBtn] = useState(0);

  const clickButtonCategoryWomens = (statusBtn, indexBtn) => {
    setActiveBtn(indexBtn);
    filtersWomensMainPage(statusBtn);
  };

  const buttons = [
    { name: "isNewArrivals", label: "NEW ARRIVALS", func: "isNewArrivals" },
    { name: "isSpecial", label: "SPECIALS", func: "isSpecial" },
    { name: "isBestseller", label: "BESTSELLERS", func: "isBestseller" },
    { name: "isMostViewed", label: "MOST VIEWED", func: "isMostViewed" },
    { name: "isFeatured", label: "FEATURED PRODUCTS", func: "isFeatured" },
  ];

  useEffect(() => {
    if (womensMainPageProducts !== undefined) {
      filtersWomensMainPage("isNewArrivals");
    }
  }, [womensMainPageProducts]);

  return (
    <section className="section-womens-btn">
      <div className="container">
        <div className="womens-block__title">
          <h2 className="womens-title">WOMEN’S</h2>
          <ul className="womens-category__list">
            {buttons.map((item, index) => {
              return (
                <li className="womens-category__item" key={item.name}>
                  <button
                    className={
                      activeBtn === index
                        ? "womens-category__link active"
                        : "womens-category__link"
                    }
                    type="button"
                    onClick={() =>
                      clickButtonCategoryWomens(`${item.func}`, index)
                    }
                    data-test-id={`clothes-women-${item.name}`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WomensBtn;

WomensBtn.propTypes = {
  filtersWomensMainPage: PropTypes.func.isRequired,
};
