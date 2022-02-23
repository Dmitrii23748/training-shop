import React from "react";
import "./Filter.css";
import { category } from "../../data/categoryFilter";
import CheckBox from "../CheckBox/CheckBox";

function Filter({filterSelect}) {
 
  return (
    <section className="filters-category">
      <div className="container">
        <div className="filters-block">
          <div className="filters">
            <h3 className="filter-title">color</h3>
            <ul className="filters__list">
              {category.color.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
                    <CheckBox label={item}
                    onChange={(input) => filterSelect('COLOR', input.checked, item)}
                     />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters">
            <h3 className="filter-title">size</h3>
            <ul className="filters__list">
              {category.size.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
                    <CheckBox label={item}
                     onChange={(input) => filterSelect('SIZE', input.checked, item)}
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

export default Filter;
