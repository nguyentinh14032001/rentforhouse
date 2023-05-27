import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ButtonGoogle from "../components/button/ButtonGoogle";
import FormGroup from "../components/common/FormGroup";
import { Label } from "../components/label";
import { Input } from "../components/input";
import Button from "../components/button/Button";
import useToggleValue from "../hooks/UseToggleValue";
import { baseURL } from "../api/axios";
import { IconEyeToggle } from "../components/icons";

const schema = yup.object().shape({
  username: yup.string().required(""),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password must be 6 character"),
});

const SignInPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  // const user = localStorage.getItem("user");

  // useEffect(() => {
  //   const userData = JSON.parse(user);
  //   // if (userData !== "") {
  //   //   navigate("/");
  //   // }
  // }, [navigate, user]);

  const handleSignIn = async (values) => {
    try {
      await axios({
        method: "post",
        url: `${baseURL}/api/auth/signin`,
        data: {
          ...values,
        },
      })
        .then(function (response) {
          console.log(response.data.data);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          toast.success("Đăng nhập thành công");
          navigate("/");
          setLoading(false);
        })
        .catch(function (response) {
          toast.error("Đăng nhập thất bại");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    // dispatch(authLogin(values));
    navigate("/");
  };

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  return (
    <LayoutAuthentication heading="Wellcome back!">
      <p className="mb-[24px] text-center text-xs font-normal text-text-3 lg:mb-[20px] lg:text-sm">
        Dont have account?{" "}
        <Link to="/sign-up" className="font-medium text-primary underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="username">Username *</Label>
          <Input
            control={control}
            name="username"
            placeholder="admin"
            error={errors.username?.message}
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
        <Button
          type="submit"
          isLoading={loading}
          kind="primary"
          className="w-full"
        >
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
