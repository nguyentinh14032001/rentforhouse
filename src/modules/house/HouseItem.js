import React from "react";
import CategoryHouse from "./CategoryHouse";

const HouseItem = () => {
  return (
    <div>
      <div className="h-[240px]">
        <img
          src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <div className="px-5 py-4">
      <CategoryHouse></CategoryHouse>
        <h3 className="mb-1 font-semibold text-text-1">Tính Villa</h3>
        <p className="mb-4 text-sm font-normal text-text-3">
          37/24 Đống Đa, Quy Nhơn, Bình Định
        </p>
        <div className="mb-5 flex items-start justify-between gap-x-5">
          <h4 className="text-sm font-semibold text-text-1">5.000.000.000đ</h4>
          <h4 className="text-sm font-semibold text-text-3">1000 view</h4>
        </div>
        <div className="flex items-center gap-x-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/308058129_1173463129870595_3541348473335882639_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-Ll6yvFvBT0AX90Lq1m&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_ninvUKSsIrK4P2M5wnao0xt7lfDoaWtIGCElqztrHfA&oe=6341224F"
            alt=""
          />
          <p className="text-sm text-text-3">
            Liên hệ{" "}
            <span className="font-semibold text-text-2">Nguyên Tính</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
