import React from "react";
import "./Navigation.css";
import phone from "../../img/icon-nav/phone.svg";
import local from "../../img/icon-nav/local.svg";
import clock from "../../img/icon-nav/clock.svg";
import facebook from "../../img/icon-nav/facebook.svg";
import twitter from "../../img/icon-nav/twitter.svg";
import instagram from "../../img/icon-nav/instagram.svg";
import pintrest from "../../img/icon-nav/pinterest.svg";
import search from "../../img/icon-nav/search.svg";
import globe from "../../img/icon-nav/globe.svg";
import user from "../../img/icon-nav/user.svg";
import shop from "../../img/icon-nav/shop.svg";
import { NavLink } from "react-router-dom";

function Navigation(){
  return (
    <>
      <section className="navigation">
        <div className="nav-up-block">
          <div className="container">
            <div className="nav-up">
              <div className="nav-up__place">
                <ul className="nav-up__place-block">
                  <li className="nav-up__item">
                    <img className="nav-up__img" src={phone} alt="phone" />
                    <p className="number-phone-clock">+375 29 100 20 30</p>
                  </li>
                  <li className="nav-up__item nav-up__item_local">
                    <img className="nav-up__img" src={local} alt="local" />
                    <p className="local-text">Belarus, Gomel, Lange 17</p>
                  </li>
                  <li className="nav-up__item">
                    <img className="nav-up__img" src={clock} alt="clock" />
                    <p className="number-phone-clock">All week 24/7</p>
                  </li>
                </ul>
              </div>
              <div className="nav-up__links">
                <ul className="nav-up__links-block">
                  <li className="nav-up__item-link">
                    <a href="https://www.facebook.com/">
                      <img  src={facebook} alt="facebook" />
                    </a>
                  </li>

                  <li className="nav-up__item-link">
                    <a href="https://twitter.com/i/flow/login">
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>

                  <li className="nav-up__item-link">
                    <a href="https://www.instagram.com/">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </li>

                  <li className="nav-up__item-link">
                    <a href="https://www.pinterest.com/">
                      <img src={pintrest} alt="pintrest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-down-block">
          <div className="container">
            <div className="nav-down">
              <div className="nav-down__logo-links">
                <NavLink className="nav-down__title-link" to="/training-shop" >
                  <h1 className="nav-down__logo">CleverShop</h1>
                </NavLink>
                <ul className="nav-down__list-links">
                  <li className="nav-down__item">
                    <a className="nav-down__link" href="#clev">
                      About Us
                    </a>
                  </li>
                  <li className="nav-down__item">
                    <NavLink className="nav-down__link" to="/training-shop/womens" >
                      Women
                    </NavLink>
                  </li>
                  <li className="nav-down__item">
                    <NavLink className="nav-down__link" to="/training-shop/mens">
                      Men
                    </NavLink>
                  </li>
                  <li className="nav-down__item">
                    <a className="nav-down__link" href="#clev">
                      Beauty
                    </a>
                  </li>
                  <li className="nav-down__item">
                    <a className="nav-down__link" href="#clev">
                      Accessories
                    </a>
                  </li>
                  <li className="nav-down__item">
                    <a className="nav-down__link" href="#clev">
                      Blog
                    </a>
                  </li>
                  <li className="nav-down__item">
                    <a className="nav-down__link" href="#clev">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-down__icons">
                <ul className="nav-down__icons-list">
                  <li className="nav-down__icons-item">
                    <img src={search} alt="search" />
                  </li>
                  <li className="nav-down__icons-item">
                    <img src={globe} alt="globe" />
                  </li>
                  <li className="nav-down__icons-item">
                    <img src={user} alt="user" />
                  </li>
                  <li className="nav-down__icons-item nav-down__icons_shop">
                    <img src={shop} alt="shop" />
                    <span className="icons-shop__span">2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigation;
