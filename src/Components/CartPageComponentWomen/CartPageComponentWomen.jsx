import React from "react";
import "./CartPageComponentWomen.css";
import { cartWomens } from "../../data/data";
import headerArrow from "../../img/filter-icons/arrow-link.svg";
import share from "../../img/filter-icons/share.svg";
import Stars from "../Stars/Stars";
import leftBtn from "../../img/banner/arrow-left.png";
import rightBtn from "../../img/banner/arrow-right.png";

function CartPageComponentWomen({ id }) {
  return (
    <section className="cart-page">
      <div className="container">
        <div className="womens-cart-h__title">
          <div className="womens-cart-h__title-link">
            <div className="womens-cart-h__title-item">
              <p className="womens-cart-h__title-text womens-cart-h__home-link">
                Home
              </p>
              <img
                className="womens-cart-h__title-arrow"
                src={headerArrow}
                alt="headerArrow"
              />
              <p className="womens-cart-h__title-text womens-cart-h__women-link">
                Women
              </p>
              <img
                className="womens-cart-h__title-arrow"
                src={headerArrow}
                alt="headerArrow"
              />
              <p className="womens-cart-h__title-text womens-cart-h__title-link_item">
                {cartWomens[id - 1].text}
              </p>
            </div>
            <div className="womens-cart-h__title-item">
              <a href="#share" className="womens-cart-h__title-links">
                <img src={share} alt="share" />
              </a>
              <p className="womens-cart-h__title-text womens-h__share-link">
                Share
              </p>
            </div>
          </div>
          <div className="womens-cart-h__title-block">
            <h3 className="womens-cart-h__title-women">
              {cartWomens[id - 1].text}
            </h3>
          </div>
          <div className="womens-cart-h__star-code">
            <div className="womens-cart-h__star">
              <Stars />
              <p className="womens-cart-h__star-text">2 Reviews</p>
            </div>
            <div className="womens-cart-h__code">
              <p className="womens-cart-h__code-text">SKU:</p>
              <span className="womens-cart-h__code-text_span">777</span>
              <p className="womens-cart-h__code-text womens-cart-h__code-text_avail">
                Availability:
              </p>
              <span className="womens-cart-h__code-text_span">In Stock</span>
            </div>
          </div>
        </div>

        <div className="cart-page__picture-main">

          <div className="cart-page__picture-img">
            <div className="cart-page__picture-img-block">
              <div className="cart-page__picture-img-small">
                <div className="cart-page__picture-img-btns">
                  <button className="btn__small-left">
                    <img
                      className="btn__small-left-img"
                      src={leftBtn}
                      alt="leftBtn"
                    />
                  </button>
                  <button className="btn__small-right">
                    <img
                      className="btn__small-right-img"
                      src={rightBtn}
                      alt="rightBtn"
                    />
                  </button>
                </div>
                <img
                  className="cart__img-small"
                  src={require("../../img/cart/small-1.jpg")}
                  alt="small-1"
                />
                <img
                  className="cart__img-small"
                  src={require("../../img/cart/small-2.jpg")}
                  alt="small-2"
                />
                <img
                  className="cart__img-small"
                  src={require("../../img/cart/small-3.jpg")}
                  alt="small-3"
                />
                <img
                  className="cart__img-small"
                  src={require("../../img/cart/small-4.jpg")}
                  alt="small-4"
                />
              </div>

              <div className="cart-page__picture-img-big">
                <img
                  className="cart__img-big"
                  src={require(`../../img/womens/womens-${id}.jpg`)}
                  alt="big"
                />

                <button className="btn__big-left">
                  <img
                    className="btn__small-big-img"
                    src={leftBtn}
                    alt="leftBtn"
                  />
                </button>
                <button className="btn__big-right">
                  <img
                    className="btn__big-right-img"
                    src={rightBtn}
                    alt="rightBtn"
                  />
                </button>

              </div>
            </div>
          </div>

          <div className="cart-page__picture-text">
            <div className="cart-page__picture-color">
              <p className="cart-page__picture-color_text">color:</p><span className="cart-page__color-span">blue</span>
            </div>
            <div className="cart-page__picture-mini-img">
              <img className="mini-img"  src={require('../../img/mini/mini-3.jpg')} alt="mini-img"/>
              <img className="mini-img"  src={require('../../img/mini/mini-2.jpg')} alt="mini-img"/>
              <img className="mini-img"  src={require('../../img/mini/mini-3.jpg')} alt="mini-img"/>
              <img className="mini-img"  src={require('../../img/mini/mini-4.jpg')} alt="mini-img"/>
            </div>
            <div className="cart-page__picture-size">
              <p className="cart-page__picture-size_text">size:</p><span className="cart-page__size-span">s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPageComponentWomen;
