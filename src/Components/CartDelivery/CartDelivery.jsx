/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import "./CartDelivery.css";
import MaskInput from "react-maskinput";

function CartDelivery({setValidDelivery}) {
  const [checkedDelivery, setCheckedDelivery] = useState("choose");
  const handleChange = (e) => {
    setCheckedDelivery(e.target.value);
  };

  const [phone, setPhone] = useState("");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Поле должно быть запонено");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Поле должно быть запонено");

  const [country, setCountry] = useState("");
  const [countryDirty, setCountryDirty] = useState(false);
  // const [countryDirty, setCountryDirty] = useState(false);

  const [city, setCity] = useState("");
  const [cityDirty, setCityDirty] = useState(false);

  const [street, setStreet] = useState("");
  const [streetDirty, setStreetDirty] = useState(false);

  const [house, setHouse] = useState("");
  const [houseDirty, setHouseDirty] = useState(false);

  const [postcode, setPostcode] = useState("");
  const [postcodeDirty, setPostcodeDirty] = useState(false);
  const [postcodeError, setPostcodeError] = useState("Поле должно быть запонено");

  const [agree, setAgree ] = useState(false);

  const angreeHandler = () => {
    setAgree(!agree)
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /(\+?375 \((25|29|33|34)\) ([0-9]{3}( [0-9]{2}){2}))/;
    if (!String(e.target.value).toLowerCase().match(re)) {
      setPhoneError("Некорректный номер телефона");
    } else {
      setPhoneError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!String(e.target.value).toLowerCase().match(re)) {
      setEmailError("Введён не корректный email");
    } else {
      setEmailError("");
    }
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);
    if (country) {
      setCountryDirty(false);
    }
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
    if (city) {
      setCityDirty(false);
    }
  };

  const streetHandler = (e) => {
    setStreet(e.target.value);
    if (street) {
      setStreetDirty(false);
    }
  };

  const houseHandler = (e) => {
    setHouse(e.target.value);
    if (house) {
      setHouseDirty(false);
    }
  };

  const postcodeHandler = (e) => {
    setPostcode(e.target.value);
    if(e.target.value.length > 4 && e.target.value.length < 9) {
      setPostcodeError('Введите 6 цифр');
      if(!e.target.value) {
        setPostcodeError("Поле должно быть запонено")
      }
    }else {
      setPostcodeError('')
    }
    
  };
  

  const blurHandler = (e) => {
    if (e.target.name === "phone") {
      setPhoneDirty(true);
      if (phone === "") {
        setPhoneError("Поле должно быть запонено");
      }
    } else if (e.target.name === "email") {
      setEmailDirty(true);
      if (email === "") {
        setEmailError("Поле должно быть запонено");
      }
    } else if (e.target.name === "country") {
      setCountryDirty(true);
      if (country) {
        setCountryDirty(false);
      }
    } else if (e.target.name === "city") {
      setCityDirty(true);
      if (city) {
        setCityDirty(false);
      }
    } else if (e.target.name === "street") {
      setStreetDirty(true);
      if (street) {
        setStreetDirty(false);
      }
    } else if (e.target.name === "house") {
      setHouseDirty(true);
      if (house) {
        setHouseDirty(false);
      }
    } else if (e.target.name === "postcode") {
      setPostcodeDirty(true);
      if (postcode === '') {
        setPostcodeError("Поле должно быть запонено");
      }
    }
  };

  useEffect(() => {
    if(phoneError || emailError) {
      setValidDelivery(false)
    } else {
      setValidDelivery(true)
    }
  }, [phoneError, emailError])




  return (
    <>
      <div className="delivery">
        <h3 className="delivery-title">
          Choose the method of delivery of the items
        </h3>
        <form action="#">
          <ul className="delivery__radio-btn">
            <li className="delivery__radio-btn-item delivery__radio_up">
              <label className="title-radio" htmlFor="one-de">
                <input
                  className="real-radio"
                  type="radio"
                  id="one-de"
                  name="delivery"
                  checked={checkedDelivery === "choose" ? true : false}
                  onChange={handleChange}
                  value="choose"
                />
                <span className="castom-radio"></span>
                Pickup from post offices
              </label>
            </li>
            <li className="delivery__radio-btn-item">
              <label className="title-radio" htmlFor="two-de">
                <input
                  className="real-radio"
                  type="radio"
                  id="two-de"
                  name="delivery"
                  checked={checkedDelivery === "express" ? true : false}
                  onChange={handleChange}
                  value="express"
                />
                <span className="castom-radio"></span>
                Express delivery
              </label>
            </li>
            <li className="delivery__radio-btn-item delivery__radio_down">
              <label className="title-radio" htmlFor="three-de">
                <input
                  className="real-radio"
                  type="radio"
                  id="three-de"
                  name="delivery"
                  checked={checkedDelivery === "store" ? true : false}
                  onChange={handleChange}
                  value="store"
                />
                <span className="castom-radio"></span>
                Store pickup
              </label>
            </li>
          </ul>

          {checkedDelivery === "choose" ? (
            <>
              <div className="delivery-info__item">
                <label className="delivery-info__title">phone</label>
                <MaskInput
                  type="tel"
                  className={
                    phoneDirty && phoneError
                      ? "delivery-info__input delivery-info__input-error"
                      : "delivery-info__input"
                  }
                  placeholder="+375 (_ _) _ _ _ _ _ _ _ "
                  name="phone"
                  value={phone}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => phoneHandler(e)}
                  mask="+375 (00) 000 00 00"
                />
                {phoneDirty && phoneError && (
                  <p className="error-delivery">{phoneError}</p>
                )}
              </div>
              <div className="delivery-info__item">
                <label className="delivery-info__title">e-mail</label>
                <input
                  type="email"
                  className={
                    emailDirty && emailError
                      ? "delivery-info__input delivery-info__input-error"
                      : "delivery-info__input"
                  }
                  placeholder="e-mail"
                  name="email"
                  value={email}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => emailHandler(e)}
                />
                {emailDirty && emailError && (
                  <p className="error-delivery">{emailError}</p>
                )}
              </div>
            </>
          ) : null}

          <div className="delivery-info__item">
            {checkedDelivery === "store" ? (
              <>
                <label className="delivery-info__title">adress of store</label>
                <input
                  type="text"
                  className="delivery-info__input delivery-info__input-adress"
                  placeholder="Country"
                />
                <input
                  type="text"
                  className="delivery-info__input delivery-info__input-adress"
                  placeholder="Store adress"
                />
              </>
            ) : (
              <>
                <label className="delivery-info__title">adress</label>
                <input
                  type="text"
                  className={
                    countryDirty
                      ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
                      : "delivery-info__input delivery-info__input-adress"
                  }
                  placeholder="Country"
                  name="country"
                  value={country}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => countryHandler(e)}
                />
                {countryDirty && (
                  <p className="error-delivery">Поле должно быть запонено</p>
                )}
                <input
                  type="text"
                  className={
                    cityDirty
                      ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
                      : "delivery-info__input delivery-info__input-adress"
                  }
                  placeholder="City"
                  name="city"
                  value={city}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => cityHandler(e)}
                />
                {cityDirty && (
                  <p className="error-delivery">Поле должно быть запонено</p>
                )}
                <input
                  type="text"
                  className={
                    streetDirty
                      ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
                      : "delivery-info__input delivery-info__input-adress"
                  }
                  placeholder="Street"
                  name="street"
                  value={street}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => streetHandler(e)}
                />
                {streetDirty && (
                  <p className="error-delivery">Поле должно быть запонено</p>
                )}
                <div className="input-house">
                  <input
                    type="text"
                    className={
                      houseDirty
                        ? "delivery-info__input delivery-info__input-house delivery-info__input-error"
                        : "delivery-info__input delivery-info__input-house"
                    }
                    placeholder="House"
                    name="house"
                    value={house}
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => houseHandler(e)}
                  />
                  <input
                    type="text"
                    className="delivery-info__input delivery-info__input-apartment"
                    placeholder="Apartment"
                  />
                </div>
                {houseDirty && (
                  <p className="error-delivery">Поле должно быть запонено</p>
                )}
              </>
            )}
          </div>
          {checkedDelivery === "express" ||
          checkedDelivery === "store" ? null : (
            <div className="delivery-info__item">
              <label className="delivery-info__title">POSTcode</label>
              <MaskInput
                type="text"
                className={
                  postcodeDirty && postcodeError
                    ? "delivery-info__input delivery-info__input-error"
                    : "delivery-info__input"
                }
                placeholder="BY _ _ _ _ _ _"
                mask="BY 000000"
                name="postcode"
                value={postcode}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => postcodeHandler(e)}
              />
              {postcodeDirty && postcodeError && (
                <p className="error-delivery">{postcodeError}</p>
              )}
            </div>
          )}
          <div className="checkbox-iagree">
            <label className="title-checkbox" htmlFor="one-delivery">
              <input
                className="real-checkbox-delivery"
                type="checkbox"
                id="one-delivery"
                checked={agree}
                onChange={angreeHandler}
              />
              <span className={agree ? "castom-checkbox-delivery" : "castom-checkbox-delivery delivery-info__input-error"}></span>I agree to the
              processing of my personal information
            </label>
            {!agree && (
                <p className="error-delivery">Вы должны согласиться на обработку личной информации</p>
              )}
          </div>
        </form>
      </div>
     
    </>
  );
}

export default CartDelivery;
