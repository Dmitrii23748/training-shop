import PropTypes from "prop-types";
import staryellow from "../../img/stars/yellow-star.svg";
import stargrey from "../../img/stars/grey-star.svg";
import "./StarsCart.css";

function StarsCart({ cartRating }) {
  let starLength = 5;
  return (
    <>
      <div className="womens-cart__stars-block">
        {cartRating <= 5
          ? [...Array(cartRating)].map((star, i) => {
              return (
                <img
                  key={i}
                  className="womens-cart__star"
                  src={staryellow}
                  alt="staryellow"
                />
              );
            })
          : null}
        {cartRating <= 5
          ? [...Array(starLength - cartRating)].map((star, i) => {
              return (
                <img
                  key={i}
                  className="womens-cart__star"
                  src={stargrey}
                  alt="stargrey"
                />
              );
            })
          : null}
        {cartRating > 5
          ? [...Array(5)].map((star, i) => {
              return (
                <img
                  key={i}
                  className="womens-cart__star"
                  src={stargrey}
                  alt="stargrey"
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default StarsCart;

StarsCart.propTypes = {
  cartRating: PropTypes.number.isRequired,
};
