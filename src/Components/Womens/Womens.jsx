import React from "react";
import "./Womens.css";
import CartWomens from "../Cartwomens/CartWomens";



function Womens({productsWomens}) {
  return (
      <section className="womens" data-test-id={`products-page-/training-shop/womens`}>
        <div className="container">
          <div className="womens-img__block">
            {
                productsWomens.map((cart, index) => {
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
                   )
                })
            }
          </div>
        </div>
      </section>
  );
}

export default Womens;
