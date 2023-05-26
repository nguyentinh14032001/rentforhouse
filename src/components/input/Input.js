import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import ClassName from "../../hooks/ClassName";
import ErrorComponent from "../common/ErrorComponent";

const Input = (props) => {
  const {
    control,
    error = "",
    name,
    children,
    type = "text",
    placeholder,
    className = "",
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative w-full">
      <input
        id={name}
        {...field}
        type={type}
        autoComplete="off"
        placeholder={error?.length <= 0 ? placeholder : ""}
        {...rest}
        className={ClassName(
          `w-full  ${className} rounded-xl border p-[16px] text-sm font-medium placeholder:text-text-4 dark:bg-transparent dark:text-white placeholder:dark:text-text-1`,
          error?.length > 0
            ? "border-[2px] border-error text-error"
            : "border-strock text-text-1 dark:border-darkStroke",
          children ? "pr-16" : ""
        )}
      />
      {error?.length > 0 && (
        <span className="input-error pointer-events-none absolute left-[24px] top-2/4 -translate-y-2/4 text-sm font-medium text-error">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute top-2/4 right-6 -translate-y-2/4 cursor-pointer select-none pl-[16px] ">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  fallbackComponent: ErrorComponent,
});
