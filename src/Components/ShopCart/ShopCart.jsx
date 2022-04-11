import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ShopCart.css";
import cartClose from "../../img/cart-component/cart-close.svg";
import CartItem from "../CartItem/CartItem";
import CartDelivery from "../CartDelivery/CartDelivery";
import CartPayment from "../CartPayment/CartPayment";
import { useSelector } from "react-redux";

function ShopCart({ showCart, handleShowCart, setShowCart }) {
  const productsMens = useSelector((state) => state.cart.itemsInCart);
  const productsWomens = useSelector((state) => state.cart.itemsInCartWomens);
  const productsMensAndWomens = [...productsMens, ...productsWomens];

  const totalPrice = productsMensAndWomens.reduce((acc, prod) => {
    return (acc += prod.price * prod.countProd);
  }, 0);

  const [itemCartMain, setItemCartMain] = useState(true);
  const [itemCartDelivery, setItemCartDelivery] = useState(false);
  const [itemCartPayment, setitemCartPayment] = useState(false);

  const [checkedDelivery, setCheckedDelivery] = useState("choose");

  const [checkedPayment, setCheckedPayment] = useState("visa");

  // валидация Delivery
  const [validDelivery, setValidDelivery] = useState(false);
  const [validateClick, setValidateClick] = useState(true);

  const [validDeliveryExpress, setvalidDeliveryExpress] = useState(false)
  const [validDeliveryStore, setvalidDeliveryStore] = useState(false);

  const [agree, setAgree] = useState(false);
  const angreeHandler = () => {
    setAgree(!agree);
  };

  // валидация Paypal
  const [validPaypal, setValidPaypal] = useState(false);
  const [validatePaypalClick, setValidatePaypalClick] = useState(true);

  // валидация Visa
  const [validVisa, setValidVisa] = useState(false);
  const [validVisaClick, setValidVisaClick] = useState(true);

  // валидация MasterCard
  const [validMasterCard, setValidMasterCard] = useState(false);
  const [validMasterCardClick, setValidMasterCardClick] = useState(true);

  return (
    <section
      className={showCart ? "cart-wrapper" : "cart-wrapper cart-wrapper-none"}
      onClick={() => setShowCart(false)}
      data-test-id="cart"
    >
      <div
        className={showCart ? "cart show-cart" : "cart"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-block-title">
          <div className="container-cart">
            <div className="cart-block-title__flex">
              <h3 className="cart-title">Shopping Cart</h3>
              <button
                className="cart__btn-close"
                onClick={() => {
                  handleShowCart();
                  setItemCartDelivery(false);
                  setitemCartPayment(false);
                  setItemCartMain(true);
                  setCheckedPayment("visa");
                  setAgree(false);
                  setValidatePaypalClick(true);
                  setValidVisaClick(true);
                  setValidMasterCardClick(true);
                }}
              >
                <img className="cart__close-btn" src={cartClose} alt="close" />
              </button>
            </div>
          </div>
        </div>

        <div className="cart-block-product">
          <div className="container-cart container-cart-block">
            {productsMensAndWomens.length > 0 ? (
              <>
                <div className="cart-block__btn">
                  <button
                    className={
                      itemCartMain
                        ? "cart-block__btn-item active-cart-btn"
                        : "cart-block__btn-item"
                    }
                  >
                    Item in Cart &nbsp;&nbsp;/
                  </button>
                  <button
                    className={
                      itemCartDelivery
                        ? "cart-block__btn-item active-cart-btn"
                        : "cart-block__btn-item"
                    }
                  >
                    Delivery Info &nbsp;&nbsp;/
                  </button>
                  <button
                    className={
                      itemCartPayment
                        ? "cart-block__btn-item active-cart-btn"
                        : "cart-block__btn-item"
                    }
                  >
                    Payment
                  </button>
                </div>
                <div className="container-cart container-cart-item-in-cart">
                  <div
                    className={
                      itemCartMain
                        ? "item-main__block"
                        : "item-main__block item-main__block-none"
                    }
                  >
                    <div className="item-main__block-height">
                      {itemCartMain &&
                        itemCartDelivery === false &&
                        itemCartPayment === false &&
                        productsMensAndWomens.map((prod, index) => {
                          return <CartItem key={index} prod={prod} />;
                        })}
                    </div>
                  </div>

                  <div
                    className={
                      itemCartDelivery &&
                      itemCartMain === false &&
                      itemCartPayment === false
                        ? "delivery-main__block"
                        : "delivery-main__block delivery-main__block-none"
                    }
                  >
                    {showCart && (
                      <CartDelivery
                        setValidDelivery={setValidDelivery}
                        validateClick={validateClick}
                        setValidateClick={setValidateClick}
                        setvalidDeliveryExpress={setvalidDeliveryExpress}
                        setvalidDeliveryStore={setvalidDeliveryStore}
                        agree={agree}
                        angreeHandler={angreeHandler}
                        checkedDelivery={checkedDelivery}
                        setCheckedDelivery={setCheckedDelivery}
                      />
                    )}
                  </div>

                  <div
                    className={
                      itemCartPayment &&
                      itemCartMain === false &&
                      itemCartDelivery === false
                        ? "payment-block"
                        : "payment-block payment-block-none"
                    }
                  >
                    {showCart && (
                      <CartPayment
                        checkedPayment={checkedPayment}
                        setCheckedPayment={setCheckedPayment}
                        validatePaypalClick={validatePaypalClick}
                        setValidatePaypalClick={setValidatePaypalClick}
                        setValidPaypal={setValidPaypal}
                        setValidVisa={setValidVisa}
                        validVisaClick={validVisaClick}
                        setValidVisaClick={setValidVisaClick}
                        setValidMasterCard={setValidMasterCard}
                        validMasterCardClick={validMasterCardClick}
                        setValidMasterCardClick={setValidMasterCardClick}
                      />
                    )}
                  </div>
                </div>
                {
                  /* показать кнопки у payment  */
                  itemCartPayment &&
                  itemCartMain === false &&
                  itemCartDelivery === false ? (
                    <div className="cart-footer__btn">
                      <div className="cart-footer__price">
                        <div className="cart-footer__price-title">Total</div>
                        <span className="cart-footer__price-number">
                          $ {Number(totalPrice).toFixed(2)}
                        </span>
                      </div>
                      <div className="cart-footer__btn-further">
                        {checkedPayment === "paypal" && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              if (!validPaypal) {
                                setValidatePaypalClick(false);
                                console.log("валидации paypal нет ");
                              } else {
                                console.log("валидация paypal есть");
                              }
                            }}
                          >
                            Check Out
                          </button>
                        )}
                        {checkedPayment === "visa" && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              if (!validVisa) {
                                setValidVisaClick(false);
                                console.log("валидации visa нет");
                              } else {
                                console.log("валидация visa есть");
                              }
                            }}
                          >
                            Check Out
                          </button>
                        )}
                        {checkedPayment === "mastercart" && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              if (!validMasterCard) {
                                setValidMasterCardClick(false);
                                console.log("валидации mastercard нет");
                              } else {
                                console.log("валидации mastercard есть");
                              }
                            }}
                          >
                            Check Out
                          </button>
                        )}

                        {checkedPayment === "cash" && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              // if (!validPayment) {
                              //   setValidatePaymentClick(false);
                              //   console.log('cash');
                              // }
                            }}
                          >
                            Ready
                          </button>
                        )}
                      </div>
                      <div className="cart-footer__btn-view">
                        <button
                          className="btn-view"
                          onClick={() => {
                            setItemCartDelivery(true);
                            setitemCartPayment(false);
                          }}
                        >
                          view cart
                        </button>
                      </div>
                    </div>
                  ) : null
                }

                {
                  /* показать кнопки у delivery  */
                  itemCartDelivery &&
                  itemCartMain === false &&
                  itemCartPayment === false ? (
                    <div className="cart-footer__btn">
                      <div className="cart-footer__price">
                        <div className="cart-footer__price-title">Total</div>
                        <span className="cart-footer__price-number">
                          $ {Number(totalPrice).toFixed(2)}
                        </span>
                      </div>
                      <div className="cart-footer__btn-further">
                        {checkedDelivery === "choose" && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              if (validDelivery) {
                                setitemCartPayment(true);
                                setItemCartDelivery(false);
                              } else {
                                setAgree(false);
                                setValidateClick(false);
                              }
                            }}
                          >
                            further
                          </button>
                        )}
                        {checkedDelivery === "express" && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              if (validDeliveryExpress) {
                                setitemCartPayment(true);
                                setItemCartDelivery(false);
                              } else {
                                setAgree(false);
                                setValidateClick(false);
                              }
                            }}
                          >
                            further
                          </button>
                        )}
                         {checkedDelivery === "store" && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              if (validDeliveryStore) {
                                setitemCartPayment(true);
                                setItemCartDelivery(false);
                              } else {
                                setAgree(false);
                                setValidateClick(false);
                              }
                            }}
                          >
                            further
                          </button>
                        )}
                      </div>
                      <div className="cart-footer__btn-view">
                        <button
                          className="btn-view"
                          onClick={() => {
                            setItemCartMain(true);
                            setItemCartDelivery(false);
                          }}
                        >
                          view cart
                        </button>
                      </div>
                    </div>
                  ) : null
                }

                {
                  /* показать кнопки у Item */
                  itemCartMain ? (
                    <div className="cart-footer__btn">
                      <div className="cart-footer__price">
                        <div className="cart-footer__price-title">Total</div>
                        <span className="cart-footer__price-number">
                          $ {Number(totalPrice).toFixed(2)}
                        </span>
                      </div>
                      <div className="cart-footer__btn-further">
                        <button
                          className="btn-further"
                          onClick={() => {
                            setItemCartDelivery(true);
                            setItemCartMain(false);
                          }}
                        >
                          further
                        </button>
                      </div>
                      <div className="cart-footer__btn-view">
                        <button
                          className="btn-view"
                          onClick={() => setShowCart(false)}
                        >
                          view cart
                        </button>
                      </div>
                    </div>
                  ) : null
                }
              </>
            ) : (
              <>
                <div className="no-products__block">
                  <div className="not-cart-products__title-block">
                    <h2 className="not-cart-products__title">
                      Sorry, your cart is empty
                    </h2>
                  </div>
                  <div className="cart-footer__btn-further">
                    <button
                      className="btn-further"
                      onClick={() => setShowCart(false)}
                    >
                      back to shopping
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCart;

ShopCart.propTypes = {
  handleShowCart: PropTypes.func.isRequired,
  setShowCart: PropTypes.func.isRequired,
};
