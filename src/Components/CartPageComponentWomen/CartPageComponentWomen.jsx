import React from "react";
import "./CartPageComponentWomen.css";
import { cartWomens } from "../../data/data";
import headerArrow from "../../img/filter-icons/arrow-link.svg";
import share from "../../img/filter-icons/share.svg";
import Stars from "../Stars/Stars";
import leftBtn from "../../img/banner/arrow-left.png";
import rightBtn from "../../img/banner/arrow-right.png";
import hanger from "../../img/cart/hanger.svg";
import heart from "../../img/cart/heart.svg";
import scales from "../../img/cart/scales.svg";
import car from "../../img/cart/car-cart.svg";
import refresh from "../../img/cart/refresh-cart.svg";
import mail from "../../img/cart/mail-cart.svg";
import starbigyellow from "../../img/stars/big-star.svg";
import starbiggrey from "../../img/stars/big-grey.svg";
import write from "../../img/cart/write.svg";

function CartPageComponentWomen({ id }) {
  return (
    <section className="cart-page">
      <div className="cart-page__navigation">
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
        </div>
      </div>

      <div className="cart-page__picture-main-wrap">
        <div className="container">
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
                <p className="cart-page__picture-color_text">color:</p>
                <span className="cart-page__color-span">blue</span>
              </div>
              <div className="cart-page__picture-mini-img">
                <img
                  className="mini-img active-mini"
                  src={require("../../img/mini/mini-2.jpg")}
                  alt="mini-img"
                />
                <img
                  className="mini-img"
                  src={require("../../img/mini/mini-3.jpg")}
                  alt="mini-img"
                />
                <img
                  className="mini-img"
                  src={require("../../img/mini/mini-2.jpg")}
                  alt="mini-img"
                />
                <img
                  className="mini-img"
                  src={require("../../img/mini/mini-4.jpg")}
                  alt="mini-img"
                />
              </div>
              <div className="cart-page__picture-size">
                <p className="cart-page__picture-size_text">size:</p>
                <span className="cart-page__size-span">s</span>
              </div>
              <ul className="cart-page__picture-size-block">
                <li className="cart-page__picture-size-item">
                  <p>xs</p>
                </li>
                <li className="cart-page__picture-size-item active-size">
                  <p>s</p>
                </li>
                <li className="cart-page__picture-size-item">
                  <p>m</p>
                </li>
                <li className="cart-page__picture-size-item">
                  <p>l</p>
                </li>
              </ul>
              <div className="cart-page__hanger">
                <img className="hanger-img" src={hanger} alt="hanger" />
                <p className="cart-page__hanger-text">Size guide</p>
              </div>
              <div className="cart-page__price">
                <h3 className="cart-page__price-item cart-page__price-number">
                  $ 379.99
                </h3>
                <button className="cart-page__price-item cart-page__price-btn">
                  Add to card
                </button>
                <button className="cart-page__price-item cart-page__price-heart">
                  <img
                    className="cart-page__price-heart-img"
                    src={heart}
                    alt="heart"
                  />
                </button>
                <button className="cart-page__price-item cart-page__price-scales">
                  <img
                    className="cart-page__price-scales-img"
                    src={scales}
                    alt="scales"
                  />
                </button>
              </div>
              <ul className="cart-page__info">
                <li className="cart-page__info-item cart-page__info-car">
                  <img className="cart-page__info-img" src={car} alt="car" />
                  <p className="cart-page__info-text">
                    Shipping &amp; Delivery
                  </p>
                </li>
                <li className="cart-page__info-item cart-page__info-refresh">
                  <img
                    className="cart-page__info-img"
                    src={refresh}
                    alt="refresh"
                  />
                  <p className="cart-page__info-text">
                    Returns &amp; Exchanges
                  </p>
                </li>
                <li className="cart-page__info-item">
                  <img className="cart-page__info-img" src={mail} alt="mail" />
                  <p className="cart-page__info-text">Ask a question</p>
                </li>
              </ul>
              <div className="cart-page__creditcards">
                <div className="cart-page__creditcards-item">
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-stripe.png")}
                    alt="stripe"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-aes.png")}
                    alt="aes"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-paypal.png")}
                    alt="paypal"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-visa.png")}
                    alt="visa"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-mastercard.png")}
                    alt="mastercard"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-discover.png")}
                    alt="discover"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-american.png")}
                    alt="american"
                  />
                </div>
                <p className="cart-page__creditcards-text">
                  guaranteed safe checkout
                </p>
              </div>
              <div className="cart-page__description">
                <p className="cart-page__description-text">description</p>
              </div>
              <div className="cart-page__information">
                <h3 className="cart-page__information-title">
                  additional information
                </h3>
                <div className="cart-page__information-item">
                  <span className="cart-page__information-title_span">
                    color:
                  </span>
                  <span className="cart-page__information-text_span">
                    blue,
                  </span>
                  <span className="cart-page__information-text_span">
                    white,
                  </span>
                  <span className="cart-page__information-text_span">
                    black,
                  </span>
                  <span className="cart-page__information-text_span">grey</span>
                </div>
                <div className="cart-page__information-item">
                  <span className="cart-page__information-title_span">
                    size:
                  </span>
                  <span className="cart-page__information-text_span cart-page__span-text">
                    xs,
                  </span>
                  <span className="cart-page__information-text_span cart-page__span-text">
                    s,
                  </span>
                  <span className="cart-page__information-text_span cart-page__span-text">
                    m,
                  </span>
                  <span className="cart-page__information-text_span cart-page__span-text">
                    l
                  </span>
                </div>
                <div className="cart-page__information-item">
                  <span className="cart-page__information-title_span cart-page__title_percent">
                    material:
                  </span>
                  <span className="cart-page__information-text_span">
                    100% Polyester
                  </span>
                </div>
              </div>
              <div className="cart-page__reviews">
                <h3 className="cart-page__reviews-title">reviews</h3>
                <div className="cart-page__reviews-stars-block">
                  <div className="cart-page__reviews-stars">
                    <div className="cart-page__stars-img">
                      <img
                        className="cart-page__reviews-img"
                        src={starbigyellow}
                        alt="star-big-yellow"
                      />
                      <img
                        className="cart-page__reviews-img"
                        src={starbigyellow}
                        alt="star-big-yellow"
                      />
                      <img
                        className="cart-page__reviews-img"
                        src={starbigyellow}
                        alt="star-big-yellow"
                      />
                      <img
                        className="cart-page__reviews-img"
                        src={starbigyellow}
                        alt="star-big-yellow"
                      />
                      <img
                        className="cart-page__reviews-img"
                        src={starbiggrey}
                        alt="star-big-grey"
                      />
                    </div>
                    <p className="cart-page__stars-text">2 Reviews</p>
                  </div>
                  <div className="cart-page__reviews-write-block">
                    <img className="write-img" src={write} alt="write" />
                    <p className="write-text">Write a review</p>
                  </div>
                </div>
                <div className="cart-page__reviews-author">
                  <div className="cart-page__author">
                    <div className="cart-page__author-block-star">
                      <p className="cart-page__author-name">Oleh Chabanov</p>
                      <Stars />
                    </div>
                  </div>
                  <p className="cart-page__author-text">
                    On the other hand, we denounce with righteous indignation
                    and like men who are so beguiled and demoralized by the
                    charms of pleasure of the moment
                  </p>
                </div>
                <div className="cart-page__reviews-author">
                  <div className="cart-page__author">
                    <div className="cart-page__author-block-star">
                      <p className="cart-page__author-name">ShAmAn design</p>
                      <Stars />
                    </div>
                  </div>
                  <p className="cart-page__author-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-page__product">
        <div className="container">
          <div className="cart-page__product-block">
            <h3 className="cart-page__product-title">related products</h3>
            <div className="cart-page__product-img-btns">
              <button className="btn-product__small-left">
                <img
                  className="btn-product__small-left-img"
                  src={leftBtn}
                  alt="leftBtn"
                />
              </button>
              <button className="btn-product__small-right">
                <img
                  className="btn-product__small-right-img"
                  src={rightBtn}
                  alt="rightBtn"
                />
              </button>
            </div>
          </div>

          <div className="womens-cart">
            <div className="womens-cart">
              <a href="#womens" className="men-cart__link">
                <img
                  className="womens-cart__img"
                  src={require(`../../img/photo-womens/cart-img-womens-1.jpg`)}
                  alt="womens-img"
                />
                <p className="womens-cart__text"></p>
                <div className="womens-cart__stars">
                  <div className="womens-cart__price-sale">
                    <span className="womens-cart__stars-text">$ 30.00</span>
                  </div>
                  <Stars />
                </div>
              </a>
            </div>
            <div className="womens-cart">
              <a href="#womens" className="men-cart__link">
                <img
                  className="womens-cart__img"
                  src={require(`../../img/photo-womens/cart-img-womens-2.jpg`)}
                  alt="womens-img"
                />
                <p className="womens-cart__text"></p>
                <div className="womens-cart__stars">
                  <div className="womens-cart__price-sale">
                    <span className="womens-cart__stars-text">$ 30.00</span>
                  </div>
                  <Stars />
                </div>
              </a>
            </div>
            <div className="womens-cart">
              <a href="#womens" className="men-cart__link">
                <img
                  className="womens-cart__img"
                  src={require(`../../img/photo-womens/cart-img-womens-3.jpg`)}
                  alt="womens-img"
                />
                <p className="womens-cart__text"></p>
                <div className="womens-cart__stars">
                  <div className="womens-cart__price-sale">
                    <span className="womens-cart__stars-text">$ 30.00</span>
                  </div>
                  <Stars />
                </div>
              </a>
            </div>
            <div className="womens-cart">
              <a href="#womens" className="men-cart__link">
                <img
                  className="womens-cart__img"
                  src={require(`../../img/photo-womens/cart-img-womens-4.jpg`)}
                  alt="womens-img"
                />
                <p className="womens-cart__text"></p>
                <div className="womens-cart__stars">
                  <div className="womens-cart__price-sale">
                    <span className="womens-cart__stars-text">$ 30.00</span>
                  </div>
                  <Stars />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPageComponentWomen;
