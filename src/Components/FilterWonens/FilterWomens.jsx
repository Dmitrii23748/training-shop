import React from "react";
import "./FilterWomens.css";
import { NEWPRODUCTS } from "../../data/newProducts";
import CheckBox from "../CheckBox/CheckBox";
import {
  createUniqueSizesArray,
  createUniqueColorsArray,
  createUniqueBrandsArray,
  priceCheckBoxWomens
} from "../../data/root";

function FilterWomens({ filterSelect, closeOpenFilterWomens }) {
  const sizeCategory = createUniqueSizesArray(NEWPRODUCTS.women);
  const colorCategory = createUniqueColorsArray(NEWPRODUCTS.women);
  const brandCategory = createUniqueBrandsArray(NEWPRODUCTS.women);

  return (
    <section className={closeOpenFilterWomens ? "filters-category" : "filters-category hide"}>
      <div className="container">
        <div className="filters-block-womens">
          <div className="filters-womens">
            <h3 className="filter-title">color</h3>
            <ul className="filters__list">
              {colorCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
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
          <div className="filters-womens">
            <h3 className="filter-title">size</h3>
            <ul className="filters__list">
              {sizeCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
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
          <div className="filters-womens">
            <h3 className="filter-title">brand</h3>
            <ul className="filters__list">
              {brandCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
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
          <div className="filters-womens">
            <h3 className="filter-title">price</h3>
            <ul className="filters__list">
              {priceCheckBoxWomens.map((item, index) => {
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

export default FilterWomens;
