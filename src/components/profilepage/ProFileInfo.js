import React, { useContext, useEffect, useState } from "react";

import ProfileImage from "./ProfileImage";
import InfoContent from "./InfoContent";
import InfoControl from "./InfoControl";
import "assets/sass/profilepage/ProFileRight.scss";

const ProFileInfo = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="mx-auto mt-8 grid w-fit max-w-[90vw] grid-cols-3 pt-8">
        {isEdit == false ? <ProfileImage /> : null}

        <div className="col-span-2 px-4">
          {isEdit == true ? (
            <InfoControl setIsEdit={setIsEdit} />
          ) : (
            <InfoContent />
          )}
          {isEdit == false ? (
            <button
              onClick={() => setIsEdit(true)}
              className="mt-8 w-fit rounded-lg bg-[#40CA87] py-2 px-4 font-bold text-white"
            >
              Cập nhật thông tin
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProFileInfo;
