import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
const ButtonGoogle = ({ text = "Sign up with Google", onClick = () => {} }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="mb-5 flex w-full items-center justify-center gap-x-3 rounded-lg border border-strock py-4 font-semibold text-text-2 dark:border-darkStroke dark:text-white lg:mb-5"
      >
        <img srcSet="/icon-google.png 2x" alt="" />
        <span className="">{text}</span>
      </button>
    </div>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
