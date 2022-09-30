import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons";
import { useForm } from "react-hook-form";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";

import { Button, ButtonGoogle } from "components/button";
import useToggleValue from "hooks/UseToggleValue";
import { Input } from "components/input";

const schema = yup.object().shape({
  email: yup.string().required("").email(""),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignIn = (values) => {
    console.log(values);
  };
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Wellcome back!">
      <p className="mb-6 text-center text-xs font-normal text-text-3 lg:mb-5 lg:text-sm">
        Dont have account?{" "}
        <Link to="/sign-up" className="font-medium text-primary underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-primary">
              Fogort Password
            </span>
          </div>
        </FormGroup>
        <Button type="submit" className="w-full bg-primary">
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
