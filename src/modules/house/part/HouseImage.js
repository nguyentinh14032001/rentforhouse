import React from "react";

const HouseImage = ({
  className = "h-[240px]",
  image = "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=852&q=80",
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
