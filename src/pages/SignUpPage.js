import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 text-text-3 lg:text-sm">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 font-semibold border rounded-lg lg:mb-5 text-text-2 gap-x-3 border-strock">
        <img srcSet="/icon-google.png 2x" alt="" />
        <span className="">Sign up with Google</span>
      </button>
      <p className="mb-4 text-center lg:mb-8 text-text-2 lg:text-sm">Or sign up with email</p>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
