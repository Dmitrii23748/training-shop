import React from "react";
import './Navigation.css';
import phone from "../../img/icon-nav/phone.svg";
import local from "../../img/icon-nav/local.svg";
import clock from "../../img/icon-nav/clock.svg";
import facebook from "../../img/icon-nav/facebook.svg";
import twitter from "../../img/icon-nav/twitter.svg";
import instagram from "../../img/icon-nav/instagram.svg";
import pintrest from "../../img/icon-nav/pinterest.svg";
// ССЫЛКИ НА СОЦ СЕТИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const Navigation = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav-up">
            <div className="nav-up__place">
              <ul className="nav-up__place-block">
                <li className="nav-up__item">
                  <img className="nav-up__img" src={phone} alt="phone" />
                  <p className="number-phone-clock">+375 29 100 20 30</p>
                </li>
                <li className="nav-up__item">
                  <img className="nav-up__img"  src={local} alt="local" />
                  <p className="local-text">Belarus, Gomel, Lange 17</p>
                </li>
                <li className="nav-up__item">
                  <img className="nav-up__img"  src={clock} alt="clock" />
                  <p className="number-phone-clock">All week 24/7</p>
                </li>
              </ul>
            </div>
            <div className="nav-up__links">
                <ul className="nav-up__links-block">
                    <li className="nav-up__item-link">
                        <img src={facebook} alt="facebook" />
                    </li>
                    <li className="nav-up__item-link">
                        <img src={twitter} alt="twitter" />
                    </li>
                    <li className="nav-up__item-link">
                        <img src={instagram} alt="instagram" />
                    </li>
                    <li className="nav-up__item-link">
                        <img src={pintrest} alt="pintrest" />
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
