import React from "react";
import Navigation from '../Components/Navigation/Navigation';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Free from "../Components/Free/Free";
import Womens from "../Components/Womens/Womens";
import Mens from "../Components/Mens/Mens";
import Collection from "../Components/Collection/Collection";
import Blog from "../Components/Blog/Blog";
import Subscribe from "../Components/Subscribe/Subscribe";




function MainPage(){
    return (
        <>
            <Navigation/>
            <Header/>
            <Free/>
            <Womens/>
            <Mens/>
            <Collection/>
            <Subscribe/>
            <Blog/>
            <Footer/>
        </>
    )
}

export default MainPage