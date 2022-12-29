import React, { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "react-router-dom";
import FormRow from "../../../components/common/FormRow";
import FormGroup from "../../../components/common/FormGroup";
import Dropdown from "../../../components/dropdown/Dropdown";
import { Label } from "../../../components/label";
import Button from "../../../components/button/Button";
import { Input } from "../../../components/input";
import { baseURL } from "../../../api/axios";
import { imgbbAPI } from "../../../config/config";
import Select from "../../../components/dropdown/Select";
import List from "../../../components/dropdown/List";
import Option from "../../../components/dropdown/Option";

Quill.register("modules/imageUploader", ImageUploader);
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên căn hộ"),
  floor: yup
    .number()
    .typeError("Vui lòng nhập số")
    .required("Không được bỏ trống"),
  // image1: yup
  //   .mixed()
  //   .required("Vui lòng chọn hình ảnh")
  //   .test("a", "b", (value) => {
  //     console.log(value);
  //     return value && value[0].size <= 200000;
  //   }),
});

const HouseAddNew = () => {
  const [params] = useSearchParams();
  const [isChange, setIsChange] = useState(false);
  const houseId = params.get("id");
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      detailSumary: "xzxczxc",
    },
  });
  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };
  console.log(errors);
  const [categoriesData, setCategoriesData] = useState([]);
  const [description, setDescription] = useState(false);
  const [house, setHouse] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const handleSelectCategories = (value, value1) => {
    setValue("typeIds", value);
    setValue("nameCategories", value1);
    setSelectCategory();
  };
  const handleSelectAddress = (name1, name2, value1, value2) => {
    setValue(name1, value1);
    setValue(name2, value2);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],

      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const [preViewImage, setPreViewImage] = useState("");
  const [preViewImage1, setPreViewImage1] = useState("");
  const [preViewImage3, setPreViewImage3] = useState("");
  const [preViewImage4, setPreViewImage4] = useState("");
  const [preViewImage5, setPreViewImage5] = useState("");

  const handleChange = (e) => {
    const imageUpload = e.target.files[0];
    imageUpload.preview = URL.createObjectURL(imageUpload);
    setPreViewImage(imageUpload);
  };
  const handleChange1 = (e) => {
    const imageUpload = e.target.files[0];
    imageUpload.preview = URL.createObjectURL(imageUpload);
    setPreViewImage1(imageUpload);
  };
  const handleChange3 = (e) => {
    const imageUpload = e.target.files[0];
    imageUpload.preview = URL.createObjectURL(imageUpload);
    setPreViewImage3(imageUpload);
  };
  const handleChange4 = (e) => {
    const imageUpload = e.target.files[0];
    imageUpload.preview = URL.createObjectURL(imageUpload);
    setPreViewImage4(imageUpload);
  };
  const handleChange5 = (e) => {
    const imageUpload = e.target.files[0];
    imageUpload.preview = URL.createObjectURL(imageUpload);
    setPreViewImage5(imageUpload);
  };

  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const handleAddHouse = async (values) => {
    const cloneValues = { ...values };
    console.log(cloneValues);
    const price = Number(cloneValues?.price);
    // const image = String(cloneValues?.image?.url);

    const formData = new FormData();

    formData.append("image", preViewImage);
    formData.append("image2", preViewImage1);
    formData.append("image3", preViewImage3);
    formData.append("image4", preViewImage4);
    formData.append("image5", preViewImage5);
    try {
      await axios({
        method: "post",
        url: `${baseURL}/api/houses?address=${cloneValues.address}&area=${
          cloneValues.area
        }&description=${description}&floor=${cloneValues.floor}&name=${
          cloneValues.name
        }&price=${price}&roomNumber=${Number(cloneValues.roomNumber)}&toilet=${
          cloneValues.toilet
        }&codeHouseType=${cloneValues.typeIds}`,
        data: formData,
        headers: {
          Authorization: userData.access_token,
          "Content-Type": "multipart/form-data",
        },
      })
        .then(function (response) {
          console.log(response);
          reset({});
          toast.success("Thêm căn hộ thành công");
          setPreViewImage("");
          setPreViewImage1("");
          setPreViewImage3("");
          setPreViewImage4("");
          setPreViewImage5("");
        })
        .catch(function (response) {
          toast.error("Thêm căn hộ thất bại");
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houseTypes`,
        })
          .then(function (response) {
            setCategoriesData(response?.data?.data);
            console.log(response?.data?.data);
          })
          .catch(function (response) {
            toast.error("a");
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    reset({
      ...house,
    });
    setSelectCategory(house?.houseTypes);
    setDescription(house?.description);
  }, [house, reset, setValue]);
  console.log(errors?.image1?.name?.message);
  return (
    <div className="rounded-xl bg-lite  py-10 px-[66px]">
      <div className="text-center">
        <h1 className="mb-10 inline-block rounded-xl bg-white py-4 px-[60px] text-center text-[25px]  font-semibold">
          Thêm căn hộ 🏘️
        </h1>
        <form onSubmit={handleSubmit(handleAddHouse)}>
          <FormRow>
            <FormGroup>
              <Label>Tên căn hộ* </Label>
              <Input
                control={control}
                name="name"
                placeholder="Nhập tên căn hộ"
                error={errors.name?.message}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label>Chọn loại căn hộ* </Label>
              <Dropdown>
                <Select
                  placeholder={
                    selectCategory?.name ||
                    getDropdownLabel("nameCategories") ||
                    "Chọn loại căn hộ"
                  }
                ></Select>
                <List>
                  {categoriesData &&
                    categoriesData?.map((category) => (
                      <Option
                        key={category?.id}
                        onClick={() =>
                          handleSelectCategories(category?.code, category?.name)
                        }
                      >
                        <span className="capitalize">{category?.name}</span>
                      </Option>
                    ))}
                </List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Nhà vệ sinh* </Label>
              <Input control={control} name="toilet" placeholder="...."></Input>
            </FormGroup>
            <FormGroup>
              <Label>Số phòng* </Label>
              <Input
                control={control}
                name="roomNumber"
                placeholder="Số phòng "
              ></Input>
            </FormGroup>
          </FormRow>
          <div className="flex gap-x-3">
            <FormGroup>
              <Label>Hình ảnh* </Label>
              <div className="mx-auto mb-10 h-[200px] w-[175px] rounded-full">
                <label
                  className={`group relative flex h-full min-h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden  rounded-lg  border border-dashed bg-gray-100`}
                >
                  <input
                    type="file"
                    onChange={handleChange}
                    className="hidden"
                    name="image1"
                  />
                  {errors?.image1?.name?.message && !preViewImage && (
                    <p className="text-red-500">Hình ảnh không được để trống</p>
                  )}
                  {!preViewImage &&
                    !house?.image &&
                    !errors?.image1?.name?.message && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    )}
                  {preViewImage || house?.image ? (
                    <img
                      src={preViewImage?.preview || house?.image}
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Hình ảnh* </Label>
              <div className="mx-auto mb-10 h-[200px] w-[175px] rounded-full">
                <label
                  className={`group relative flex h-full min-h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden  rounded-lg  border border-dashed bg-gray-100`}
                >
                  <input
                    type="file"
                    onChange={handleChange1}
                    className="hidden"
                  />

                  {!preViewImage1 && !house?.image2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  )}
                  {preViewImage1 || house?.image2 ? (
                    <img
                      src={preViewImage1?.preview || house?.image2}
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Hình ảnh* </Label>
              <div className="mx-auto mb-10 h-[200px] w-[175px] rounded-full">
                <label
                  className={`group relative flex h-full min-h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden  rounded-lg  border border-dashed bg-gray-100`}
                >
                  <input
                    type="file"
                    onChange={handleChange3}
                    className="hidden"
                  />

                  {!preViewImage3 && !house?.image3 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  )}
                  {preViewImage3 || house?.image3 ? (
                    <img
                      src={preViewImage3?.preview || house?.image3}
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Hình ảnh* </Label>
              <div className="mx-auto mb-10 h-[200px] w-[175px] rounded-full">
                <label
                  className={`group relative flex h-full min-h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden  rounded-lg  border border-dashed bg-gray-100`}
                >
                  <input
                    type="file"
                    onChange={handleChange4}
                    className="hidden"
                  />

                  {!preViewImage4 && !house?.image4 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  )}
                  {preViewImage4 || house?.image4 ? (
                    <img
                      src={preViewImage4?.preview || house?.image4}
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Hình ảnh* </Label>
              <div className="mx-auto mb-10 h-[200px] w-[175px] rounded-full">
                <label
                  className={`group relative flex h-full min-h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden  rounded-lg  border border-dashed bg-gray-100`}
                >
                  <input
                    type="file"
                    onChange={handleChange5}
                    className="hidden"
                  />

                  {!preViewImage5 && !house?.image5 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  )}
                  {preViewImage5 || house?.image5 ? (
                    <img
                      src={preViewImage5?.preview || house?.image5}
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </FormGroup>
          </div>
          <FormGroup>
            <Label>Chi tiết căn hộ* </Label>
            <ReactQuill
              placeholder="writer detail house"
              modules={modules}
              theme="snow"
              value={description}
              onChange={setDescription}
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Label>Price*</Label>
              <Input
                control={control}
                name="price"
                placeholder="Price...."
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label>Diện tích* </Label>
              <Input
                control={control}
                name="area"
                placeholder="Nhập tên căn hộ"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Địa chỉ</Label>
              {/* <FormThreeCol>
              <FormGroup>
                <Dropdown>
                  <Dropdown.Select
                    placeholder={getDropdownLabel("province") || "Tỉnh"}
                  ></Dropdown.Select>
                  <Dropdown.List>
                    {provinces &&
                      provinces.map((item) => (
                        <Dropdown.Option
                          key={item.name}
                          onClick={() =>
                            handleSelectAddress(
                              "province",
                              "provinceCode",
                              item.name,
                              item.code
                            )
                          }
                        >
                          <span className="capitalize">{item.name}</span>
                        </Dropdown.Option>
                      ))}
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Dropdown>
                  <Dropdown.Select
                    placeholder={getDropdownLabel("district") || "Thành phố"}
                  ></Dropdown.Select>
                  <Dropdown.List>
                    {districts &&
                      districts.map((item) => (
                        <Dropdown.Option
                          key={item.name}
                          onClick={() =>
                            handleSelectAddress(
                              "district",
                              "districtCode",
                              item.name,
                              item.code
                            )
                          }
                        >
                          <span className="capitalize">{item.name}</span>
                        </Dropdown.Option>
                      ))}
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>

              <FormGroup>
                <Dropdown>
                  <Dropdown.Select
                    placeholder={getDropdownLabel("ward") || "Phường/Xã"}
                  ></Dropdown.Select>
                  <Dropdown.List>
                    {wards &&
                      wards.map((item) => (
                        <Dropdown.Option
                          key={item.name}
                          onClick={() =>
                            handleSelectAddress(
                              "ward",
                              "wardCode",
                              item.name,
                              item.code
                            )
                          }
                        >
                          <span className="capitalize">{item.name}</span>
                        </Dropdown.Option>
                      ))}
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
            </FormThreeCol> */}

              <Input
                control={control}
                name="address"
                placeholder="Nhập địa chỉ căn hộ"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Số tầng</Label>
              <Input
                control={control}
                name="floor"
                error={errors.floor?.message}
                placeholder="03"
              ></Input>
            </FormGroup>
          </FormRow>
          <Button
            kind="primary"
            className="mx-auto bg-green-600 px-10 text-white"
            type="submit"
          >
            Thêm căn hộ
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HouseAddNew;
