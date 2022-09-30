import React from "react";

const SearchHomePage = () => {
  return (
    <div className="shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] flex items-center rounded-full bg-white p-2">
      <div className="flex-1">
        <input
          type="text"
          placeholder="search house"
          className="w-full px-5 bg-transparent text-sm font-normal text-text-1 placeholder:text-text-4"
        ></input>
        
      </div>
      <button className="w-[72px] h-[40px] flex-shrink-0 justify-center rounded-full bg-primary text-white flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </button>
    </div>
  
  );
};

export default SearchHomePage;
