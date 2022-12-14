import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { baseURL } from "../../../../api/axios";

import Button from "../../../../components/button/Button";
import Radio from "../../../../components/checkbox/Radio";
import Field from "../../../../components/field/Field";
import FieldCheckboxes from "../../../../components/field/FieldCheckboxes";
import { Input } from "../../../../components/input";
import { Label } from "../../../../components/label";
import DashboardHeading from "../../DashboardHeading";

const UserAddNew = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,

    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      username: "",
    },
  });
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [role, setRole] = useState([]);
  const [selectRole, setSelectRole] = useState([]);
  const [userDataUpdate, setUserDataUpdate] = useState("");
  const watchStatus = watch("status");
  const watchRole = watch("role");

  selectRole?.length > 0 &&
    selectRole?.forEach((element) => {
      element.active = true;
    });

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
  const handleChangeCheckBox = (item1) => {
    setSelectRole((prev) => [...prev, item1]);
    // setSelectRole((prev) => {
    //   return prev.map((item) => {
    //     if (item?.id === item1.id) {
    //       return { ...item, active: !item?.active };
    //     } else {
    //       return [...item];
    //     }
    //   });
    // });
  };

  const RenderRole = () => {
    return (
      role &&
      role.length > 0 &&
      role.map((item) => (
        <div
          onClick={() => handleChangeCheckBox(item)}
          className="flex cursor-pointer items-center gap-4"
          key={item?.id}
        >
          <div className="relative min-h-[24px] w-[24px]   rounded-md border-[1px] border-solid border-gray-400">
            <input type="checkbox" className="hidden-input" />
            {selectRole.length > 0 &&
              selectRole.map(
                (item1) =>
                  item1?.id === item?.id &&
                  item1.active === true && (
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
  const [loading, setLoading] = useState(false);
  const [preViewImage, setPreViewImage] = useState("");

  const handleChange = (e) => {
    const imageUpload = e.target.files[0];
    imageUpload.preview = URL.createObjectURL(imageUpload);
    setPreViewImage(imageUpload);
  };

  const handleUpdateUser = async (values) => {
    const cloneValues = { ...values };
    setLoading(true);
    const nameRole = [];
    selectRole.map((item) => nameRole.push(item?.name));
    let bodyFormData = new FormData();
    bodyFormData.append("image", preViewImage);

    try {
      await axios({
        method: "post",
        url: `${baseURL}/api/users?email=${cloneValues.email}&firstName=${
          cloneValues.firstName
        }&lastName=${cloneValues.lastName}&phone=${
          cloneValues.phone
        }&userName=${cloneValues.userName}&password=${
          cloneValues.password
        }&status=${Number(watchStatus)}&roles=${nameRole}`,
        data: bodyFormData,
        headers: {
          Authorization: userData.access_token,
          "Content-Type": "multipart/form-data",
        },
      })
        .then(function (response) {
          toast.success("Thêm người dùng thành công");
          setLoading(false);
        })
        .catch(function (response) {
          toast.error("Thêm người dùng thất bại");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(selectRole);
  return (
    <div>
      <DashboardHeading
        title="Thêm người dùng"
        desc="Hãy điền thông tin người dùng vào các ô dưới đây"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdateUser)} autoComplete="off">
        <div className="mx-auto mb-10 h-[200px] w-[200px] rounded-full">
          <label
            className={`group relative flex h-full min-h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden !rounded-full  border border-dashed bg-gray-100`}
          >
            <input type="file" onChange={handleChange} className="hidden" />

            {!preViewImage && !userDataUpdate?.image && (
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
            {preViewImage || userDataUpdate?.image ? (
              <img
                src={preViewImage.preview || userDataUpdate?.image}
                className="h-full w-full object-cover"
                alt=""
              />
            ) : (
              ""
            )}
          </label>
        </div>
        <div className="form-layout">
          <div className="flex gap-x-3">
            <Field>
              <Label>Họ đệm</Label>
              <Input
                name="lastName"
                placeholder="Nhập họ đệm"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label>Tên</Label>
              <Input
                name="firstName"
                placeholder="Nhập tên"
                control={control}
              ></Input>
            </Field>
          </div>
          <Field>
            <Label>Username</Label>
            <Input
              name="userName"
              placeholder="Nhập Username"
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Nhập email"
              control={control}
              type="email"
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Hãy nhập mật khẩu"
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
            <Input
              name="phone"
              control={control}
              placeholder="Nhập số điện thoại"
            ></Input>
          </Field>
        </div>
        <Button
          isLoading={loading}
          disabled={loading}
          kind="primary"
          type="submit"
          className="mx-auto w-[200px]"
        >
          Thêm người dùng
        </Button>
      </form>
    </div>
  );
};

export default UserAddNew;
