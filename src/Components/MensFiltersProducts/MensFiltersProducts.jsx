import React from "react";
import "./MensFiltersProducts.css";
import CartMens from '../Cartmens/CartMens'


function MensFiltersProducts({productsMens}) {

  return (
    <section
      className="mens-filter__prod"
      data-test-id={`products-page-men`}
    >
      <div className="container">
        <div className="mens-img__block-prod">
          {productsMens.map((cart, index) => {
            return (
              <CartMens
                key={cart.id}
                id={index + 1}
                routeId={cart.id}
                name={cart.name}
                price={cart.price}
                sale={cart.sale}
                discount={cart.discount}
                rating={cart.rating}
                img={cart.images[0].url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MensFiltersProducts;
