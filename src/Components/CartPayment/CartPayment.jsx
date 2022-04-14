/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CartPayment.css";
import paypal from "../../img/cart-component/paypal-cart.png";
import visa from "../../img/cart-component/visa-cart.png";
import mastercart from "../../img/cart-component/mastercard-cart.png";
import VisaComponent from "./VisaComponent/VisaComponent";
// import MasterCardComponent from "./MasterCardComponent/MasterCardComponent";
import { useDispatch } from "react-redux";
import { setOrderPaymentMethod, setOrderCashEmail} from "../../redux/order/orderCartSlice";


function CartPayment({
  checkedPayment,
  setCheckedPayment,
  validatePaypalClick,
  setValidatePaypalClick,
  setValidPaypal,
  setValidVisa,
  validVisaClick,
  setValidVisaClick,

  setValidMasterCard,
  validMasterCardClick,
  setValidMasterCardClick
}) {

  const dispatch = useDispatch();

  const handleChangePaypal = (e) => {
    setCheckedPayment(e.target.value);
  };


  // paypal
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Поле должно быть заполнено");


  const emailHandler = (e) => {
    setEmail(e.target.value);
    dispatch(setOrderCashEmail(e.target.value))
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!String(e.target.value).toLowerCase().match(re)) {
      setEmailError("Введён не корректный email");
    } else {
      setEmailError("");
    }
  };

  const blurHandler = (e) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
      if (email === "") {
        setEmailError("Поле должно быть заполнено");
      }
    }
  };

  useEffect(() => {
    if (emailError) {
      setValidPaypal(false);
    } else {
      setValidPaypal(true);
      setValidatePaypalClick(true);
    }
  }, [emailError]);


  useEffect(() => {
    if(checkedPayment === 'paypal') {
      dispatch(setOrderPaymentMethod('PayPal'))
    } else if(checkedPayment === 'visa' || checkedPayment === 'mastercart') {
      dispatch(setOrderPaymentMethod('Card'))
    } else if(checkedPayment === 'cash') {
      dispatch(setOrderPaymentMethod('Cash'))
    }
  }, [checkedPayment])

  return (
    <div className="payment">
      <h3 className="payment-title">Method of payments</h3>
      <form action="#">
        <ul className="payment__radio-btn">
          <li className="payment__radio-btn-item payment__radio-btn-item_up">
            <label
              className="title-radio title-radio__payment"
              htmlFor="one-paypal"
            >
              <input
                className="real-radio"
                type="radio"
                id="one-paypal"
                name="payment"
                checked={checkedPayment === "paypal" ? true : false}
                onChange={handleChangePaypal}
                value="paypal"
              />
              <span className="castom-radio"></span>
              <img className="payment-img" src={paypal} alt="paypal" />
            </label>
          </li>
          <li className="payment__radio-btn-item">
            <label
              className="title-radio title-radio__payment"
              htmlFor="two-visa"
            >
              <input
                className="real-radio"
                type="radio"
                id="two-visa"
                name="payment"
                checked={checkedPayment === "visa" ? true : false}
                onChange={handleChangePaypal}
                value="visa"
              />
              <span className="castom-radio"></span>
              <img className="payment-img" src={visa} alt="visa" />
            </label>
          </li>
          <li className="payment__radio-btn-item payment__radio-btn-item_medium">
            <label
              className="title-radio title-radio__payment"
              htmlFor="three-mastercart"
            >
              <input
                className="real-radio"
                type="radio"
                id="three-mastercart"
                name="payment"
                checked={checkedPayment === "mastercart" ? true : false}
                onChange={handleChangePaypal}
                value="mastercart"
              />
              <span className="castom-radio"></span>
              <img className="payment-img" src={mastercart} alt="mastercart" />
            </label>
          </li>
          <li className="payment__radio-btn-item payment__radio-btn-item_down">
            <label
              className="title-radio title-radio__payment"
              htmlFor="four-cash"
            >
              <input
                className="real-radio"
                type="radio"
                id="four-cash"
                name="payment"
                checked={checkedPayment === "cash" ? true : false}
                onChange={handleChangePaypal}
                value="cash"
              />
              <span className="castom-radio"></span>
              cash
            </label>
          </li>
        </ul>
        {checkedPayment === "paypal" ? (
          <div className="delivery-info__item">
            <span className="delivery-info__title">E-mail</span>
            <input
              type="email"
              className={
                (emailDirty && emailError) ||
                (validatePaypalClick === false && emailError)
                  ? "delivery-info__input delivery-info__input-error"
                  : "delivery-info__input"
              }
              placeholder="e-mail"
              name="email"
              value={email}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => emailHandler(e)}
            />
            {emailDirty && emailError && validatePaypalClick && (
              <p className="error-payment">{emailError}</p>
            )}
            {validatePaypalClick === false && emailError ? (
              <p className="error-payment">{emailError}</p>
            ) : null}
          </div>
        ) : null}
        {checkedPayment === "visa" || checkedPayment === "mastercart" ? (
          
          <VisaComponent 
            setValidVisa={setValidVisa}
            validVisaClick={validVisaClick}
            setValidVisaClick={setValidVisaClick}
          />
          
        ) : null}
        {/* {checkedPayment === "mastercart" ? (
         <MasterCardComponent
            setValidMasterCardClick={setValidMasterCardClick}
            setValidMasterCard={setValidMasterCard}
            validMasterCardClick={validMasterCardClick}
         />
        ) : null} */}
      </form>
      {checkedPayment === "cash" ? null : null}
    </div>
  );
}

export default CartPayment;



CartPayment.propTypes = {
  checkedPayment: PropTypes.string.isRequired,
  setCheckedPayment: PropTypes.func.isRequired,
  validatePaypalClick: PropTypes.bool.isRequired,
  setValidatePaypalClick: PropTypes.func.isRequired,
  setValidPaypal: PropTypes.func.isRequired,
  setValidVisa: PropTypes.func.isRequired,
  setValidVisaClick: PropTypes.func.isRequired,
  validVisaClick: PropTypes.bool.isRequired,
  setValidMasterCard: PropTypes.func.isRequired,
  validMasterCardClick: PropTypes.bool.isRequired,
  setValidMasterCardClick: PropTypes.func.isRequired

};
