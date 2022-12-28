import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { baseURL } from "api/axios";
import { ProfileContext } from "pages/ProfilePage";

import "assets/sass/profilepage/ImageControl.scss";

const ImageControl = () => {
  const value = useContext(ProfileContext);
  const { image, setShow, setImage } = value;

  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [file, setFile] = useState();
  const [isProfileChange, setIsProfileChange] = useState(false);

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(isProfileChange));
  }, [isProfileChange]);

  const handleImage = (e) => {
    setFile(e.target.files[0]);
    setImage((prevState) => ({
      ...prevState,
      oldImage: image?.newImage,
      newImage: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleApi = () => {
    const formData = new FormData();
    formData.append("file", file);
    const fetchData = async () => {
      try {
        await axios({
          method: "post",
          url: `${baseURL}/api/profiles/image/`,
          data: formData,
          headers: {
            Authorization: userData.access_token,
            "Content-Type": "multipart/form-data",
          },
        })
          .then(function (response) {
            console.log(response?.data?.data);
            setIsProfileChange(true);
          })
          .catch(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setShow((prevState) => ({
      ...prevState,
      imageControl: false,
    }));
    setImage((prevState) => ({
      ...prevState,
      oldImage: "",
    }));
  };

  const handleCancle = () => {
    if (image?.oldImage != "") {
      setImage((prevState) => ({
        ...prevState,
        newImage: image?.oldImage,
        oldImage: "",
      }));
    }
    setShow((prevState) => ({
      ...prevState,
      imageControl: false,
    }));
  };

  console.log("profile", isProfileChange);

  return (
    <>
      <div className="absolute top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center bg-black opacity-90">
        <div className="items-center">
          <div className="relative cursor-pointer overflow-hidden rounded-lg bg-black p-2 hover:opacity-80">
            <p className="text-white">Chose Images</p>
            <input
              type="file"
              name="file"
              onChange={handleImage}
              className="fileInput "
            />
          </div>

          {image?.oldImage != "" && (
            <img
              src={image?.newImage}
              alt=""
              className="h-[200px] w-[200px] rounded-full border-4 border-black object-cover"
            />
          )}

          <div className="flex text-white">
            <button
              onClick={handleApi}
              className="button-50 mr-4 hover:opacity-80"
            >
              Lưu
            </button>
            <button
              onClick={handleCancle}
              className="button-50 hover:opacity-80"
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageControl;
