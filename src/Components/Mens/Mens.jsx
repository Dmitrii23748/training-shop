import React from "react";
import "./Mens.css";
import CartMens from "../Cartmens/CartMens";



function Mens({categoryMensMain}) {
  
  return (
    <>
      <section className="mens" data-test-id={`products-page-/training-shop/mens`}>
        <div className="container">
          <div className="mens-img__block">
            {
               categoryMensMain.map((cart, index) => {
                   return (
                    <CartMens
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
    </>
  );
}

export default Mens;
