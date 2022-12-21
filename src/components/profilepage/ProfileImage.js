import { ProfileContext } from "pages/ProfilePage";
import React, { useContext } from "react";

const ProfileImage = () => {
  const value = useContext(ProfileContext);
  const { setShow, image, show } = value;

  const handleEdit = () => {
    setShow((prevState) => ({
      ...prevState,
      editBtn: !show.editBtn,
    }));
  };

  const handlechange = () => {
    setShow((prevState) => ({
      ...prevState,
      imageControl: !show.imageControl,
      editBtn: false,
    }));
  };
  return (
    <>
      <div className="relative flex justify-center">
        <img
          src={image?.newImage}
          alt=""
          onClick={handleEdit}
          className="h-[200px] w-[200px] cursor-pointer rounded-full border-4 border-black object-cover hover:opacity-80"
        />
        {show?.editBtn == true && (
          <div
            className="absolute top-[200px] flex cursor-pointer border-2 p-2 hover:opacity-80"
            onClick={handlechange}
          >
            Chỉnh sửa
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileImage;
