import React from "react";

import Navbar from "layout/Navbar";
import ProFileRight from "components/profilepage/ProFileRight";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto grid max-w-[90vw] grid-cols-3 ">
        <div className="">
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            alt=""
          />
        </div>
        <ProFileRight />
      </div>
    </>
  );
};

export default ProfilePage;
