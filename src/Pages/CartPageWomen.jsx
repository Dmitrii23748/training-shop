import React from "react";

import Navigation from '../Components/Navigation/Navigation';
import Footer from "../Components/Footer/Footer";
import CartPageComponentWomen from "../Components/CartPageComponentWomen/CartPageComponentWomen";
import { useParams } from "react-router-dom";



function CartPageWomen() {
    const {id} = useParams();
    return (
        <>
            <Navigation/>
            <CartPageComponentWomen id={id}/>
            <Footer/>
        </>
    )
}

export default CartPageWomen;