import React from "react";
import CartPageComponentWomen from "../Components/CartPageComponentWomen/CartPageComponentWomen";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "react-js-loader";

function CartPageWomen() {
  
  const { status, error } = useSelector((state) => state.products);

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
        <CartPageComponentWomen
          routeId={routeId}/>
      ) : null}
    </>
  );
}

export default CartPageWomen;
