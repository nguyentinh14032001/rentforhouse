import React from "react";
import PropTypes from "prop-types";
const Toggle = (props) => {
  const { on, onClick, ...rest } = props;

  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        onClick={onClick}
        className="hidden-input"
        onChange={() => {}}
      />
      <div
        className={`relative inline-block h-[42px] w-[100px] cursor-pointer rounded-full p-1 transition-all ${
          on ? "bg-green-500" : "bg-gray-300"
        }`}
        {...rest}
      >
        <span
          className={`ml-[-42px] inline-block h-[34px] w-[34px] rounded-full bg-white transition-all ${
            on ? "translate-x-[48px]" : ""
          }`}
        ></span>
      </div>
    </label>
  );
};
Toggle.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Toggle;
