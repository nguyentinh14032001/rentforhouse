import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment/moment";
import Select from "react-select";
import { useParams } from "react-router-dom";

import SellHouseImage from "./SellHouseImage";
import { baseURL } from "api/axios";
import axios from "axios";

const PostHouse = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const { id } = useParams();

  const [isEdit, setIsedit] = useState(false);
  const [file, setFile] = useState([]);
  const [image, setImage] = useState([]);
  const [typeDefault, setTypeHouseDefault] = useState({
    value: "Chọn loại nhà",
    label: "Chọn loại nhà",
  });
  const [house, setHouse] = useState([]);

  const options = [
    { value: "nha_cho_thue", label: "nhà thuê" },
    { value: "nha_ban", label: "nhà bán" },
  ];

  const dataFromInfo = {
    // name: house?.name,
    // address: house?.address,
    // area: house?.area,
    // description: house?.description,
    // floor: house?.floor,
    // price: house?.price,
    // roomNumber: house?.roomNumber,
    // toilet: house?.toilet,
    // typeHouses: house?.houseTypes[0]?.name,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houses/${id}`,
        })
          .then(function (response) {
            setHouse(response?.data?.data);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log(house);
    setTypeHouseDefault({
      value: house?.houseType?.code,
      label: house?.houseType?.name,
    });
    setValue("name", house?.name);
    setValue("address", house?.address);
    setValue("area", house?.area);
    setValue("description", house?.description);
    setValue("floor", house?.floor);
    setValue("price", house?.price);
    setValue("roomNumber", house?.roomNumber);
    setValue("toilet", house?.toilet);
    setValue("typeHouse", [house?.houseType?.code]);
    if (house?.image != null) {
      setImage((prev) => [...prev, house?.image]);
      setImage((prev) => [...prev, house?.image2]);
      setImage((prev) => [...prev, house?.image3]);
      setImage((prev) => [...prev, house?.image4]);
      setImage((prev) => [...prev, house?.image5]);
    }
  }, [house]);

  const schema = yup
    .object({
      name: yup.string(),
      address: yup.string(),
      area: yup.number(),
      description: yup.string(),
      floor: yup.number(),
      price: yup.number(),
      roomNumber: yup.number(),
      toilet: yup.number(),
      typeHouse: yup.string(),
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
      if (id) {
        try {
          await axios({
            method: "put",
            url: `${baseURL}/api/houses/${id}?address=${data?.address}&area=${data?.area}&description=${data?.description}&floor=${data?.roomNumber}&name=${data?.name}&price=${data?.price}&roomNumber=${data?.roomNumber}&toilet=${data?.toilet}&codeHouseType=${data?.typeHouse}`,
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
                typeHouse: "",
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
      } else {
        try {
          await axios({
            method: "post",
            url: `${baseURL}/api/houses/?address=${data?.address}&area=${data?.area}&description=${data?.description}&floor=${data?.roomNumber}&name=${data?.name}&price=${data?.price}&roomNumber=${data?.roomNumber}&toilet=${data?.toilet}&codeHouseType=${data?.typeHouse}`,
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
                typeHouse: "",
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
      }
    };
    fetchApi();
  };

  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setFile((prev) => [...prev, e.target.files[0]]);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setImage((previousImages) => previousImages.concat(imagesArray));
    if (image.length > 4) {
      file.shift();
      image.shift();
    }
  };

  const selectHouseTypes = (e) => {
    setValue("typeHouse", e.value);
  };

  return (
    <div className="bg-[#FCFCFD] p-[10vh]">
      {id ? (
        <h1 className="mx-auto mb-[50px] w-fit text-[30px] font-bold">
          Sửa căn hộ
        </h1>
      ) : (
        <h1 className="mx-auto mb-[50px] w-fit text-[30px] font-bold">
          Thêm căn hộ
        </h1>
      )}

      <form
        className="flex w-full flex-col items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="col-span-2">
            <h1 className="font-bold capitalize">Tên căn hộ</h1>
            <input
              className="my-2 mr-2 w-full rounded-xl border-[1px] p-2"
              type="text"
              {...register("name")}
              placeholder="Hãy nhập tên căn nhà ..."
            />
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <h1 className="font-bold capitalize">Số phòng sinh hoạt</h1>
              <input
                className="my-2 mr-2 w-full rounded-xl border-[1px] p-2"
                type="text"
                {...register("roomNumber")}
                placeholder="Hãy nhập số phòng ..."
              />
            </div>

            <div className="col-span-1">
              <h1 className="font-bold capitalize">Số lầu</h1>
              <input
                className="my-2 mr-2 w-full rounded-xl border-[1px] p-2"
                type="text"
                {...register("floor")}
                placeholder="Hãy nhập số lầu ..."
              />
            </div>

            <div className="col-span-1">
              <h1 className="font-bold capitalize">Nhà vệ sinh</h1>
              <input
                className="my-2 mr-2 w-full rounded-xl border-[1px] p-2"
                type="text"
                {...register("toilet")}
                placeholder="Hãy nhập số phòng ..."
              />
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-3">
            <div className="col-span-1">
              <h1 className="font-bold capitalize">Giá nhà</h1>
              <div className="flex items-baseline">
                <input
                  className="my-2 mr-2 w-[50%] rounded-xl border-[1px] p-2"
                  type="text"
                  {...register("price")}
                  placeholder="Hãy nhập giá nhà ..."
                />
                <p>/VND</p>
              </div>
            </div>

            <div className="col-span-1">
              <h1 className="font-bold capitalize">Diện tích</h1>
              <div className="flex items-baseline">
                <input
                  className="my-2 mr-2 w-[50%] rounded-xl border-[1px] p-2"
                  type="text"
                  {...register("area")}
                  placeholder="Hãy nhập diện tích ..."
                />
                <p>/m2</p>
              </div>
            </div>

            <div className="col-span-1">
              <h1 className="font-bold capitalize">Tên loại căn hộ</h1>
              {typeDefault && (
                <Select
                  options={options}
                  onChange={selectHouseTypes}
                  defaultValue={typeDefault}
                  className="w-full rounded-xl"
                />
              )}
            </div>
          </div>

          <div className="col-span-2">
            <h1 className="font-bold capitalize">Hình ảnh</h1>
            <div className="flex justify-between py-2">
              <SellHouseImage
                handleChange={handleChange}
                image={image}
                setImage={setImage}
              />
            </div>
          </div>

          <div className="col-span-2">
            <h1 className="font-bold capitalize">Mô tả</h1>
            <textarea
              className="my-2 mr-2 h-[150px] w-full resize-none rounded-xl border-[1px] p-2"
              type="text"
              {...register("description")}
              placeholder="Hãy nhập mô tả ..."
            ></textarea>
          </div>

          <div className="col-span-2">
            <h1 className="font-bold capitalize">Địa chỉ</h1>
            <input
              className="my-2 mr-2 w-full rounded-xl border-[1px] p-2"
              type="text"
              {...register("address")}
              placeholder="Hãy nhập địa chỉ ..."
            />
          </div>
        </div>

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
