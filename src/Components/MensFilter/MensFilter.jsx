import React from "react";
import "./MensFilter.css";
import headerArrow from "../../img/filter-icons/arrow-link.svg";
import share from "../../img/filter-icons/share.svg";
import filter from "../../img/filter-icons/filter.svg";
import closeFilter from '../../img/filter-icons/close-filter.svg';
import burgerFilter from "../../img/filter-icons/burger-filter.svg";
import squaresFilter from "../../img/filter-icons/squares-filter.svg";

function MensFilter({closeOpenFilterMen, handleCloseOpenFilterMen}) {
  return (
    <section className="mens-header">
      <div className="mens-header__title-div">
        <div className="container">
          <div className="mens-header__title">
            <div className="mens-header__title-link">
              <div className="mens-header__title-item">
                <p className="mens-header__title-text mens-header__home-link">
                  Home
                </p>
                <img
                  className="mens-header__title-arrow"
                  src={headerArrow}
                  alt="headerArrow"
                />
                <p className="mens-header__title-text mens-header__men-link">
                  Men
                </p>
              </div>
              <div className="mens-header__title-item">
                <a href="#share" className="mens-header__title-links">
                  <img src={share} alt="share" />
                </a>
                <p className="mens-header__title-text mens-header__share-link">
                  Share
                </p>
              </div>
            </div>
            <div className="mens-header__title-block">
              <h3 className="mens-header__title-men">Men</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mens-header__filters-block">
        <div className="container">
          <div className="mens-header__filters">
            <div className="mens-header__filters-item">
              <img className="mens-header__filters-filter"
                src={closeOpenFilterMen ? closeFilter : filter} alt="filter"
                onClick={handleCloseOpenFilterMen}
                />
              <p className="mens-header__filters-text" onClick={handleCloseOpenFilterMen}>Filter</p>
            </div>
            <div className="mens-header__filters-item">
              <img className="mens-header__filters-burgerFilter" src={burgerFilter} alt="burgerFilter" />
              <img className="mens-header__filters-squaresFilter" src={squaresFilter} alt="squaresFilter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MensFilter;
