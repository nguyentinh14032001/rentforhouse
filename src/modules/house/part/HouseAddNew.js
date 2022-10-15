import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "components/button";
import ImageUpload from "components/Image/ImageUpload";
import useOnChange from "hooks/UseOnChange";
import { toast } from "react-toastify";
import FormThreeCol from "components/common/FormThreeCol";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["Chung cư", "Căn hộ cao cấp", "Căn hộ Sky Villa"];
const HouseAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };
  const [description, setDescription] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleSelectCategories = (name, value) => {
    setValue("category", value);
  };
  const handleSelectProvince = (name, value) => {
    setValue("address", value);
  };

  const resetValue = () => {
    setDescription("");
    startDate("");
    reset({});
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
      //   imageUploader: {
      //     upload: async (file) => {
      //       const bodyFormData = new FormData();
      //       bodyFormData.append("file", file);
      //       bodyFormData.append("upload_preset", "cck4hgk7");
      //       console.log(file);
      //       //await handleUploadImageContent(file)
      //       const response = await axios({
      //         method: "post",
      //         url: "",
      //         data: bodyFormData,
      //         headers: {
      //           "content-Type": "multipart/form-data",
      //         },
      //       });
      //       return response.data.url;
      //     },
      //   },
    }),
    []
  );
  const [addressFilter, handleOnChangeValue] = useOnChange();
  const [address, setAddress] = useState([]);

  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await axios.get(`https://provinces.open-api.vn/api/`);
        setAddress(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCity();
  }, []);
  console.log("a", address);
  const handleAddNewHouse = (values) => {
    console.log(values);
  };
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
                    getDropdownLabel("category") || "Chọn loại căn hộ"
                  }
                ></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData.map((category) => (
                    <Dropdown.Option
                      key={category}
                      onClick={() =>
                        handleSelectCategories("category", category)
                      }
                    >
                      <span className=" capitalize ">{category}</span>
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
              name="detailsumary"
              placeholder="Mô tả ngắn"
            ></Textarea>
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label>Hình ảnh* </Label>
              <ImageUpload onChange={setValue}></ImageUpload>
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
            <FormGroup>
              <Label>Date*</Label>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                format="dd-MM-yyyy"
              />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Địa chỉ</Label>
            <FormThreeCol>
              <FormGroup>
                <Dropdown>
                  <Dropdown.Select
                    placeholder={getDropdownLabel("address") || "Tỉnh"}
                  >
                    {" "}
                  </Dropdown.Select>
                  <Dropdown.List>
                    {address &&
                      address.map((item) => (
                        <Dropdown.Option>
                          <span className=" capitalize ">{item.name}</span>
                        </Dropdown.Option>
                      ))}
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Dropdown>
                  <Dropdown.Select></Dropdown.Select>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Dropdown>
                  <Dropdown.Select></Dropdown.Select>
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

export default HouseAddNew;
