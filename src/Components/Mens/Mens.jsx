import PropTypes from "prop-types";
import CartMens from "../Cartmens/CartMens";
import "./Mens.css";

function Mens({ categoryMensMain }) {
  return (
    <>
      <section className="mens">
        <div className="container">
          <div className="mens-img__block" data-test-id={`clothes-men`}>
            {categoryMensMain &&
              categoryMensMain.map((cart, index) => {
                return (
                  <CartMens
                    key={cart.id}
                    routeId={cart.id}
                    id={index + 1}
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
    </>
  );
}

export default Mens;

Mens.propTypes = {
  categoryMensMain: PropTypes.array,
};
