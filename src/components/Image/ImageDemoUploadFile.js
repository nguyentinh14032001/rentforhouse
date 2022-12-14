import axios from "axios";
import { imgbbAPI } from "config/config";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const ImageDemoUploadFile = ({
  onChange = () => {},
  imageURL,
  name = "",
  className = "",
  handleChange = () => {},
  preViewImage = "",
}) => {
  const [image, setImage] = useState("");

  const handleUploadImage = async (e) => {
    const bodyFormData = new FormData();
    bodyFormData.append("file", preViewImage);
    const response = await axios({
      method: "post",
      url: `http://localhost:8080/uploadFile`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    const imageData = response.data;
    // if (!imageData) {
    //   toast.error("Can not upload image to imgbbAPI");
    //   return;
    // }
    // const imageObj = {
    //   medium: imageData.medium.url,
    //   thumb: imageData.thumb.url,
    //   url: imageData.url,
    // };
    // console.log(imageData);
    // onChange(name, imageObj);
    // await axios
    //   .post(
    //     "http://localhost:8080/uploadFile",
    //     { bodyFormData },
    //     {
    //       "Content-Type": "multipart/form-data",
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
  };
  console.log(imageURL);
  return (
    <label
      className={`flex min-h-[200px] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed bg-gray-100 ${className} group relative overflow-hidden`}
    >
      <input type="file" onChange={handleChange} className="hidden" />

      {!preViewImage ||
        (!imageURL && (
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
      {preViewImage ||
        (imageURL && (
          <img
            src={preViewImage.preview || imageURL}
            className="h-full w-full object-cover"
            alt=""
          />
        ))}
    </label>
  );
};

export default ImageDemoUploadFile;
