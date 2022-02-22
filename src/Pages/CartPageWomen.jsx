import React from "react";
import CartPageComponentWomen from "../Components/CartPageComponentWomen/CartPageComponentWomen";
import { useParams } from "react-router-dom";

function CartPageWomen() {
  const { id } = useParams();
  return <CartPageComponentWomen id={id} />;
}

export default CartPageWomen;
