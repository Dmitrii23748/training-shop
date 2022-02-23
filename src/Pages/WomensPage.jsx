/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import Filter from "../Components/Filter/Filter";
import Womens from "../Components/Womens/Womens";
import WomensFilter from "../Components/WomensFilter/WomensFilter";
import { PRODUCTS } from "../data/products";




const womensArrayProducts = PRODUCTS.women.slice(0, 8);

function WomensPage() {

  const initFilter = {
    color: [],
    size: [],
  };
  const [productsWomens, setProductsWomens] = useState(womensArrayProducts);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item] });
          break;
        default:
          console.log("ok");
      }
    } else {
      switch (type) {
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item);
          setFilter({ ...filter, size: newSize });
          break;
        default:
          console.log("ok");
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = womensArrayProducts;
    if (filter.color.length > 0) {
      temp = temp.filter((item) => {
        const colorsWomensProducts = item.images.map((item) => {
          return item.color
        })
        const check = colorsWomensProducts.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((item) => {
        const check = item.sizes.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProductsWomens(temp);
  }, [filter, womensArrayProducts]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <div data-test-id={`clothes-/training-shop/womens`}>
      <WomensFilter />
      <Filter filterSelect={filterSelect} />
      <Womens productsWomens={productsWomens} />
      <div className="square-block">
        <div className="container">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default WomensPage;
