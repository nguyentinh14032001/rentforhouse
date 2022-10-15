import React from "react";

const HouseSeller = ({
  image = "https://images.unsplash.com/photo-1665405139017-b0e8a1687f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  seller="Nguyên Tính"
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <img className="h-10 w-10 rounded-full object-cover" src={image} alt="" />
      <p className="text-sm text-text-3">
        Liên hệ <span className="font-semibold text-text-2">{seller}</span>
      </p>
    </div>
  );
};

export default HouseSeller;
