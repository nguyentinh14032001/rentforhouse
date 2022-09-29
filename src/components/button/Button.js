import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full animate-spin border-b-transparent border-t-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      className={`items-center flex ${!!isLoading ? "opacity-50 pointer-events-none": ""}  text-white ${className} justify-center p-4 text-base font-semibold rounded-xl`}
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
