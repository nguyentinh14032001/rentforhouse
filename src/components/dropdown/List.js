import React from "react";
import styled from "styled-components";
import { useDropdown } from "./Dropdown-context";

const List = ({ children, className }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div
          className={`${className} absolute top-full left-0 z-10 max-h-[200px] w-full overflow-scroll rounded-lg bg-white shadow-sm`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default List;
