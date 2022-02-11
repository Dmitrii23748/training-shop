import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import MensFilter from '../Components/MensFilter/MensFilter';
import Mens from '../Components/Mens/Mens';




function MensPage() {
    return (
        <div data-test-id={`clothes-/training-shop/mens`}>
            <Navigation/>
            <MensFilter/>
            <Mens/>
            <div className="square-block">
                <div className="container">
                    <div className="square"></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default MensPage;