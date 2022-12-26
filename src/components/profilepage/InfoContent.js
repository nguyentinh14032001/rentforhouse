import React, { useContext } from "react";
import { ProfileContext } from "pages/ProfilePage";

const InfoContent = () => {
  const value = useContext(ProfileContext);
  const { profile } = value;

  return (
    <>
      <div className="flex">
        <div className="text-[24px] font-bold capitalize">
          {profile?.lastName} {profile?.firstName}
        </div>
        <div className="ml-4 text-[14px] text-[#969696]">
          <i className="fa-solid fa-location-dot mr-2"></i>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-divider mt-4 mb-2">Thông tin liên lạc</div>
        <div className="flex flex-col">
          <div className="grid w-fit grid-cols-4">
            <p className="col-start-1">Điện thoại</p>
            <p>{profile?.phone}</p>
            <p className="col-start-1">Địa chỉ</p>
            <p></p>
            <p className="col-start-1">Email</p>
            <p>{profile?.email}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-divider mt-4 mb-2">Thông tin cơ bản</div>
        <div className="flex flex-col">
          <div className="grid w-fit grid-cols-4">
            <p className="col-start-1">Ngày sinh</p>
            <p></p>
            <p className="col-start-1">Giới tính</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContent;
