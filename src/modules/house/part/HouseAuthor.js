import React from "react";

const HouseAuthor = ({ image = "", author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        className="h-8 w-8 rounded-full object-cover"
        alt=""
      ></img>
      <p className="text-text3 text-xs">
        Đăng bởi <span className="text-text2 font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default HouseAuthor;
