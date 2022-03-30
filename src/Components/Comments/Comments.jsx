/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./Comments.css";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { setRating, postComments, setResolved } from "../../redux/commets/commetsSlice";
import Loader from "react-js-loader";
import { getAllProducts } from "../../redux/products/productsSlice";

function Comments({ id, setComments }) {
  const dispatch = useDispatch();

  const ratingRedux = useSelector((state) => state.comments.rating);
  const { status, error } = useSelector((state) => state.comments);
  const ratingChanged = (newRating) => {
    dispatch(setRating(newRating));
  };

  const validationComments = yup.object().shape({
    name: yup.string().required("Введите имя"),
    text: yup.string().required("Введите комментарий"),
  });

  useEffect(() => {
    if (status === "loading") {
      setComments(true);
    } else if (status === "resolved") {
      setComments(false);
      dispatch(setResolved(null))
    } else if (status === "rejected") {
      setComments(true);
    }
    
  }, [status]);
  

  return (
    <div className="comments-block" onClick={(e) => e.stopPropagation()} data-test-id="review-modal">
      <h1>Write a review</h1>
      <div className="comments-stars-block">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={34}
          activeColor="#ffd700"
          value={1}
        />
      </div>
      <Formik
        initialValues={{
          id: id,
          name: "",
          text: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          const objComments = {
            ...values,
            rating: ratingRedux,
          };
          dispatch(postComments(objComments));
        }}
        validationSchema={validationComments}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <>
            <p>
              <input
                className="commets-name"
                type="text"
                placeholder="Имя"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                data-test-id="review-name-field"
              />
            </p>
            {touched.name && errors.name && (
              <p className="name-error">{errors.name}</p>
            )}
            <p>
              <textarea
                className="commets-text"
                type="text"
                placeholder="Комментарий"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                data-test-id="review-text-field"
              />
            </p>
            {touched.text && errors.text && (
              <p className="name-error">{errors.text}</p>
            )}
            <button
              className="btn-comments"
              disabled={
                !isValid ||
                values.text.length === 0 ||
                values.name.length === 0 ||
                status === "loading"
              }
              onClick={() => {
                handleSubmit();
              }}
              type="submit"
              data-test-id="review-submit-button"
            >
              Send
            </button>
            {status === "loading" && (
              <div className="parent-loader-comments" data-test-id="loader">
                <Loader type="spinner-default" bgColor={"#121212"} size={30} />
              </div>
            )}
            {error ? (
              <p className="error-mail">Ошибка при отправке комментария</p>
            ) : null}
          </>
        )}
      </Formik>
    </div>
  );
}

export default Comments;


Comments.propTypes = {
  id: PropTypes.string.isRequired,
  setComments: PropTypes.func.isRequired
};
