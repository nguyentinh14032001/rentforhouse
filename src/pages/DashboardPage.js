import { useEffect, useRef, useState } from "react";

import axios from "axios";
import { baseURL } from "api/axios";

import Chart from "modules/dashboard/manage/charjs/Chart";
import { Chart2 } from "modules/dashboard/manage/charjs/Chart2";
import FormGroup from "components/common/FormGroup";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
};
const DashboardPage = () => {
  const [loading, setLoading] = useState(false);

  const [pages, setPages] = useState([]);

  const [page, setPage] = useState(1);
  const [houseList, setHouseList] = useState([]);

  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        await axios({
          method: `get`,
          url: `${baseURL}/api/houses/status/false`,
          params: {
            page: page,
            limit: 10,
          },
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setPages(response.data.data);
            setHouseList(response.data.data.houses);
            setIsChange(true);

            setLoading(false);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [page, userData.access_token, isChange]);
  console.log();
  //localhost:5000/api/houses/house/61/status/true
  // http: console.log(houseList);
  const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" transition-all ">
      <div
        onClick={handleClick}
        className="ml-auto mr-5 inline-flex cursor-pointer items-center gap-5 rounded-lg bg-slate-200 p-3 transition-all hover:bg-slate-100"
      >
        <span className="relative w-8 cursor-pointer  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            fill="none"
            height="32"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span className="absolute top-0 right-0 flex h-5 w-5 translate-x-2/4 items-center justify-center rounded-full bg-red-400 ">
            {pages?.size}
          </span>
        </span>
        <p className=" text-lg font-semibold ">
          Còn <span className="text-red-600">{pages?.size}</span> căn nhà chưa
          được duyệt
        </p>
      </div>

      <div className="">
        <Chart></Chart>
        <div>
          <FormGroup>
            <p className="text-xl font-semibold">Thống kê</p>
            <Chart2 click={ref}></Chart2>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
