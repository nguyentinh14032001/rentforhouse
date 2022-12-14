import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment/moment";

import PostHouseControl from "./PostHouseControl";
import postdata from "assets/data/posthouses.json";
import { baseURL } from "api/axios";
import axios from "axios";

const PostHouse = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const [file, setFile] = useState([]);
  const [image, setImage] = useState([]);

  const date = moment().format("YYYY-MM-DD");
  const gmailRegExr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegExr = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  const schema = yup
    .object({
      name: yup.string(),
      address: yup.string(),
      area: yup.string(),
      description: yup.string(),
      floor: yup.string(),
      price: yup.number(),
      roomNumber: yup.number(),
      toilet: yup.string(),
      typeHouses: yup.array(),
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
  });

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();

    formData.append("image", file[0]);
    formData.append("image2", file[1]);
    formData.append("image3", file[2]);
    formData.append("image4", file[3]);
    formData.append("image5", file[4]);

    const fetchApi = async () => {
      try {
        await axios({
          method: "post",
          url: `${baseURL}/api/houses?address=${data?.address}&area=${data?.area}&description=${data?.description}&floor=${data?.floor}&name=${data?.name}&price=${data?.price}&roomNumber=${data?.roomNumber}&toilet=${data?.toilet}&typeHouses=${data?.typeHouses}`,
          data: formData,
          headers: {
            Authorization: userData.access_token,
            "Content-Type": "multipart/form-data",
          },
        })
          .then(function (response) {
            console.log(response?.data?.data);
            reset({
              name: "",
              description: "",
              address: "",
              area: "",
              floor: "",
              price: "",
              roomNumber: "",
              toilet: "",
              typeHouses: "",
            });
            setFile([]);
            setImage([]);
          })
          .catch(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    };

    // const fetchApi = async () => {
    //   try {
    //     await axios
    //       .post(`${baseURL}/api/houses`, formData, {
    //         params: {
    //           description: data?.description,
    //           area: data?.area,
    //           address: data?.address,
    //           floor: data?.floor,
    //           name: data?.name,
    //           price: data?.price,
    //           roomNumber: data?.roomNumber,
    //           toilet: data?.toilet,
    //           typeHouses: data?.typeHouses,
    //         },
    //         headers: {
    //           Authorization: userData.access_token,
    //           "Content-Type": "multipart/form-data",
    //         },
    //       })
    //       .then((res) => {
    //         console.log(res);
    //       });
    //   } catch (error) {}
    // };
    fetchApi();
  };

  const handleImage = (e) => {
    if (file?.length < 5) {
      setFile((prev) => [...prev, e.target.files[0]]);
    }
    // setFile(e.target.files[0]);
    if (image?.length < 5) {
      setImage((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
    }
  };

  console.log("image", image);
  console.log("file", file);

  return (
    <div className="my-[10vh]">
      <form
        className="flex w-full flex-col items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        {postdata &&
          postdata.map((item) => (
            <PostHouseControl
              key={item?.id}
              data={item}
              register={register}
              setValue={setValue}
              handleImage={handleImage}
              image={image}
            />
          ))}
        {/* {errors && Object.keys(errors).find((e) => e == item?.name) && (
                <p className="errors">{Object.values(errors)}</p>
              )} */}
        <div className="flex">
          <button
            type="submit"
            className="mt-4 w-fit rounded-lg bg-[#40CA87] py-2 px-4 font-bold text-white"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostHouse;
