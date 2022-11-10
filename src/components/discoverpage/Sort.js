import React from "react";
import SortItem from "./SortItem";
import data from "../../assets/data/filter.json";

const Sort = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1>Chọn theo tiêu chí</h1>
        <div className="select-group my-4 flex">
          {data && data.map((item) => <SortItem data={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default Sort;
