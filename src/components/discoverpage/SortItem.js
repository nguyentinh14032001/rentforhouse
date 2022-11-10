import React from "react";
import "../../assets/sass/discoverpage/SortItem.scss";

const SortItem = ({ data }) => {
  return (
    <div>
      {data && (
        <select
          name={data.value}
          id={data.value}
          className="decorated mr-2 rounded-lg bg-[#F7AF89] p-2 text-white outline-none"
        >
          <option hidden disabled selected>
            Chọn {data.name} -
          </option>
          {data.choose.map((choose) => (
            <option value={choose.id} className="pl-2" key={choose.id}>
              {choose.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SortItem;
