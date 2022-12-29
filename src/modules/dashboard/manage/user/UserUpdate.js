import Button from "../../../../components/button/Button";
import Radio from "../../../../components/checkbox/Radio";
import Field from "../../../../components/field/Field";
import FieldCheckboxes from "../../../../components/field/FieldCheckboxes";
import { Input } from "../../../../components/input";
import { Label } from "../../../../components/label";
import DashboardHeading from "../../DashboardHeading";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../../../../api/axios";

const UserUpdate = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    register,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      username: "",
      createdAt: new Date(),
    },
  });
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [params] = useSearchParams();
  const [role, setRole] = useState([]);
  const [selectRole, setSelectRole] = useState("");
  const userId = params.get("id");
  const [isChecked, setIsChecked] = useState("");

  const [userDataUpdate, setUserDataUpdate] = useState("");
  const watchStatus = watch("status");
  const watchRole = watch("role");
  console.log(watchRole);
  const imageUrl = getValues("avatar");
  const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
  const imageName = imageRegex?.length > 0 ? imageRegex[1] : "";
  console.log(watchStatus);
  // const { image, setImage, progress, handleSelecteImage, handleDeleteImage } =
  //   useFireBaseImage(setValue, getValues, imageName);
  //delete Avatar

  // useEffect(() => {
  //   setImage(imageUrl);
  // }, [imageUrl, setImage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/users/${Number(userId)}`,
          headers: {
            Authorization: userData.access_token,
          },
        }).then(function (response) {
          console.log(response);
          setUserDataUpdate(response?.data?.data);
          reset({
            ...response?.data?.data,
          });
          setSelectRole(response?.data?.data?.roles);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reset, userData.access_token, userId]);

  selectRole?.length > 0 &&
    selectRole?.forEach((element) => {
      element.active = true;
    });
  role.length > 0 &&
    role.forEach((element) => {
      element.active = false;
    });
  console.log(role);
  console.log("ok", selectRole);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/role`,
          headers: {
            Authorization: userData.access_token,
          },
        }).then(function (response) {
          console.log(response);
          setRole(response?.data?.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleChangeCheckBox = (selectRole) => {
    console.log(selectRole);
    const newRole = [];
    setSelectRole((prev) => {
      return prev.map((item) => {
        if (item?.id === selectRole.id) {
          return { ...item, active: !item?.active };
        } else {
          return { item, ...selectRole };
        }
      });
    });
  };

  const RenderRole = () => {
    return (
      role &&
      role?.length > 0 &&
      role?.map((item) => (
        <div
          onClick={() => handleChangeCheckBox(item)}
          className="flex cursor-pointer items-center gap-4"
          key={item?.id}
        >
          <div className="relative min-h-[24px] w-[24px]   rounded-md border-[1px] border-solid border-gray-400">
            <input type="checkbox" className="hidden-input" />
            {selectRole &&
              selectRole?.map(
                (item1) =>
                  item1?.id === item?.id && (
                    <>
                      <div className="productInputBefore absolute inset-0 z-[1] bg-[#15803d]"></div>
                      <div className="productInputAfter absolute inset-0 z-[2] items-center justify-center text-white ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </>
                  )
              )}
          </div>
          <label for="Admin" className=" cursor-pointer ">
            {item?.description}
          </label>
        </div>
      ))
    );
  };
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [preViewImage, setPreViewImage] = useState("");
  console.log(preViewImage.preview);
  const handleChange = (e) => {
    const imageUpload = e.target.files[0];
    imageUpload.preview = URL.createObjectURL(imageUpload);
    setPreViewImage(imageUpload);
  };
  console.log(preViewImage);
  // const handleUploadImage = async () => {
  //   const h = {};
  //   const bodyFormData = new FormData();
  //   bodyFormData.append("image", preViewImage);
  //   console.log("file" + preViewImage);

  //   const response = await axios({
  //     method: "put",
  //     url: `${baseURL}/api/users/${Number(userDataUpdate?.id)}?`,
  //     data: bodyFormData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  //   console.log(response);
  //   const imageData = response.data;
  //   // if (!imageData) {
  //   //   toast.error("Can not upload image to imgbbAPI");
  //   //   return;
  //   // }
  //   // const imageObj = {
  //   //   medium: imageData.medium.url,
  //   //   thumb: imageData.thumb.url,
  //   //   url: imageData.url,
  //   // };
  //   // console.log(imageData);
  //   // onChange(name, imageObj);
  //   // await axios
  //   //   .post(
  //   //     "http://localhost:8080/uploadFile",
  //   //     { bodyFormData },
  //   //     {
  //   //       "Content-Type": "multipart/form-data",
  //   //     }
  //   //   )
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   });
  // };
  const handleUpdateUser = async (values) => {
    console.log();
    // file.preview = URL.createObjectURL(file);
    // setPreViewImage(file);
    const cloneValues = { ...values };
    // const imageUpload = values.image1[0];
    // console.log(imageUpload);
    // imageUpload.preview = URL.createObjectURL(imageUpload);
    // setPreViewImage(imageUpload);
    // setLoading(true);
    console.log(values);
    let bodyFormData = new FormData();
    bodyFormData.append("image", preViewImage);
    console.log(bodyFormData);
    try {
      await axios({
        method: "put",
        url: `${baseURL}/api/users/${Number(userDataUpdate?.id)}?email=${
          cloneValues.email
        }&firstName=${cloneValues.firstName}&lastName=${
          cloneValues.lastName
        }&phone=${cloneValues.phone}&userName=${
          cloneValues.userName
        }&password=${cloneValues.password}&status=${Number(
          watchStatus
        )}&roles=${selectRole[0]?.name}`,
        data: bodyFormData,
        headers: {
          Authorization: userData.access_token,
          "Content-Type": "multipart/form-data",
        },
      })
        .then(function (response) {
          toast.success("Sửa người dùng thành công");
          console.log(response);
          setLoading(false);
        })
        .catch(function (response) {
          console.log(response);
          toast.error("Sửa người dùng thất bại");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DashboardHeading
        title="Update user"
        desc="Update user infomation"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdateUser)} autoComplete="off">
        <div className="mx-auto mb-10 h-[200px] w-[200px] rounded-full">
          <label
            className={`group relative flex h-full min-h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden !rounded-full rounded-lg  border border-dashed bg-gray-100`}
          >
            <input type="file" onChange={handleChange} className="hidden" />

            {!preViewImage ||
              (!userDataUpdate?.image && (
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
              ))}
            {preViewImage || userDataUpdate?.image ? (
              <img
                src={preViewImage.preview || userDataUpdate?.image}
                className="h-full w-full object-cover "
                alt=""
              />
            ) : (
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
          </label>
        </div>
        <div className="form-layout">
          <div className="flex gap-x-3">
            <Field>
              <Label>Họ đệm</Label>
              <Input
                name="lastName"
                placeholder="Enter your fullname"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label>Tên</Label>
              <Input
                name="firstName"
                placeholder="Enter your fullname"
                control={control}
              ></Input>
            </Field>
          </div>
          <Field>
            <Label>Username</Label>
            <Input
              name="userName"
              placeholder="Enter your username"
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              control={control}
              type="email"
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Trạng thái</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === 1}
                value={1}
              >
                Hoạt động
              </Radio>

              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === 0}
                value={0}
              >
                Khóa
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Quyền</Label>
            <FieldCheckboxes>
              {/* {role &&
                role.length > 0 &&
                role.map((item) => (
                  <CheckBox
                    name="role"
                    onClick={handleToggleTerm}
                    checked={acceptTerm}
                    value={item?.id}
                  >
                    {item?.description}
                  </CheckBox>
                ))} */}
              <RenderRole />
            </FieldCheckboxes>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Số điện thoại</Label>
            <Input name="phone" control={control}></Input>
          </Field>
        </div>
        <Button
          isLoading={loading}
          disabled={loading}
          kind="primary"
          type="submit"
          className="mx-auto w-[200px]"
        >
          Update user
        </Button>
      </form>
    </div>
  );
};

export default UserUpdate;
