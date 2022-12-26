import React from "react";

const HighVoteItem = ({ house }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1 col-start-1 overflow-hidden">
          <img
            src={house?.image}
            alt=""
            className="h-full w-full transform transition duration-200 hover:scale-125"
          />
        </div>
        <div className="col-span-3 text-left hover:opacity-80">
          <p className="text-[14px] font-bold capitalize">{house?.name}</p>
          <p className="font-bold text-[#ff5a3c]">
            {house?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
          </p>
        </div>
      </div>
    </>
  );
};

export default HighVoteItem;
