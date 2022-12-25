import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import moment from "moment/moment";

import { ProfileContext } from "pages/ProfilePage";
import { baseURL } from "api/axios";
import axios from "axios";

const InfoControl = ({ setIsEdit }) => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const value = useContext(ProfileContext);
  const { profile, setIsChange } = value;

  const dataFromInfo = {
    lastname: profile?.lastName,
    firstname: profile?.firstName,
    phone: profile?.phone,
    // address: profile,
    gmail: profile?.email,
    // date: profile,
    // sex: profile,
  };

  const date = moment().format("YYYY-MM-DD");
  const gmailRegExr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegExr = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  const schema = yup
    .object({
      lastname: yup.string(),
      firstname: yup.string(),
      phone: yup
        .string()
        .matches(phoneRegExr, "Số điện thoại không hợp lệ")
        .nullable(),
      address: yup.string(),
      gmail: yup
        .string()
        .required("Hãy nhập gmail")
        .matches(gmailRegExr, "Gmail không hợp lệ"),
      date: yup.date(),
      sex: yup.string(),
    })
    .required();

  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: dataFromInfo,
  });

  const options = [
    { value: "nam", label: "nam" },
    { value: "nữ", label: "nữ" },
  ];

  const handleChange = (e) => {
    setValue("sex", e.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    async function putData() {
      try {
        await axios({
          method: "put",
          url: `${baseURL}/api/profiles?email=${data?.gmail}&firstName=${data?.firstname}&lastName=${data?.lastname}&phone=${data?.phone}`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    putData();
    setIsEdit(false);
    reset({});
    setIsChange(true);
  };
  const handleCancle = () => {
    setIsEdit(false);
  };

  return (
    <>
      <h1 className="my-4 p-2 text-[24px] font-bold">
        Thay đổi thông tin của bạn
      </h1>
      <form
        className="flex w-full flex-col items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex">
          <input
            className="my-2 mr-2 w-full rounded-xl border-[1px] p-2"
            type="text"
            {...register("lastname")}
            placeholder="Hãy nhập họ ..."
          ></input>
          {errors && <p className="errors">{errors?.lastname?.message}</p>}

          <input
            className="my-2 w-full rounded-xl border-[1px] p-2"
            type="text"
            {...register("firstname")}
            placeholder="Hãy nhập tên ..."
          ></input>
          {errors && <p className="errors">{errors?.firstname?.message}</p>}
        </div>

        <input
          className="my-2 w-full rounded-xl border-[1px] p-2"
          type="text"
          {...register("phone")}
          placeholder="Hãy nhập điện thoại ..."
        ></input>
        {errors && <p className="errors">{errors?.phone?.message}</p>}

        <input
          className="my-2 w-full rounded-xl border-[1px] p-2"
          type="text"
          {...register("address")}
          placeholder="Hãy nhập địa chỉ ..."
        ></input>
        {errors && <p className="errors">{errors?.address?.message}</p>}

        <input
          className="my-2 w-full rounded-xl border-[1px] p-2"
          type="text"
          {...register("gmail")}
          placeholder="Hãy nhập email ..."
        ></input>
        {errors && <p className="errors">{errors?.gmail?.message}</p>}

        <input
          type="date"
          defaultValue={date}
          {...register("date")}
          className="py-4"
        />

        <Select
          options={options}
          onChange={handleChange}
          defaultValue={{ value: "Giới tính", label: "Giới tính" }}
          className="py-4"
        />
        {errors && <p className="errors">{errors?.sex?.message}</p>}

        <div className="flex">
          <button
            type="submit"
            className="mt-4 w-fit rounded-lg bg-[#40CA87] py-2 px-4 font-bold text-white"
          >
            Cập nhật
          </button>

          <button
            className="mt-4 w-fit rounded-lg bg-[red] py-2 px-4 font-bold text-white"
            onClick={handleCancle}
          >
            Huỷ
          </button>
        </div>
      </form>
    </>
  );
};

export default InfoControl;
