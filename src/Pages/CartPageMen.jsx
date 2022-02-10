import React from "react";

import Navigation from '../Components/Navigation/Navigation';
import Footer from "../Components/Footer/Footer";
import CartPageComponentMen from "../Components/CartPageComponentMen/CartPageComponentMen";
import { useParams } from "react-router-dom";



function CartPageWomen() {
    const {id} = useParams();
    return (
        <>
            <Navigation/>
            <CartPageComponentMen id={id}/>
            <Footer/>
        </>
    )
}

export default CartPageWomen;