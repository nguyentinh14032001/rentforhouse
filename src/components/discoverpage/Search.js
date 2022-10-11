import React from "react";

const Search = () => {
  return (
    <>
      <div className="container my-[10vh]">
        <form action="">
          <div className="flex">
            <input
              type="text"
              id="last_name"
              class="block w-[50%] rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900  focus:border-[#1DC071]  dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Nhập loại nhà mà bạn thích"
              required
            />
            <button
              type="submit"
              className="ml-2 transform rounded-lg bg-[#1DC071] p-4 font-bold text-white outline-4 hover:opacity-70 focus:scale-90"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
