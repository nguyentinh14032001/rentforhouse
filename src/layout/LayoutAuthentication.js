import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="absolute bottom-0 right-0 left-0 w-full pointer-events-none z-[-1]"
      />
      <Link to="/">
        <img
          src="/Logo.png"
          alt="logo"
          className="inline-block mb-5 lg:mb-16"
        />
     
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl p-6 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:mb-3 text-text-1 lg:text-xl">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent:ErrorComponent
});
