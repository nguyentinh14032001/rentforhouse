import React from "react";

const HouseImage = ({
  className = "h-[240px]",
  image = "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
}) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt=""
        className="h-full w-full rounded-2xl object-cover"
      />
    </div>
  );
};

export default HouseImage;
