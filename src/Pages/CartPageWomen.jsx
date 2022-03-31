import React from "react";
import PropTypes from "prop-types";
import CartPageComponentWomen from "../Components/CartPageComponentWomen/CartPageComponentWomen";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";


import Footer from "../Components/Footer/Footer";

function CartPageWomen({ comments, setComments, openCloseComments}) {

  const { status, error } = useSelector((state) => state.products);

  const PRODUCTS = useSelector((state) => state.products.allProducts);
  const womensMainPageProducts = PRODUCTS.women;

  const { routeId } = useParams();

  return (
    <>
      {error && (
        <div className="wrapper-error" data-test-id="error">
          <div className="error-message-block">
            <h2 className="error-title">Ошибка получения данных</h2>
          </div>
        </div>
      )}
      {status === "resolved" ? (
        <CartPageComponentWomen
          routeId={routeId}
          comments={comments}
          openCloseComments={openCloseComments}
          setComments={setComments}
          womensMainPageProducts={womensMainPageProducts}
        />
        ) : null}
      <Footer/>
    </>
  );
}

export default CartPageWomen;

CartPageWomen.propTypes = {
  comments: PropTypes.bool.isRequired,
  setComments: PropTypes.func.isRequired,
  openCloseComments: PropTypes.func.isRequired
};
