import React from "react";
import "./WomensFilter.css";
import headerArrow from "../../img/filter-icons/arrow-link.svg";
import share from "../../img/filter-icons/share.svg";
import filter from "../../img/filter-icons/filter.svg";
import burgerFilter from "../../img/filter-icons/burger-filter.svg";
import squaresFilter from "../../img/filter-icons/squares-filter.svg";

function WomensFilter() {
  return (
    <section className="womens-header">
      <div className="womens-header__title-div">
        <div className="container">
          <div className="womens-header__title">
            <div className="womens-header__title-link">
              <div className="womens-header__title-item">
                <p className="womens-header__title-text womens-header__home-link">
                  Home
                </p>
                <img
                  className="womens-header__title-arrow"
                  src={headerArrow}
                  alt="headerArrow"
                />
                <p className="womens-header__title-text womens-header__women-link">
                  Women
                </p>
              </div>
              <div className="womens-header__title-item">
                <a href="#share" className="womens-header__title-links">
                  <img src={share} alt="share" />
                </a>
                <p className="womens-header__title-text womens-header__share-link">
                  Share
                </p>
              </div>
            </div>
            <div className="womens-header__title-block">
              <h3 className="womens-header__title-women">Women</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="womens-header__filters-block">
        <div className="container">
          <div className="womens-header__filters">
            <div className="womens-header__filters-item">
              <img className="womens-header__filters-filter"  src={filter} alt="filter" />
              <p className="womens-header__filters-text">Filter</p>
            </div>
            <div className="womens-header__filters-item">
              <img className="womens-header__filters-burgerFilter" src={burgerFilter} alt="burgerFilter" />
              <img className="womens-header__filters-squaresFilter" src={squaresFilter} alt="squaresFilter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WomensFilter;
