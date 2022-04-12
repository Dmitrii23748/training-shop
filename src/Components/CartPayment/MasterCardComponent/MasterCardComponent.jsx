/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import eyes from "../../../img/cart-component/eyeslash.svg";
import eyescopy from "../../../img/cart-component/eyeslash-copy.svg";
import { useState, useEffect } from "react";
import MaskInput from "react-maskinput";
import { useDispatch } from "react-redux";
import { setOrderCard, setOrderCardDate, setOrderCardCvv } from "../../../redux/order/orderCartSlice";


function MasterCardComponent({ setValidMasterCardClick, setValidMasterCard, validMasterCardClick }) {
  const dispatch = useDispatch();

  const [eyesState, setEyesState] = useState(false);

  const [cardVisa, setCardVisa] = useState("");
  const [cardVisaDirty, setCardVisaDirty] = useState(false);
  const [cardVisaError, setCardVisaError] = useState(
    "Поле должно быть заполнено"
  );
  const [cardVisaDate, setCardVisaDate] = useState("");
  const [cardVisaDateDirty, setCardVisaDateDirty] = useState(false);
  const [cardVisaDateError, setCardVisaDateError] = useState(
    "Поле должно быть заполнено"
  );


  const [number, setNumber] = useState("");
  const [numberDirty, setNumberDirty] = useState(false);
  const [numberError, setNumberError] = useState(
    "Поле должно быть заполнено"
  );

  const handleClickEyes = () => {
    setEyesState(!eyesState);
  };

  const visaCardNumberHandler = (e) => {
    setCardVisa(e.target.value);
    const re = e.target.value.replace(/\D/g, "").substr(0, 16);
    dispatch(setOrderCard(e.target.value))
    if (re.length > 0 && re.length < 16) {
      setCardVisaError("Введите 16 цифр");
    } else if (re.length === 0) {
      setCardVisaError("Поле должно быть заполнено");
      // setValidVisa(false)
    } else {
      setCardVisaError("");
    }
  };

  const visaCardDateHandler = (e) => {
    const date = e.target.value.replace(/\D/g, "").substr(0, 4);
    setCardVisaDate(e.target.value);
    dispatch(setOrderCardDate(e.target.value))
    if (date.length > 0 && date.length < 4) {
      setCardVisaDateError("введите 4 цифры");
    } else if (date.length === 0) {
      setCardVisaDateError("Поле должно быть заполнено");
      // setValidVisa(false)
    } else {
      setCardVisaDateError("");
    }
  };

  const changeNumber = (e) => {
    // const numberCvv = e.target.value.replace(/\D/g, "");
    // console.log(numberCvv);
    setNumber(e.target.value);
    dispatch(setOrderCardCvv(e.target.value))
    if(e.target.value.length > 0 && e.target.value.length < 3) {
      setNumberError('Меньше 3 цифр не вводить')
    } else if (e.target.value.length === 0) {
      setNumberError("Поле должно быть заполнено");
    } else if (e.target.value.length > 4 ) {
      setNumberError('Больше 4 цифр не вводить')
    } else {
      setNumberError("");
    }
  };

  const blurVisaHandler = (e) => {
    if (e.target.name === "visaCardNumber") {
      setCardVisaDirty(true);
      if (
        e.target.value.length > 0 &&
        e.target.value.length < 16 &&
        validMasterCardClick === false
      ) {
        setCardVisaError("");
      }
    } else if (e.target.name === "visaCardDate") {
      setCardVisaDateDirty(true);
      const year = String(new Date().getFullYear()).slice(2, 4);
      const firstTwoNumber = e.target.value.slice(0, 2);
      const LastTwoNumber = e.target.value.slice(3, 5);
      const months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
      const even = (element) => element === firstTwoNumber;
      if (
        e.target.value.length > 0 &&
        e.target.value.length < 4 &&
        validMasterCardClick === false
      ) {
        setCardVisaDateError("Введите 4 цифр");
      } else if (LastTwoNumber < year || months.some(even) === false) {
        setCardVisaDateError("Введите верный месяц или год");
      }
    } else if (e.target.name === "numberPass") {
      setNumberDirty(true)
      if(e.target.value.length > 0 && e.target.value.length < 3 && validMasterCardClick === false) {
        setNumberError("");
      }
    }
  };

  useEffect(() => {
    if (cardVisaError || cardVisaDateError || numberError) {
        setValidMasterCard(false);
    } else {
        setValidMasterCard(true);
      setValidMasterCardClick(true);
    }
  }, [cardVisaError, cardVisaDateError, numberError]);

  return (
    <>
      <div className="delivery-info__item">
        <span className="delivery-info__title">Card</span>
        <MaskInput
          type="text"
          className={
            (cardVisaDirty && cardVisaError) ||
            (validMasterCardClick === false && cardVisaError)
              ? "delivery-info__input delivery-info__input-adress delivery-info__input-error"
              : "delivery-info__input delivery-info__input-adress"
          }
          placeholder="_ _ _ _   _ _ _ _   _ _ _ _   _ _ _ _"
          mask="0000  0000  0000  0000"
          maskChar="_"
          showMask
          onChange={(e) => visaCardNumberHandler(e)}
          onBlur={(e) => blurVisaHandler(e)}
          value={cardVisa}
          name="visaCardNumber"
        />
        {cardVisaDirty && cardVisaError && validMasterCardClick && (
          <p className="error-delivery">{cardVisaError}</p>
        )}
        {validMasterCardClick === false && cardVisaError ? (
          <p className="error-delivery">{cardVisaError}</p>
        ) : null}
      </div>
      <div className="input-house input-house__paypal">
        <div>
          <div>
            <MaskInput
              type="text"
              className="delivery-info__input delivery-info__input-house"
              placeholder="MM/YY"
              mask="00/00"
              maskChar="_"
              showMask
              name="visaCardDate"
              value={cardVisaDate}
              onChange={(e) => visaCardDateHandler(e)}
              onBlur={(e) => blurVisaHandler(e)}
            />
          </div>
          <div>
            {cardVisaDateDirty && cardVisaDateError && validMasterCardClick && (
              <p className="error-delivery">{cardVisaDateError}</p>
            )}
            {validMasterCardClick === false && cardVisaDateError ? (
              <p className="error-delivery">{cardVisaDateError}</p>
            ) : null}
          </div>
        </div>
        <div>
          <div>
              <input
                type={eyesState ? "number" : "password"}
                className="delivery-info__input delivery-info__input-apartment paypal-info__input-apartment input-cvv"
                placeholder="CVV"
                value={number}
                onChange={(e) => changeNumber(e) }
                name="numberPass"
              />
            <div className="eyes-block" onClick={handleClickEyes}>
              {eyesState ? (
                <img className="paypal-eyas" src={eyescopy} alt="eyescopy" />
              ) : (
                <img className="paypal-eyas" src={eyes} alt="eyas" />
              )}
            </div>
          </div>
          <div>
          {numberDirty && numberError && validMasterCardClick && (
              <p className="error-delivery">{numberError}</p>
            )}
            {validMasterCardClick === false && numberError ? (
              <p className="error-delivery">{numberError}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterCardComponent;



MasterCardComponent.propTypes = {
  setValidMasterCardClick: PropTypes.func.isRequired,
  setValidMasterCard: PropTypes.func.isRequired,
  validMasterCardClick: PropTypes.bool.isRequired
};

