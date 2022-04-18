/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MaskInput from "react-maskinput";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { postCity } from "../../redux/cityCart/city-сart-slice";
import { getAllCountry } from "../../redux/country/countrySlice";
import {
  setCityRedux,
  setCountryRedux,
} from "../../redux/cityCart/city-сart-slice";

import {
  setOrderDeliveryMethod,
  setOrderPhone,
  setOrderEmail,
  setOrderCountry,
  setOrderCity,
  setOrderStreet,
  setOrderHouse,
  setOrderApartament,
  setOrderPostcode,
  setOrderStoreadress,
} from "../../redux/order/order-сart-slice";
import { reEmail, rePhone } from "../../data/root";
import "./CartDelivery.css";

function CartDelivery({
  setValidDelivery,
  setvalidDeliveryExpress,
  setvalidDeliveryStore,
  validateClick,
  setValidateClick,
  agree,
  angreeHandler,
  checkedDelivery,
  setCheckedDelivery,
  update,
}) {

  const nameCheckBox = {
    choose: "choose",
    store: "store",
    express: "express"

  }
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCheckedDelivery(e.target.value);
  };


  const { cityObj } = useSelector((state) => state.cityCart);
  const { cities } = useSelector((state) => state.cityCart);
  const { status, error } = useSelector((state) => state.country);
  const { statusCity, errorCity } = useSelector((state) => state.cityCart);

  const [phone, setPhone] = useState("");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Поле должно быть заполнено");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Поле должно быть заполнено");

  const [country, setCountry] = useState("");
  const [countryDirty, setCountryDirty] = useState(false);
  const [countryError, setCountryError] = useState(
    "Поле должно быть заполнено"
  );

  const [city, setCity] = useState("");
  const [cityDirty, setCityDirty] = useState(false);
  const [cityError, setCityError] = useState("Поле должно быть заполнено");

  const [street, setStreet] = useState("");
  const [streetDirty, setStreetDirty] = useState(false);
  const [streetError, setStreetError] = useState("Поле должно быть заполнено");

  const [house, setHouse] = useState("");
  const [houseDirty, setHouseDirty] = useState(false);
  const [houseError, setHouseError] = useState("Поле должно быть заполнено");

  const [apartament, setApartament] = useState("");

  const [postcode, setPostcode] = useState("");
  const [postcodeDirty, setPostcodeDirty] = useState(false);
  const [postcodeError, setPostcodeError] = useState(
    "Поле должно быть заполнено"
  );

  // номер телефона для заказа
  const createNumberPhoneOrder = (numberValue) => {
    const arrPh = numberValue.split("");
    const numberArr = arrPh.map((item) => Number(item));
    const newArrPh = numberArr.filter(
      (item) => typeof item === "number" && item !== 0 && !!item
    );
    const numberPhone = `${arrPh[0]}${newArrPh.join("")}`;
    return numberPhone;
  };


  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const numberPhone = createNumberPhoneOrder(e.target.value);
    dispatch(setOrderPhone(numberPhone));
    if (!String(e.target.value).toLowerCase().match(rePhone)) {
      setPhoneError("Некорректный номер телефона");
    } else {
      setPhoneError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    dispatch(setOrderEmail(e.target.value));
    if (!String(e.target.value).toLowerCase().match(reEmail)) {
      setEmailError("Введён не корректный email");
    } else {
      setEmailError("");
    }
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);
    dispatch(setOrderCountry(e.target.value));
    if (!e.target.value === "" && validateClick === false) {
      setCountryError("Поле должно быть заполнено");
    } else if (e.target.value.length === 0) {
      setCountryError("Поле должно быть заполнено");
    } else {
      setCountryError("");
    }
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
    dispatch(setOrderCity(e.target.value));
    if (e.target.value === "" && validateClick === false) {
      setCityError("Поле должно быть заполнено");
    } else if (e.target.value.length === 0) {
      setCityError("Поле должно быть заполнено");
    } else {
      setCityError("");
    }
  };

  const streetHandler = (e) => {
    setStreet(e.target.value);
    dispatch(setOrderStreet(e.target.value));
    if (e.target.value === "" && validateClick === false) {
      setStreetError("Поле должно быть заполнено");
    } else if (e.target.value.length === 0) {
      setStreetError("Поле должно быть заполнено");
    } else {
      setStreetError("");
    }
  };

  const houseHandler = (e) => {
    setHouse(e.target.value);
    dispatch(setOrderHouse(e.target.value));
    if (e.target.value === "" && validateClick === false) {
      setHouseError("Поле должно быть заполнено");
    } else if (e.target.value.length === 0) {
      setHouseError("Поле должно быть заполнено");
    } else {
      setHouseError("");
    }
  };

  const handlerChangeApartament = (e) => {
    setApartament(e.target.value);
    dispatch(setOrderApartament(e.target.value));
  };

  const postcodeHandler = (e) => {
    setPostcode(e.target.value);
    dispatch(setOrderPostcode(e.target.value.slice(3)));
    if (e.target.value.length > 4 && e.target.value.length < 9) {
      setPostcodeError("Введите 6 цифр");
      if (e.target.value === "" && validateClick === false) {
        setPostcodeError("Поле должно быть заполнено");
      } else if (e.target.value.length === 0) {
        setPostcodeError("Поле должно быть заполнено");
      }
    } else {
      setPostcodeError("");
    }
  };

  const [countryStore, setCountryStore] = useState("");
  const [countryStoreDirty, setCountryStoreDirty] = useState(false);
  const [countryStoreError, setCountryStoreError] = useState("Выберите страну");

  const [adressStore, setAdressStore] = useState("");
  const [cityStoreDirty, setCityStoreDirty] = useState(false);
  const [cityStoreError, setCityStoreError] = useState("Выберите город");

  const blurHandler = (e) => {
    if (e.target.name === "phone") {
      setPhoneDirty(true);
      if (phone === "") {
        setPhoneError("Поле должно быть заполнено");
      }
    } else if (e.target.name === "email") {
      setEmailDirty(true);
      if (email === "") {
        setEmailError("Поле должно быть заполнено");
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
      if (postcode === "") {
        setPostcodeError("Поле должно быть заполнено");
      }
    } else if (e.target.name === "countryStore") {
      setCountryStoreDirty(true);
      if (countryStore === "") {
        setCountryStoreError("Выберите страну");
        setPlaceholderCountry(true);
      }
    } else if (e.target.name === "storeAddress") {
      setCityStoreDirty(true);
      if (adressStore === "") {
        setCityStoreError("Выберите город");
      }
    }
  };

  const countryStoreHandler = (e) => {
    setCountryStore(e.target.value);
    dispatch(setCountryRedux(e.target.value));
    dispatch(setOrderCountry(e.target.value));
    if (e.target.value === "" && validateClick === false) {
      setCountryStoreError("Выберите страну");
    } else {
      setCountryStoreError("");
      setPlaceholderCountry(false);
    }
  };
  const adressStoreHandler = (e) => {
    setAdressStore(e.target.value);
    dispatch(setCityRedux(e.target.value));
    if (e.target.value === "" && validateClick === false) {
      setCityStoreError("Выберите город");
    } else {
      setCityStoreError("");
    }
  };

  const arrayCountry = useSelector((state) => state.country.allCountry);

  const filtersCIties = cities.filter((cityItem) => {
    return cityItem.city.toLowerCase().includes(adressStore.toLowerCase());
  });

  const [isOpenCities, setIsOpenCities] = useState(true);

  const itemClickHandler = (e) => {
    setAdressStore(e.target.textContent);
    dispatch(setOrderStoreadress(e.target.textContent));
    setIsOpenCities(false);
  };

  const clickInputCities = () => {
    setIsOpenCities(true);
  };

  const [placeholderCountry, setPlaceholderCountry] = useState(true);

  const togglePlaceholder = () => {
    setPlaceholderCountry(false);
  };

    // заказ и др.
    useEffect(() => {
      switch (checkedDelivery) {
        case "store":
          dispatch(setOrderDeliveryMethod("Store pickup"));
          break;
        case "choose":
          dispatch(setOrderDeliveryMethod("Pickup from post offices"));
          break;
        case "express":
          dispatch(setOrderDeliveryMethod("Express delivery"));
          break;
        default:
          break;
      }
    }, [checkedDelivery]);
  

  useEffect(() => {
    if (
      phoneError ||
      emailError ||
      countryError ||
      cityError ||
      streetError ||
      houseError ||
      postcodeError ||
      !agree
    ) {
      setValidDelivery(false);
    } else {
      setValidDelivery(true);
      setValidateClick(true);
    }
  }, [
    phoneError,
    emailError,
    countryError,
    cityError,
    streetError,
    houseError,
    postcodeError,
    agree,
  ]);

  useEffect(() => {
    if (
      countryError ||
      cityError ||
      streetError ||
      houseError ||
      phoneError ||
      emailError ||
      !agree
    ) {
      setvalidDeliveryExpress(false);
    } else {
      setvalidDeliveryExpress(true);
      setValidateClick(true);
    }
  }, [
    countryError,
    cityError,
    streetError,
    houseError,
    phoneError,
    emailError,
    agree,
  ]);

  useEffect(() => {
    if (
      countryStoreError ||
      cityStoreError ||
      phoneError ||
      emailError ||
      !agree
    ) {
      setvalidDeliveryStore(false);
    } else {
      setvalidDeliveryStore(true);
      setValidateClick(true);
    }
  }, [countryStoreError, countryStoreError, phoneError, emailError, agree]);

  useEffect(() => {
    if (update === false) {
      setPhone("");

      setEmail("");
      setCountry("");
      setCity("");
      setStreet("");
      setHouse("");
      setApartament("");
      setPostcode("");
      setCountryStore("");
      setAdressStore("");
    }
  }, [update]);

  useEffect(() => {
    if (adressStore.length > 2) {
      dispatch(postCity(cityObj));
    }
  }, [adressStore.length]);

  useEffect(() => {
    if (checkedDelivery === "store") {
      dispatch(getAllCountry());
    }
  }, [checkedDelivery]);

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
                  checked={checkedDelivery === nameCheckBox.choose ? true : false}
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
                  checked={checkedDelivery === nameCheckBox.express ? true : false}
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
                  checked={checkedDelivery === nameCheckBox.store ? true : false}
                  onChange={handleChange}
                  value="store"
                />
                <span className="castom-radio"></span>
                Store pickup
              </label>
            </li>
          </ul>

          <div className="delivery-info__item">
            <label className="delivery-info__title">phone</label>
            <MaskInput
              type="tel"
              className={
                (phoneDirty && phoneError) ||
                (validateClick === false && phoneError)
                  ? "delivery-info__input delivery-info__input-error"
                  : "delivery-info__input"
              }
              placeholder="+375 (_ _) _ _ _ _ _ _ _ "
              name="phone"
              value={phone}
              onBlur={blurHandler}
              onChange={phoneHandler}
              mask="+375 (00) 000 00 00"
              showMask
              maskChar="_"
            />
            {phoneDirty && phoneError && validateClick && (
              <p className="error-delivery">{phoneError}</p>
            )}
            {validateClick === false && phoneError && (
              <p className="error-delivery">{phoneError}</p>
            )}
          </div>
          <div className="delivery-info__item">
            <label className="delivery-info__title">e-mail</label>
            <input
              type="email"
              className={
                (emailDirty && emailError) ||
                (validateClick === false && emailError)
                  ? "delivery-info__input delivery-info__input-error"
                  : "delivery-info__input"
              }
              placeholder="e-mail"
              name="email"
              value={email}
              onBlur={blurHandler}
              onChange={emailHandler}
            />
            {emailDirty && emailError && validateClick && (
              <p className="error-delivery">{emailError}</p>
            )}
            {validateClick === false && emailError && (
              <p className="error-delivery">{emailError}</p>
            )}
          </div>

          <div className="delivery-info__item delivery-info__item-select">
            {checkedDelivery === "store" ? (
              <>
                <label className="delivery-info__title">adress of store</label>
                {placeholderCountry && (
                  <p className="country-placeholder">Country</p>
                )}

                <select
                  value={countryStore}
                  onChange={countryStoreHandler}
                  onBlur={blurHandler}
                  className={
                    (countryStoreDirty && countryStoreError) ||
                    (validateClick === false && countryStoreError)
                      ? "delivery-info__input delivery-info__input-adress select-country delivery-info__input-error"
                      : "delivery-info__input select-country"
                  }
                  name="countryStore"
                  onClick={togglePlaceholder}
                >
                  <option></option>
                  {arrayCountry &&
                    status === "resolved" &&
                    arrayCountry.map((item) => {
                      return (
                        <option value={item.name} key={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
                {error && (
                  <p className="error-delivery">Ошибка получения данных</p>
                )}
                {countryStoreDirty && countryStoreError && validateClick && (
                  <p className="error-delivery">{countryStoreError}</p>
                )}
                {validateClick === false && countryStoreError && (
                  <p className="error-delivery">{countryStoreError}</p>
                )}

                <input
                  type="text"
                  className={
                    (cityStoreDirty && cityStoreError) ||
                    (validateClick === false && cityStoreError)
                      ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
                      : "delivery-info__input delivery-info__input-adress"
                  }
                  placeholder="Store adress"
                  value={adressStore}
                  onChange={adressStoreHandler}
                  onBlur={(e) => blurHandler(e)}
                  onClick={clickInputCities}
                  disabled={countryStore === "" && "disabled"}
                  name="storeAddress"
                />
                {errorCity && (
                  <p className="error-delivery">Ошибка получения данных</p>
                )}
                {cityStoreDirty && cityStoreError && validateClick && (
                  <p className="error-delivery">{cityStoreError}</p>
                )}
                {validateClick === false && cityStoreError && (
                  <p className="error-delivery">{cityStoreError}</p>
                )}

                <ul className="autocomplite">
                  {cities &&
                    adressStore &&
                    isOpenCities &&
                    statusCity === "resolved" &&
                    filtersCIties.map((item, index) => {
                      return (
                        <li
                          className="autocomplit__item"
                          key={index}
                          onClick={itemClickHandler}
                        >
                          {item.city}
                        </li>
                      );
                    })}
                </ul>
              </>
            ) : (
              <>
                <label className="delivery-info__title">adress</label>
                <input
                  type="text"
                  className={
                    (countryDirty && countryError) ||
                    (validateClick === false && countryError)
                      ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
                      : "delivery-info__input delivery-info__input-adress"
                  }
                  placeholder="Country"
                  name="country"
                  value={country}
                  onBlur={blurHandler}
                  onChange={countryHandler}
                />
                {countryDirty && countryError && validateClick && (
                  <p className="error-delivery">{countryError}</p>
                )}
                {validateClick === false && countryError && (
                  <p className="error-delivery">{countryError}</p>
                )}
                <input
                  type="text"
                  className={
                    (cityDirty && cityError) ||
                    (validateClick === false && cityError)
                      ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
                      : "delivery-info__input delivery-info__input-adress"
                  }
                  placeholder="City"
                  name="city"
                  value={city}
                  onBlur={blurHandler}
                  onChange={cityHandler}
                />
                {cityDirty && cityError && validateClick && (
                  <p className="error-delivery">{cityError}</p>
                )}
                {validateClick === false && cityError && (
                  <p className="error-delivery">{cityError}</p>
                )}
                <input
                  type="text"
                  className={
                    (streetDirty && streetError) ||
                    (validateClick === false && streetError)
                      ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
                      : "delivery-info__input delivery-info__input-adress"
                  }
                  placeholder="Street"
                  name="street"
                  value={street}
                  onBlur={blurHandler}
                  onChange={streetHandler}
                />
                {streetDirty && streetError && validateClick && (
                  <p className="error-delivery">{streetError}</p>
                )}
                {validateClick === false && streetError && (
                  <p className="error-delivery">{streetError}</p>
                )}
                <div className="input-house">
                  <input
                    type="text"
                    className={
                      (houseDirty && houseError) ||
                      (validateClick === false && houseError)
                        ? "delivery-info__input delivery-info__input-house delivery-info__input-error"
                        : "delivery-info__input delivery-info__input-house"
                    }
                    placeholder="House"
                    name="house"
                    value={house}
                    onBlur={blurHandler}
                    onChange={houseHandler}
                  />
                  <input
                    type="text"
                    className="delivery-info__input delivery-info__input-apartment"
                    placeholder="Apartment"
                    onChange={handlerChangeApartament}
                    value={apartament}
                  />
                </div>
                {houseDirty && houseError && validateClick && (
                  <p className="error-delivery">{houseError}</p>
                )}
                {validateClick === false && houseError && (
                  <p className="error-delivery">{houseError}</p>
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
                  (postcodeDirty && postcodeError) ||
                  (validateClick === false && postcodeError)
                    ? "delivery-info__input delivery-info__input-error"
                    : "delivery-info__input"
                }
                placeholder="BY _ _ _ _ _ _"
                mask="BY 000000"
                name="postcode"
                value={postcode}
                onBlur={blurHandler}
                onChange={postcodeHandler}
              />
              {postcodeDirty && postcodeError && validateClick && (
                <p className="error-delivery">{postcodeError}</p>
              )}
              {validateClick === false && postcodeError && (
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
              <span
                className={
                  (agree === false && validateClick === true) ||
                  (agree === true && validateClick === true) ||
                  (agree === true && validateClick === false)
                    ? "castom-checkbox-delivery"
                    : "castom-checkbox-delivery delivery-info__input-error"
                }
              ></span>
              I agree to the processing of my personal information
            </label>
            {validateClick === false && agree === false && (
              <p className="error-delivery">
                Вы должны согласиться на обработку личной информации
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default CartDelivery;

CartDelivery.propTypes = {
  setValidDelivery: PropTypes.func.isRequired,
  setvalidDeliveryExpress: PropTypes.func.isRequired,
  setvalidDeliveryStore: PropTypes.func.isRequired,
  validateClick: PropTypes.bool.isRequired,
  setValidateClick: PropTypes.func.isRequired,
  agree: PropTypes.bool.isRequired,
  angreeHandler: PropTypes.func.isRequired,
  checkedDelivery: PropTypes.string.isRequired,
  setCheckedDelivery: PropTypes.func.isRequired,
};
