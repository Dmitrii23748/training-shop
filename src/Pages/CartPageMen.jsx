import React from "react";
import CartPageComponentMen from "../Components/CartPageComponentMen/CartPageComponentMen";
import { useParams } from "react-router-dom";

function CartPageWomen() {
  const { id } = useParams();
  return <CartPageComponentMen id={id} />;
}

export default CartPageWomen;
