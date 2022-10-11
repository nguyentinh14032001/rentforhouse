import React from "react";
import FilterItem from "./FilterItem";
import data from "../../assets/data/filter.json";

const Filter = () => {
  return (
    <>
      <div className="container flex flex-col">
        <h1>Chọn theo tiêu chí</h1>
        <div className="flex">
          {data &&
            data.map((item, index) => <FilterItem key={index} exten={item} />)}
        </div>
      </div>
    </>
  );
};

export default Filter;
