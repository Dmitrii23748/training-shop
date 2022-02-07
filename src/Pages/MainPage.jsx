import React from "react";
import Navigation from '../Components/Navigation/Navigation';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Free from "../Components/Free/Free";
import Womens from "../Components/Womens/Womens";
import Mens from "../Components/Mens/Mens";




function MainPage(){
    return (
        <>
            <Navigation/>
            <Header/>
            <Free/>
            <Womens/>
            <Mens/>
            <Footer/>
        </>
    )
}

export default MainPage