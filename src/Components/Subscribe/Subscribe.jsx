/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import "./Subscribe.css";
import women from "../../img/subscribe/women.png";
import men from "../../img/subscribe/men.png";
import { useDispatch, useSelector } from "react-redux";
import { setSubscribe} from "../../redux/subscribe/subscribeSlice";
import { postSubscribe } from "../../redux/subscribe/subscribeSlice";
import Loader from "react-js-loader";

function Subscribe() {
  const dispath = useDispatch();
  const valueSubscribe = useSelector((state) => state.subscribe.subscribeValue);
  const { status, error } = useSelector((state) => state.subscribe);

  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [formValid, setFormValid] = useState(false);

  const [inputSubscribe, setInputSubscribe ] = useState(false)

  const blurEmail = (e) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
      if (valueSubscribe === "") {
        setEmailError("Email не может быть пустым");
      }
    }
  };

  const handleChangeSubscribe = (e) => {
    dispath(setSubscribe(e.target.value));
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!String(e.target.value).toLowerCase().match(re)) {
      setEmailError("Введён не корректный email");
    } else {
      setEmailError("");
    }
  };


  useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  useEffect(() => {
    if( status === 'resolved') {
      dispath(setSubscribe(''));
      setInputSubscribe(!inputSubscribe)
    }
  }, [status])


  const postEmailSubscribe = () => {
    dispath(postSubscribe(valueSubscribe));
  };


  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe-position">
          <div className="subscribe-block">
            <p className="subscribe-block__text">Special Offer</p>
            <h3 className="subscribe-block__title">
              Subscribe And
              <span className="subscribe-block__title-span">Get 10% Off</span>
            </h3>
            {emailDirty && emailError && (
              <div className="error-email-subscribe">{emailError}</div>
            )}
            <input
              className="subscribe-block__input"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={valueSubscribe}
              onBlur={(e) => blurEmail(e)}
              onChange={(e) => handleChangeSubscribe(e)}
              data-test-id="main-subscribe-mail-field"
            />
            {/* status === "resolved" && valueSubscribe.length > 0 */}
            { inputSubscribe ? (
              <p className="resolved-mail">Почта отправлена успешно</p>
            ) : null}
            {error ? (
              <p className="error-mail">Ошибка при отправке почты</p>
            ) : null}
            <button
              onClick={postEmailSubscribe}
              type="button"
              className="subscribe-block__btn"
              disabled={!formValid || status === "loading"}
              data-test-id="main-subscribe-mail-button"
            >
              Subscribe
            </button>

            {status === "loading" && (
              <div className="parent-loader-subscribe" data-test-id="loader">
                <Loader
                  type="spinner-default"
                  bgColor={"#121212"}
                  size={30}
                />
              </div>
            )}
          </div>
          <div className="subscribe__women">
            <img className="subscribe__women-img" src={women} alt="women" />
          </div>
          <div className="subscribe__men">
            <img className="subscribe__men-img" src={men} alt="men" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
