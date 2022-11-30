import { baseURL } from "api/axios";
import axios from "axios";
import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchHomePage = () => {
  const [houseList, setHouseList] = useState([]);
  const [search, setSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const nodeRef = useRef(null);
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate();

  const handleOnChange = debounce((e) => {
    setFilter(e.target.value);
  }, 250);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houses?name=${filter}`,
        })
          .then(function (response) {
            setHouseList(response.data.data);
            // console.log(response.data.data);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filter]);

  const handleClickHouse = (item) => {
    // console.log(item);
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="relative z-50">
      <div className="flex items-center rounded-full bg-white p-2 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)]">
        <div className="flex-1">
          <input
            type="text"
            onChange={handleOnChange}
            onClick={() => setOpenMenu(true)}
            ref={nodeRef}
            placeholder="search house"
            className="w-full bg-transparent px-5 text-sm font-normal text-text-1 placeholder:text-text-4"
          ></input>
        </div>
        <button className="flex h-[40px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
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
      {openMenu && filter !== "" && houseList?.length > 0 && (
        <div className="search-results absolute left-0 z-50 w-full translate-y-5 rounded-3xl bg-white pb-6 lg:w-[743px] ">
          <div className="flex items-center justify-between rounded-3xl bg-graySoft p-3">
            <span className="pl-4 text-sm font-medium text-text-1">
              10,000 căn hộ
            </span>
            <button
              onClick={() => setOpenMenu(false)}
              className="flex h-[40px] w-[62px] items-center justify-center rounded-xl bg-error bg-opacity-20 text-error"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="mb-6 flex flex-col gap-y-5 ">
              {houseList?.length > 0 &&
                houseList.map((item) => (
                  <SearchItem
                    key={item?.id}
                    onClick={() => handleClickHouse(item)}
                    data={item}
                  ></SearchItem>
                ))}
            </div>
            <h3 className="mb-4 text-sm font-semibold">Mọi người cũng tìm</h3>
            <div className="flex flex-col gap-y-2 text-sm text-text-2">
              <p>
                <strong>Chung cư</strong> hoàng anh gia lai
              </p>
              <p>Nhà trên núi</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem({ data, onClick = () => {} }) {
  // console.log(data);
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center gap-x-5 rounded-lg p-2 hover:bg-slate-200 "
    >
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        className="h-[50px] w-[50px] rounded-lg object-cover"
        alt=""
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>{data.typeNames[0]} </strong>
          {data.name}
        </h3>
        <p className="text-text-3 ">{`Liên hệ: ${data?.user.firstName}, Sđt: ${data?.user.phone}`}</p>
      </div>
    </div>
  );
}
export default SearchHomePage;
