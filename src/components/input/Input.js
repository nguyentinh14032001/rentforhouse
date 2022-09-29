import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    control,
    error = "",
    name,
    children,
    type = "text",
    placeholder,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        {...field}
        type={type}
        autoComplete="off"
        placeholder={error.length < 0 ? placeholder : ""}
        {...rest}
        className={`w-full ${
          error.length > 0 ? "border-[2px] border-error" : "border-strock"
        } px-6 py-4 ${
          children ? "pr-16" : ""
        } text-sm font-medium border placeholder:text-text-4 text-text-1 rounded-xl`}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none input-error left-6 top-2/4 -translate-y-2/4 text-error">
          {error}
        </span>
      )}
      <span className="absolute pl-4 cursor-pointer top-2/4 right-6 -translate-y-2/4">
        {children}
      </span>
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;
