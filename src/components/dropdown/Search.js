import React from "react";
import { useDropdown } from "./Dropdown-context";

const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();
  return (
    <div className="sticky top-0 z-10 bg-white p-2">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded border border-gray-200 p-4 outline-none"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
