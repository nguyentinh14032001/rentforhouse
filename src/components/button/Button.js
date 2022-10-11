import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
}) => {
  const child = !!isLoading ? (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-b-transparent border-t-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      className={`flex min-h-[56px] items-center   ${
        !!isLoading ? "pointer-events-none opacity-50" : ""
      }  text-white ${className} justify-center rounded-full p-4 text-base font-semibold`}
      type={type}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;
