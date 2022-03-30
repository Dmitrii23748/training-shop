/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import MensFilter from "../Components/MensFilter/MensFilter";
import FilterMens from "../Components/FilterMen/FilterMen";
import MensFiltersProducts from "../Components/MensFiltersProducts/MensFiltersProducts";
import MensCountFilters from "../Components/MensCountFilters/MensCountFilters";
import { useSelector } from "react-redux";
import Loader from "react-js-loader";
import Footer from "../Components/Footer/Footer";

function MensPage() {
  const PRODUCTS = useSelector((state) => state.products.allProducts);

  const mensMainPageProducts = PRODUCTS.men;
  const { status, error } = useSelector((state) => state.products);
  const initFilter = {
    color: [],
    size: [],
    brand: [],
    price: [],
  };
  const [productsMens, setProductsMens] = useState(mensMainPageProducts);
  const [filter, setFilter] = useState(initFilter);
  const [closeOpenFilterMen, setCloseOpenFilterMen] = useState(false);

  const handleCloseOpenFilterMen = () => {
    setCloseOpenFilterMen(!closeOpenFilterMen);
  };

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.toLowerCase()],
          });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.toLowerCase()] });
          break;
        case "BRAND":
          setFilter({
            ...filter,
            brand: [...filter.brand, item.toLowerCase()],
          });
          break;
        case "PRICE":
          const arrPriceItem = item.map((priceItem) => {
            return priceItem;
          });
          setFilter({ ...filter, price: [...filter.price, ...arrPriceItem] });
          break;
        default:
          console.log("ok");
      }
    } else {
      switch (type) {
        case "COLOR":
          const newColor = filter.color.filter(
            (color) => color.toLowerCase() !== item.toLowerCase()
          );
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter(
            (size) => size.toLowerCase() !== item.toLowerCase()
          );
          setFilter({ ...filter, size: newSize });
          break;
        case "BRAND":
          const newBrand = filter.brand.filter((brand) => {
            return brand.toLowerCase() !== item.toLowerCase();
          });
          setFilter({ ...filter, brand: newBrand });
          break;
        case "PRICE":
          const itemZero = item[0];
          const itemOne = item[1];
          const itemTwo = item[2];
          const itemThree = item[3];
          const itemFour = item[4];
          const newPrice = filter.price.filter((priceItem) => {
            return (
              priceItem !== itemZero &&
              priceItem !== itemOne &&
              priceItem !== itemTwo &&
              priceItem !== itemThree &&
              priceItem !== itemFour
            );
          });
          setFilter({ ...filter, price: newPrice });
          break;
        default:
          console.log("ok");
      }
    }
  };

  const updateProducts = useCallback(() => {
    if (mensMainPageProducts !== undefined) {
      let temp = mensMainPageProducts;
      if (filter.color.length > 0) {
        temp = temp.filter((item) => {
          const colorsMensProducts = item.images.map((item) => {
            return item.color.toLowerCase();
          });
          const check = colorsMensProducts.find((colorItem) =>
            filter.color.includes(colorItem.toLowerCase())
          );
          return check !== undefined;
        });
      }
      if (filter.size.length > 0) {
        temp = temp.filter((item) => {
          const check = item.sizes.find((size) =>
            filter.size.includes(size.toLowerCase())
          );
          return check !== undefined;
        });
      }
      if (filter.brand.length > 0) {
        temp = temp.filter((item) => {
          const brandsArrayMens = [];
          brandsArrayMens.push(item.brand);
          const brandsMensProducts = brandsArrayMens.map((item) => {
            return item.toLowerCase();
          });
          const check = brandsMensProducts.find((brandItem) => {
            return filter.brand.includes(brandItem.toLowerCase());
          });
          return check !== undefined;
        });
      }
      if (filter.price.length > 0) {
        temp = temp.filter((item) => {
          const pricesArrayMens = [];
          pricesArrayMens.push(item.price);
          const priceWomensProducts = pricesArrayMens.map((item) => {
            return item;
          });
          const check = priceWomensProducts.find((priceItem) => {
            return filter.price.includes(priceItem);
          });
          return check !== undefined;
        });
      }
      setProductsMens(temp);
    }
  }, [filter, mensMainPageProducts]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
  return (
    <div data-test-id={`clothes-/training-shop/mens`}>
      {status === "loading" && (
        <div className="parent-loader" data-test-id="loader">
          <Loader
            type="bubble-top"
            bgColor={"#121212"}
            color={"#121212"}
            size={70}
          />
        </div>
      )}

      <MensFilter
        closeOpenFilterMen={closeOpenFilterMen}
        handleCloseOpenFilterMen={handleCloseOpenFilterMen}
      />
      {error && (
        <div className="wrapper-error" data-test-id="error">
          <div className="error-message-block">
            <h2 className="error-title">Ошибка получения данных</h2>
          </div>
        </div>
      )}
      {status === "resolved" ? (
        <>
          <FilterMens
            filterSelect={filterSelect}
            closeOpenFilterMen={closeOpenFilterMen}
          />
          <MensCountFilters
            productsMens={productsMens}
            filterColor={filter.color}
            filterSize={filter.size}
            filterBrand={filter.brand}
            filterPrice={filter.price}
          />
          <MensFiltersProducts productsMens={productsMens} />
          <div className="square-block">
            <div className="container">
              <div className="square"></div>
            </div>
          </div>
        </>
      ) : null}
      <Footer/>
    </div>
  );
}

export default MensPage;
