import React from "react";
import "./FilterMen.css";
import PropTypes from "prop-types";
import { NEWPRODUCTS } from "../../data/newProducts";
import CheckBox from "../CheckBox/CheckBox";
import {
  createUniqueSizesArray,
  createUniqueColorsArray,
  createUniqueBrandsArray,
  priceCheckBoxMens
} from "../../data/root";

function FilterMens({ filterSelect, closeOpenFilterMen }) {
  const sizeCategory = createUniqueSizesArray(NEWPRODUCTS.men);
  const colorCategory = createUniqueColorsArray(NEWPRODUCTS.men);
  const brandCategory = createUniqueBrandsArray(NEWPRODUCTS.men);

  return (
    <section className={closeOpenFilterMen ? "filters-category" : "filters-category hide"} data-test-id='filters-men'>
      <div className="container">
        <div className="filters-block-mens">
          <div className="filters-mens" data-test-id='filters-color'>
            <h3 className="filter-title">color</h3>
            <ul className="filters__list">
              {colorCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index} data-test-id={`filter-color-${item}`}>
                    <CheckBox
                      label={item}
                      onChange={(input) =>
                        filterSelect("COLOR", input.checked, item.toLowerCase())
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters-mens"  data-test-id='filters-size'>
            <h3 className="filter-title">size</h3>
            <ul className="filters__list">
              {sizeCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index} data-test-id={`filter-size-${item}`}>
                    <CheckBox
                      label={item}
                      onChange={(input) =>
                        filterSelect("SIZE", input.checked, item.toLowerCase())
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters-mens"  data-test-id='filters-brand'>
            <h3 className="filter-title">brand</h3>
            <ul className="filters__list">
              {brandCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index} data-test-id={`filter-brand-${item}`}>
                    <CheckBox
                      label={item}
                      onChange={(input) =>
                        filterSelect("BRAND", input.checked, item.toLowerCase())
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters-mens">
            <h3 className="filter-title">price</h3>
            <ul className="filters__list">
              {priceCheckBoxMens.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
                    <CheckBox
                      label={`$ ${String(item.title)}`}
                      onChange={(input) =>
                        filterSelect("PRICE", input.checked, item.priceCheck)
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterMens;

FilterMens.propTypes = {
  filterSelect: PropTypes.func.isRequired,
  closeOpenFilterMen: PropTypes.bool.isRequired,
}
