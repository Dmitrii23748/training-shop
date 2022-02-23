import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./CheckBox.css";

function CheckBox(props) {
  const inputRef = useRef(null);
  const handleChange = () => {
      if(props.onChange) {
        props.onChange(inputRef.current);
      }
  } 
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={handleChange}
        checked={props.checked}
      />
      <span className="custom-checkbox__checkmark"></span>
      {props.label}
    </label>
  );
}

export default CheckBox;

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
