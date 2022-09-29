import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { CheckBox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons";

const schema = yup.object().shape({
  fullname: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});
const SignUpPage = () => {
  const [showPassword,setShowPassword] =useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleSignUp = (values) => {
    console.log(values);
  };
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  const handleTogglePassword = ()=>{
    setShowPassword(!showPassword);
  }
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
      <p className="mb-4 text-center lg:mb-8 text-text-2 lg:text-sm">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="fullname">Full Name *</Label>
          <Input
            control={control}
            name="fullname"
            placeholder="Nguyen Tinh"
            error={errors.fullname?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="nguyentinh14032001@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
            error={errors.password?.message}
          >
            {" "}
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-6 lg:mb-5 gap-x-5">
          <CheckBox onClick={handleToggleTerm} checked={acceptTerm}>
            {" "}
            <p className="flex-1 text-sm text-text-2">
              I agree to the
              <span className="underline text-secondary">
                {" "}
                Terms of Use{" "}
              </span>{" "}
              and have read and understand the
              <span className="underline text-secondary"> Privacy policy</span>.
            </p>
          </CheckBox>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
