import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import Womens from "../Components/Womens/Womens";
import WomensFilter from "../Components/WomensFilter/WomensFilter";



function WomensPage() {
    return (
        <div data-test-id={`clothes-/training-shop/womens`}>
            <Navigation/>
            <WomensFilter/>
            <Womens/>
            <div className="square-block">
                <div className="container">
                    <div className="square"></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default WomensPage;