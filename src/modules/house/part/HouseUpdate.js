import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "components/button";
import ImageUpload from "components/Image/ImageUpload";
import { toast } from "react-toastify";
import FormThreeCol from "components/common/FormThreeCol";
import { imgbbAPI } from "config/config";
import { baseURL } from "api/axios";
import { useSearchParams } from "react-router-dom";

Quill.register("modules/imageUploader", ImageUploader);

const HouseUpdate = () => {
  const [params] = useSearchParams();
  const houseId = params.get("id");
  const { handleSubmit, control, setValue, reset, watch, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      detailSumary: "xzxczxc",
    },
  });
  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };
  const [categoriesData, setCategoriesData] = useState([]);
  const [description, setDescription] = useState(false);
  const [house, setHouse] = useState("");
  const [selectcategory, setSelectCategory] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios({
        method: "get",
        url: `${baseURL}/api/houses/${houseId}`,
      })
        .then(function (response) {
          setHouse(response?.data?.data);
        })
        .catch(function (response) {});
    }

    fetchData();
  }, [houseId, reset]);
  useEffect(() => {
    reset({
      ...house,
    });
  }, [house, reset]);
  const handleSelectCategories = (value, value1) => {
    setValue("typeIds", value);
    setValue("nameCategories", value1);
  };
  const handleSelectAddress = (name1, name2, value1, value2) => {
    setValue(name1, value1);
    setValue(name2, value2);
  };

  console.log(house);
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
  //const [addressFilter, handleOnChangeValue] = useOnChange();

  const HOST = "https://provinces.open-api.vn/api/";

  const getProvince = getValues("provinceCode");
  const getDistrict = getValues("districtCode");

  //get province
  useEffect(() => {
    async function fetchProvinces() {
      try {
        const response = await axios.get(`${HOST}`);
        setProvinces(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchProvinces();
  }, []);

  //get districts
  useEffect(() => {
    async function fetchDistricts() {
      try {
        if (getProvince) {
          const response = await axios.get(`${HOST}p/${getProvince}?depth=2`);
          setDistricts(response.data.districts);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchDistricts();
  }, [getProvince]);
  useEffect(() => {
    async function fetchWards() {
      try {
        if (getDistrict) {
          const response = await axios.get(`${HOST}d/${getDistrict}?depth=2`);
          setWards(response.data.wards);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchWards();
  }, [getDistrict]);
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const handleAddNewHouse = async (values) => {
    const cloneValues = { ...values };
    console.log(cloneValues);
    const price = Number(cloneValues?.price);
    const image = String(cloneValues?.image?.url);
    console.log(typeof image);
    const address = `${cloneValues.province}, ${cloneValues.district}, ${cloneValues.ward}`;
    console.log(address);
    try {
      await axios({
        method: "put",
        url: `${baseURL}/api/houses/${houseId}?address=${address}&area=${cloneValues.area}&description=zxczxc&image=${image}&name=${cloneValues.name}&price=${price}&roomNumber=1&status=true&typeIds=${cloneValues.typeIds}`,
        // data: {
        //   address: address,
        //   area: cloneValues.area,
        //   description: "czxczxczxczxc",
        //   detailSumary: cloneValues.detailSumary,
        //   image: image,
        //   name: cloneValues.name,
        //   price: price,
        //   typeIds: [1],
        // },
        headers: {
          Authorization: userData.access_token,
        },
      })
        .then(function (response) {
          toast.success("Sửa căn hộ thành công");
        })
        .catch(function (response) {
          toast.error("Sửa căn hộ thất bại");
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
    setValue("nameCategories", house.typeNames);
  }, [house, reset, setValue]);
  return (
    <div className="rounded-xl bg-lite  py-10 px-[66px]">
      <div className="text-center">
        <h1 className="mb-10 inline-block rounded-xl bg-white py-4 px-[60px] text-center text-[25px]  font-semibold">
          Bài đăng rao bán căn hộ 🏘️
        </h1>
        <form onSubmit={handleSubmit(handleAddNewHouse)}>
          <FormRow>
            <FormGroup>
              <Label>Tên căn hộ* </Label>
              <Input
                control={control}
                name="name"
                placeholder="Nhập tên căn hộ"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Chọn loại căn hộ* </Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={
                    getDropdownLabel("nameCategories") || "Chọn loại căn hộ"
                  }
                ></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData?.map((category) => (
                    <Dropdown.Option
                      key={category.id}
                      onClick={() =>
                        handleSelectCategories(category?.id, category?.name)
                      }
                    >
                      <span className="capitalize">{category?.name}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Mô tả ngắn* </Label>
            <Textarea
              control={control}
              name="detailSumary"
              placeholder="Mô tả ngắn"
            ></Textarea>
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label>Hình ảnh* </Label>
              <ImageUpload
                image={getValues("image")}
                onChange={setValue}
                name="image"
              ></ImageUpload>
            </FormGroup>
          </FormRow>
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
            {/* <FormGroup>
              <Label>Date*</Label>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                format="yyyy-MM-dd"
              />
            </FormGroup> */}
            <FormGroup>
              <Label>Diện tích* </Label>
              <Input
                control={control}
                name="area"
                placeholder="Nhập tên căn hộ"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Địa chỉ</Label>
            <FormThreeCol>
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
            </FormThreeCol>
          </FormGroup>

          <Button
            kind="primary"
            className="mx-auto bg-primary px-10 text-white"
            type="submit"
          >
            Tạo bài bán căn hộ
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HouseUpdate;
