import React from "react";

const HouseMeta = ({
  address = "Quy Nhơn",
  price = "5.000.000.000",
  view = 1000,
  size = "small",
}) => {
  return (
    <div className={`${size === "small" ? "text-sm" : "text-xl"}`}>
      <p className={` mb-3 text-sm font-normal text-text-3`}>{address}</p>
      <div className="mb-5 flex items-start justify-between gap-x-5">
        <h4 className="text-sm font-semibold text-text-1">{price}</h4>
        <h4 className="text-sm font-semibold text-text-3">{`${view} view`} </h4>
      </div>
    </div>
  );
};

export default HouseMeta;
