/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import "./CartDelivery.css";
import MaskInput from "react-maskinput";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountry } from "../../redux/country/countrySlice";
import { setCityRedux, setCountryRedux } from "../../redux/cityCart/cityCartSlice";
import { postCity } from "../../redux/cityCart/cityCartSlice";

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
 
}) {
  const dispatch = useDispatch();

  // const [checkedDelivery, setCheckedDelivery] = useState("choose");

  const handleChange = (e) => {
    setCheckedDelivery(e.target.value);
  };

  useEffect(() => {
    if (checkedDelivery === "store") {
      dispatch(getAllCountry());
    }
  }, [checkedDelivery]);

  const arrayCountry = useSelector((state) => state.country.allCountry);

  const countryObjComponent = useSelector(state => state.cityCart.cityObj);
  const citiesComponentRedux = useSelector(state => state.cityCart.cities);

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

  const [postcode, setPostcode] = useState("");
  const [postcodeDirty, setPostcodeDirty] = useState(false);
  const [postcodeError, setPostcodeError] = useState(
    "Поле должно быть заполнено"
  );

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
    if (e.target.value === "" && validateClick === false) {
      setCountryError("Поле должно быть заполнено");
    } else if (e.target.value.length === 0) {
      setCountryError("Поле должно быть заполнено");
    } else {
      setCountryError("");
    }
    // if (country) {
    //   setCountryDirty(false);
    // }
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
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
    if (e.target.value === "" && validateClick === false) {
      setHouseError("Поле должно быть заполнено");
    } else if (e.target.value.length === 0) {
      setHouseError("Поле должно быть заполнено");
    } else {
      setHouseError("");
    }
  };

  const postcodeHandler = (e) => {
    setPostcode(e.target.value);
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

  const [countryStore, setCountryStore] = useState("Country");
  const [countryStoreDirty, setCountryStoreDirty] = useState(false);
  const [countryStoreError, setCountryStoreError] = useState(
    "Выберите страну"
  );

  const [adressStore, setAdressStore] = useState("");
  const [cityStoreDirty, setCityStoreDirty] = useState(false);
  const [cityStoreError, setCityStoreError] = useState(
    "Выберите город"
  );

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
      if(countryStore === 'Country') {
        setCountryStoreError('Выберите страну')
      }
    } else if (e.target.name === "adressStore") {
      setCityStoreDirty(true);
      if (adressStore === "") {
        setCityStoreError("Выберите город");
      }
    }
  };

 
 

  const countryStoreHandler = (e) => {
    setCountryStore(e.target.value);
    dispatch(setCountryRedux(e.target.value))
    if(e.target.value === "Country" && validateClick === false){
      setCountryStoreError("Выберите страну")
    } else {
      setCountryStoreError("")
    }
  };
  const adressStoreHandler = (e) => {
    setAdressStore(e.target.value);
    dispatch(setCityRedux(e.target.value))
    if(e.target.value === "" && validateClick === false) {
      setCityStoreError("Выберите город")
    } else {
      setCityStoreError("")
    }
  };

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
    agree
  ]);

  useEffect(() => {
    if(countryStoreError || cityStoreError || !agree) {
      setvalidDeliveryStore(false);
    } else {
      setvalidDeliveryStore(true);
      setValidateClick(true);
    }
  }, [countryStoreError, countryStoreError, agree])

  

  const filtersCIties = citiesComponentRedux.filter((cityItem) => {
    return cityItem.city.toLowerCase().includes(adressStore.toLowerCase())
  })

  const [isOpenCities, setIsOpenCities] = useState(true)

  const itemClickHandler = (e) => {
    setAdressStore(e.target.textContent)
    setIsOpenCities(false)
  }

  const clickInputCities = () => {
    setIsOpenCities(true)
  }

  useEffect(() => {
    if(adressStore.length > 2) {
      dispatch(postCity(countryObjComponent))
    }
  }, [adressStore.length])

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
                    (phoneDirty && phoneError) ||
                    (validateClick === false && phoneError)
                      ? "delivery-info__input delivery-info__input-error"
                      : "delivery-info__input"
                  }
                  placeholder="+375 (_ _) _ _ _ _ _ _ _ "
                  name="phone"
                  value={phone}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => phoneHandler(e)}
                  mask="+375 (00) 000 00 00"
                  showMask
                  maskChar="_"
                />
                {phoneDirty && phoneError && validateClick && (
                  <p className="error-delivery">{phoneError}</p>
                )}
                {validateClick === false && phoneError ? (
                  <p className="error-delivery">{phoneError}</p>
                ) : null}
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
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => emailHandler(e)}
                />
                {emailDirty && emailError && validateClick && (
                  <p className="error-delivery">{emailError}</p>
                )}
                {validateClick === false && emailError ? (
                  <p className="error-delivery">{emailError}</p>
                ) : null}
              </div>
            </>
          ) : null}

          <div className="delivery-info__item">
            {checkedDelivery === "store" ? (
              <>
                <label className="delivery-info__title">adress of store</label>
                <select
                  value={countryStore}
                  onChange={(e) => countryStoreHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  className={ (countryStoreDirty && countryStoreError) ||
                    (validateClick === false && countryStoreError) ?
                    "delivery-info__input delivery-info__input-adress select-country delivery-info__input-error"
                    : "delivery-info__input select-country"
                  }
                  name="countryStore"
                >
                  <option>Country</option>
                  {arrayCountry &&
                    arrayCountry.map((item) => {
                      return (
                        <option value={item.name} key={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
                {countryStoreDirty && countryStoreError && validateClick && (
                  <p className="error-delivery">{countryStoreError}</p>
                )}
                {validateClick === false && countryStoreError ? (
                  <p className="error-delivery">{countryStoreError}</p>
                ) : null}


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
                  readOnly={countryStore === 'Country' && 'readOnly'}
                  name="adressStore"
                />
          
                {cityStoreDirty && cityStoreError && validateClick && (
                  <p className="error-delivery">{cityStoreError}</p>
                )}
                {validateClick === false && cityStoreError ? (
                  <p className="error-delivery">{cityStoreError}</p>
                ) : null}
                
                <ul className="autocomplite">
                  {
                    citiesComponentRedux && adressStore && isOpenCities &&
                    filtersCIties.map((item, index) => {
                      return (
                        <li className="autocomplit__item" 
                        key={index}
                        onClick={itemClickHandler}
                        >{item.city}</li>
                      )
                    })
                  }
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
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => countryHandler(e)}
                />
                {countryDirty && countryError && validateClick && (
                  <p className="error-delivery">{countryError}</p>
                )}
                {validateClick === false && countryError ? (
                  <p className="error-delivery">{countryError}</p>
                ) : null}
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
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => cityHandler(e)}
                />
                {cityDirty && cityError && validateClick && (
                  <p className="error-delivery">{cityError}</p>
                )}
                {validateClick === false && cityError ? (
                  <p className="error-delivery">{cityError}</p>
                ) : null}
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
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => streetHandler(e)}
                />
                {streetDirty && streetError && validateClick && (
                  <p className="error-delivery">{streetError}</p>
                )}
                {validateClick === false && streetError ? (
                  <p className="error-delivery">{streetError}</p>
                ) : null}
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
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => houseHandler(e)}
                  />
                  <input
                    type="text"
                    className="delivery-info__input delivery-info__input-apartment"
                    placeholder="Apartment"
                  />
                </div>
                {houseDirty && houseError && validateClick && (
                  <p className="error-delivery">{houseError}</p>
                )}
                {validateClick === false && houseError ? (
                  <p className="error-delivery">{houseError}</p>
                ) : null}
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
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => postcodeHandler(e)}
              />
              {postcodeDirty && postcodeError && validateClick && (
                <p className="error-delivery">{postcodeError}</p>
              )}
              {validateClick === false && postcodeError ? (
                <p className="error-delivery">{postcodeError}</p>
              ) : null}
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
            {validateClick === false && agree === false ? (
              <p className="error-delivery">
                Вы должны согласиться на обработку личной информации
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
}

export default CartDelivery;
