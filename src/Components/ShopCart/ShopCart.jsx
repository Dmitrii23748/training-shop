/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ShopCart.css";
import cartClose from "../../img/cart-component/cart-close.svg";
import CartItem from "../CartItem/CartItem";
import CartDelivery from "../CartDelivery/CartDelivery";
import CartPayment from "../CartPayment/CartPayment";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCartWomens,
  deleteItemFromCart,
} from "../../redux/cart/reducer";
import {
  setOrderProducts,
  setOrderTotalPrice,
  setOrderDeliveryMethod,
  setOrderPaymentMethod,
  setOrderPhone,
  setOrderEmail,
  setOrderCountry,
  setOrderCashEmail,
  setOrderCity,
  setOrderStreet,
  setOrderHouse,
  setOrderApartament,
  setOrderPostcode,
  setOrderStoreadress,
  setOrderCard,
  setOrderCardDate,
  setOrderCardCvv,
  setOrderMessage,
} from "../../redux/order/orderCartSlice";
import { postOrderProducts } from "../../redux/order/orderCartSlice";

function ShopCart({ showCart, handleShowCart, setShowCart}) {
  const dispatch = useDispatch();

  const productsMens = useSelector((state) => state.cart.itemsInCart);
  const productsWomens = useSelector((state) => state.cart.itemsInCartWomens);
  const productsMensAndWomens = [...productsMens, ...productsWomens];

  const allProductsOrderComponents = useSelector(
    (state) => state.order.allOrderProducts
  );

  // ответ от сервера по заказу
  const message = useSelector((state) => state.order.messageOrder);

  const { statusOrder } = useSelector((state) => state.order);

  // заказ
  const postProductsRedux = productsMensAndWomens.map((prod) => {
    return {
      name: prod.name,
      size: prod.size,
      color: prod.color,
      quantity: prod.countProd,
    };
  });

  const cleanCart = () => {
    productsMensAndWomens.forEach((prod) => {
      dispatch(deleteItemFromCart(prod.id));
      dispatch(deleteItemFromCartWomens(prod.id));
    });
  };

  const totalPrice = productsMensAndWomens.reduce((acc, prod) => {
    return (acc += prod.price * prod.countProd);
  }, 0);

  useEffect(() => {
    dispatch(setOrderTotalPrice(Number(totalPrice).toFixed(2)));
  }, [totalPrice]);

  const [itemCartMain, setItemCartMain] = useState(true);
  const [itemCartDelivery, setItemCartDelivery] = useState(false);
  const [itemCartPayment, setitemCartPayment] = useState(false);

  const [checkedDelivery, setCheckedDelivery] = useState("choose");

  const [checkedPayment, setCheckedPayment] = useState("visa");

  // валидация Delivery
  const [validDelivery, setValidDelivery] = useState(false);
  const [validateClick, setValidateClick] = useState(true);

  const [validDeliveryExpress, setvalidDeliveryExpress] = useState(false);
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



  // удачный или нет заказ
  const [orderOk, setOrderOk] = useState(false);

  // обновление
  const [update, setUpdate] = useState(true);


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
              {orderOk &&
              message === "success" &&
              statusOrder === "resolved" ? (
                <button
                  className="cart__btn-close ok"
                  onClick={() => {
                    handleShowCart();

                    setItemCartDelivery(false);
                    setitemCartPayment(false);
                    setItemCartMain(true);
                    setCheckedPayment("visa");
                    setAgree(false);
                    setValidatePaypalClick(true);
                    setValidVisaClick(true);
                  
                    setOrderOk(false);
                    cleanCart();

                    dispatch(setOrderDeliveryMethod(""));
                    dispatch(setOrderPaymentMethod(""));
                    dispatch(setOrderPhone(""));
                    dispatch(setOrderEmail(""));
                    dispatch(setOrderCountry(""));
                    dispatch(setOrderCashEmail(""));
                    dispatch(setOrderCity(""));
                    dispatch(setOrderStreet(""));
                    dispatch(setOrderHouse(""));
                    dispatch(setOrderApartament(""));
                    dispatch(setOrderPostcode(""));
                    dispatch(setOrderStoreadress(""));
                    dispatch(setOrderCard(""));
                    dispatch(setOrderCardDate(""));
                    dispatch(setOrderCardCvv(""));

                    dispatch(setOrderMessage(""));
                  }}
                >
                  <img
                    className="cart__close-btn"
                    src={cartClose}
                    alt="close"
                  />
                </button>
              ) : (
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
                   
                    // cleanCart();

                    dispatch(setOrderDeliveryMethod(""));
                    dispatch(setOrderPaymentMethod(""));
                    dispatch(setOrderPhone(""));
                    dispatch(setOrderEmail(""));
                    dispatch(setOrderCountry(""));
                    dispatch(setOrderCashEmail(""));
                    dispatch(setOrderCity(""));
                    dispatch(setOrderStreet(""));
                    dispatch(setOrderHouse(""));
                    dispatch(setOrderApartament(""));
                    dispatch(setOrderPostcode(""));
                    dispatch(setOrderStoreadress(""));
                    dispatch(setOrderCard(""));
                    dispatch(setOrderCardDate(""));
                    dispatch(setOrderCardCvv(""));

                    dispatch(setOrderMessage(""));
                  }}
                >
                  <img
                    className="cart__close-btn"
                    src={cartClose}
                    alt="close"
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="cart-block-product">
          <div className="container-cart container-cart-block">
            {productsMensAndWomens.length > 0 ? (
              <>
                <div
                  className={
                    orderOk
                      ? "cart-block__btn cart-block__btn-none"
                      : "cart-block__btn"
                  }
                >
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
                <div
                  className={
                    orderOk
                      ? "container-cart container-cart-item-in-cart cart-block__btn-none"
                      : "container-cart container-cart-item-in-cart"
                  }
                >
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
                    {(showCart || update === false) && (
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
                        update={update}
                        setUpdate={setUpdate}
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
                                setOrderOk(true);
                                setitemCartPayment(false);
                                dispatch(
                                  postOrderProducts(allProductsOrderComponents)
                                );
                                console.log("валидация paypal есть");
                              }
                            }}
                          >
                            Check Out
                          </button>
                        )}
                        {(checkedPayment === "visa" || checkedPayment === "mastercart") && (
                          <button
                            className="btn-further"
                            onClick={() => {
                              if (!validVisa) {
                                setValidVisaClick(false);
                                console.log("валидации visa нет");
                              } else {
                                setOrderOk(true);
                                setitemCartPayment(false);
                                dispatch(
                                  postOrderProducts(allProductsOrderComponents)
                                );
                                console.log("валидация visa есть");
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
                              setOrderOk(true);
                              setitemCartPayment(false);
                              dispatch(
                                postOrderProducts(allProductsOrderComponents)
                              );
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
                                // setUpdate(false)
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
                            dispatch(setOrderProducts(postProductsRedux));
                            // setUpdate(true)
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
            {orderOk && message === "success" && (
              <div className="no-products__block">
                <div className="cart-footer__btn-further cart-footer__btn-further-ordergood">
                  <div className="not-cart-products__title-block not-cart-products__title-block-ordergood">
                    <h2 className="not-cart-products__title not-cart-products__title-ordergood">
                      Thank you
                      <br /> for your order
                    </h2>
                    <p className="text-order-good">
                      Information about your order will appear in your e-mail.
                    </p>
                    <p className="text-order-good">
                      Our manager will call you back.
                    </p>
                  </div>

                  <button
                    className="btn-further"
                    onClick={() => {
                      handleShowCart();
                      setItemCartDelivery(false);
                      setitemCartPayment(false);
                      setItemCartMain(true);
                      setCheckedPayment("visa");
                      setAgree(false);
                      setValidatePaypalClick(true);
                      setValidVisaClick(true);
                   
                      setOrderOk(false);
                      cleanCart();

                      dispatch(setOrderDeliveryMethod(""));
                      dispatch(setOrderPaymentMethod(""));
                      dispatch(setOrderPhone(""));
                      dispatch(setOrderEmail(""));
                      dispatch(setOrderCountry(""));
                      dispatch(setOrderCashEmail(""));
                      dispatch(setOrderCity(""));
                      dispatch(setOrderStreet(""));
                      dispatch(setOrderHouse(""));
                      dispatch(setOrderApartament(""));
                      dispatch(setOrderPostcode(""));
                      dispatch(setOrderStoreadress(""));
                      dispatch(setOrderCard(""));
                      dispatch(setOrderCardDate(""));
                      dispatch(setOrderCardCvv(""));

                      dispatch(setOrderMessage(""));
                    }}
                  >
                    back to shopping
                  </button>
                </div>
              </div>
            )}
            {orderOk &&
              (message === "request-error" ||
                message === "underfunded" ||
                message === "bank-error" ||
                message === "timeout") && (
                <div className="no-products__block">
                  <div className="cart-footer__btn-further cart-footer__btn-further-ordergood">
                    <div className="not-cart-products__title-block not-cart-products__title-block-ordergood">
                      <h2 className="not-cart-products__title not-cart-products__title-ordergood">
                        Sorry,
                        <br /> your payment
                        <br />
                        has not been <br />
                        processed
                      </h2>
                      <p className="text-order-good">{message}</p>
                    </div>

                    <div className="block-error-btn">
                      <button
                        className="btn-further"
                        onClick={() => {
                          setItemCartDelivery(false);
                          setitemCartPayment(true);

                          setAgree(false);
                          setValidatePaypalClick(true);
                          setValidVisaClick(true);
                        
                          setOrderOk(false);

                          dispatch(setOrderMessage(""));
                        }}
                      >
                        back to payment
                      </button>
                      <button
                        className="btn-further btn-further-error__back-cart"
                        onClick={() => {
                          // handleShowCart();
                          setUpdate(false)

                          setItemCartDelivery(false);
                          setitemCartPayment(false);
                          setItemCartMain(true);

                          setCheckedPayment("visa");
                          setAgree(false);
                          setValidatePaypalClick(true);
                          setValidVisaClick(true);
                         
                          setOrderOk(false);
                          // cleanCart();

                          dispatch(setOrderDeliveryMethod(""));
                          dispatch(setOrderPaymentMethod(""));
                          dispatch(setOrderPhone(""));
                          dispatch(setOrderEmail(""));
                          dispatch(setOrderCountry(""));
                          dispatch(setOrderCashEmail(""));
                          dispatch(setOrderCity(""));
                          dispatch(setOrderStreet(""));
                          dispatch(setOrderHouse(""));
                          dispatch(setOrderApartament(""));
                          dispatch(setOrderPostcode(""));
                          dispatch(setOrderStoreadress(""));
                          dispatch(setOrderCard(""));
                          dispatch(setOrderCardDate(""));
                          dispatch(setOrderCardCvv(""));

                          dispatch(setOrderMessage(""));
                        }}
                      >
                        VIEW CART
                      </button>
                    </div>
                  </div>
                </div>
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
  showCart: PropTypes.bool.isRequired,
};
