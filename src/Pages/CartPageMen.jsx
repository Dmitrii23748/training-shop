import React from "react";
import PropTypes from "prop-types";
import CartPageComponentMen from "../Components/CartPageComponentMen/CartPageComponentMen";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";


import Footer from "../Components/Footer/Footer";

function CartPageMen({ comments, setComments, openCloseComments }) {

  const { status, error } = useSelector((state) => state.products);


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
        <CartPageComponentMen
          routeId={routeId}
          comments={comments}
          openCloseComments={openCloseComments}
          setComments={setComments}
        />
      ) : null}
      <Footer/>
    </>
  );
}

export default CartPageMen;


CartPageMen.propTypes = {
  comments: PropTypes.bool.isRequired,
  setComments: PropTypes.func.isRequired,
  openCloseComments: PropTypes.func.isRequired
};

