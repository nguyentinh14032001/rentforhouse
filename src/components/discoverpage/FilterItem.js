import React, { useState } from "react";
import "../../assets/sass/discoverpage/FilterItem.scss";

const FilterItem = ({ exten }) => {
  const [chosen, setChosen] = useState([]);
  const [btnState, setBtnState] = useState(false);

  const handletoggle = (data) => {
    setBtnState(!btnState);
    setChosen((prev) =>
      prev.find((c) => c === data)
        ? prev.filter((d, i) => d !== data)
        : [...prev, data]
    );
  };
  console.log(chosen, btnState);
  return (
    <>
      <div className="flex flex-col">
        <button className="w-fit rounded-full border bg-[#ededed] px-4 py-2 text-[14px] focus:border-[#1DC071] focus:text-[#1DC071]">
          {exten.name} <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div className="mt-1 flex flex-col">
          <div className="triangle ml-10"></div>
          <div className="ml-8 flex h-[30vh] w-[20vw] flex-wrap items-center bg-[#000] pl-4">
            {exten &&
              exten.choose.map((item) => (
                <div
                  class=" relative flex h-[calc(100%/3)] w-[calc(100%/3)] items-center"
                  key={item.id}
                >
                  <label class="absolute  h-[50%] w-[50%]">
                    <input type="hidden" name={item.id} value="False" />
                    <input
                      class="custom-checkbox-input hidden"
                      name={item.id}
                      value="True"
                      type="checkbox"
                    />
                    <span class="custom-checkbox-text cursor-pointer select-none rounded-lg bg-[#aaa] p-4 text-[#555]">
                      Alarm
                    </span>
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterItem;
