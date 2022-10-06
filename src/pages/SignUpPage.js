import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import { Button, ButtonGoogle } from "components/button";
import { CheckBox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons";
import useToggleValue from "hooks/UseToggleValue";
import ClassName from "hooks/ClassName";

const schema = yup.object().shape({
  fullname: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password must be 6 character"),
});
const SignUpPage = () => {
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="SignUp">
      <p className={ClassName("mb-6 text-center text-xs font-normal text-text-3 lg:mb-8 lg:text-sm")}>
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium text-primary underline">
          Sign in
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <p className="mb-4 text-center text-text-2 dark:text-white lg:mb-8 lg:text-sm">
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
          <Label htmlFor="email">Username</Label>
          <Input
            control={control}
            name="username"
            placeholder="tinhqn1998"
            error={errors.username?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="mb-6 flex items-start gap-x-5 lg:mb-5">
          <CheckBox onClick={handleToggleTerm} checked={acceptTerm}>
            <p className="flex-1 text-xs text-text-2 dark:text-text-3 lg:text-sm">
              <span>I agree to the </span>
              <span className="text-secondary underline">Terms of Use</span>
              <span> and have read and understand the </span>
              <span className="text-secondary underline"> Privacy policy</span>.
            </p>
          </CheckBox>
        </div>
        <Button type="submit"  className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
