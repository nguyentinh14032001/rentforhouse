import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="relative isolate min-h-screen w-full bg-lite p-10 dark:bg-darkbg">
      <img
        src="/ellipse.png"
        alt="bg"
        className="pointer-events-none absolute bottom-0 right-0 left-0 z-[-1] hidden w-full lg:block"
      />
      <Link to="/">
        <img
          srcSet="/Logo.png 2x"
          alt="logo"
          className="mb-5 inline-block lg:mb-16"
        />
      </Link>
      <div className="mx-auto w-full max-w-[556px] rounded-xl bg-white p-6 dark:bg-darkSecondary lg:px-16 lg:py-12">
        <h1 className="mb-1 text-center text-lg font-semibold text-text-1 dark:text-white lg:mb-3 lg:text-xl">
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
  FallbackComponent: ErrorComponent,
});
