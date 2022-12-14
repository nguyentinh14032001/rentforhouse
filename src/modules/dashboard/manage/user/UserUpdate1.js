import axios from "axios";

import { Radio } from "components/checkbox";
import { Field, FieldCheckboxes } from "components/field";
import ImageDemoUploadFile from "components/Image/ImageDemoUploadFile";
import ImageUpload from "components/Image/ImageUpload";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import DashboardHeading from "modules/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/button/Button";

const UserUpdate1 = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
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

  const [params] = useSearchParams();
  const userId = params.get("id");
  const watchStatus = watch("status");
  const watchRole = watch("role");
  const imageUrl = getValues("avatar");
  const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
  const imageName = imageRegex?.length > 0 ? imageRegex[1] : "";
  // const [image, setImage] = useState("");
  // const handleChange = (e) => {
  //   setImage(e.target.files[0]);
  // };
  // // const { image, setImage, progress, handleSelecteImage, handleDeleteImage } =
  // //   useFireBaseImage(setValue, getValues, imageName);
  // //delete Avatar

  // // useEffect(() => {
  // //   setImage(imageUrl);
  // // }, [imageUrl, setImage]);
  // const handleUploadImage = async (e) => {
  //   // const file = e.target.files[0];
  //   // console.log(file);
  //   // if (!file) return;
  //   const url = "http://localhost:8080/uploadFile";
  //   const bodyFormData = new FormData();
  //   bodyFormData.append("image", image);
  //   // const response = await axios({
  //   //   method: "post",
  //   //   url: `http://localhost:8080/uploadFile`,
  //   //   data: bodyFormData,
  //   //   headers: {
  //   //     "Content-Type": "multipart/form-data",
  //   //   },
  //   // });

  //   // const imageData = response.data;
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
  //   await axios
  //     .post("http://localhost:8080/uploadFile", { bodyFormData })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  useEffect(() => {}, [reset, userId]);

  const handleUpdateUser = async (values) => {
    console.log(values);
  };

  return (
    <div>
      <DashboardHeading
        title="Update user"
        desc="Update user infomation"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdateUser)} autoComplete="off">
        <div className="mx-auto mb-10 h-[200px] w-[200px] rounded-full">
          <ImageDemoUploadFile
            onChange={setValue}
            name="image"
            className="h-full !rounded-full"
          ></ImageDemoUploadFile>
          {/* <input type="file" onChange={handleChange}></input> */}
        </div>

        <Button
          isLoading={isSubmitting}
          disabled={isSubmitting}
          kind="primary"
          type="submit"
          className="mx-auto w-[200px]"
          // onClick={handleUploadImage}
        >
          Update user
        </Button>
      </form>
    </div>
  );
};

export default UserUpdate1;
