import React from "react";
import "./WomensFiltersProducts.css";
import CartWomens from "../Cartwomens/CartWomens";


function WomensFiltersProducts({productsWomens}) {

  return (
    <section
      className="womens-filter__prod"
      data-test-id={`products-page-/training-shop/womens`}
    >
      <div className="container">
        <div className="womens-img__block-prod">
          {productsWomens.map((cart, index) => {
            return (
              <CartWomens
                key={cart.id}
                id={index + 1}
                name={cart.name}
                price={cart.price}
                sale={cart.sale}
                discount={cart.discount}
                img={cart.images[0].url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WomensFiltersProducts;