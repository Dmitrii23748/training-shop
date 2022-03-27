import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CartPageComponentMen from "../Components/CartPageComponentMen/CartPageComponentMen";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/products/productsSlice";

import Loader from "react-js-loader";

function CartPageMen({ comments, setComments, openCloseComments }) {

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const { routeId } = useParams();
  return (
    <>
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
    </>
  );
}

export default CartPageMen;


CartPageMen.propTypes = {
  comments: PropTypes.bool.isRequired,
  setComments: PropTypes.func.isRequired,
  openCloseComments: PropTypes.func.isRequired
};

