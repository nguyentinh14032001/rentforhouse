import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-b-transparent border-t-transparent"></div>
  ) : (
    children
  );

  let defaultBtnClassName =
    "flex justify-center min-h-[56px] items-center rounded-2xl p-4 text-base font-semibold";

  switch (rest.kind) {
    case "primary":
      defaultBtnClassName = defaultBtnClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultBtnClassName = defaultBtnClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultBtnClassName =
        defaultBtnClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultBtnClassName} ${className}`}>
        {child}
      </Link>
    );

  return (
    <button
      className={`${defaultBtnClassName} ${className} ${
        !!isLoading ? "pointer-events-none opacity-50" : ""
      }  `}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
