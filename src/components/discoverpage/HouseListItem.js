import React from "react";
import house from "../../assets/images/house.jpg";
import { IconHouse } from "components/icons";
import { Link } from "react-router-dom";

const HouseListItem = ({ products }) => {
  return (
    <div className="mt-4 flex w-full">
      <img src={house} alt="" className="h-[32vh] w-[36vw] rounded-lg" />
      <div className="ml-6 mt-2 flex w-[30vw] flex-col">
        <Link to="/detail" className="flex font-bold text-text-3">
          <IconHouse className="h-5 w-5"></IconHouse>
          <small className="ml-2 text-[16px]">Căn hộ cao cấp</small>
        </Link>
        <p className="my-2 text-[20px] font-bold">Nguyên Tính Villa</p>
        <small className="word-break text-text-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          commodi aperiam alias magnam eos molestiae quam enim corporis voluptas
          similique. Nihil beatae alias maiores blanditiis tempore veritatis
          iste ullam repellat?
        </small>
        <div className="mt-2 flex flex-col">
          <p className="text-text-3">Quy Nhơn</p>
          <div className="mt-2 flex justify-between font-[550]">
            <p>
              5.000.000 <span>đ</span>
            </p>
            <p className="text-text-3">
              1000 <span>view</span>
            </p>
            <p>{products.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseListItem;
