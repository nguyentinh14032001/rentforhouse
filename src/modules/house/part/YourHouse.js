import { Pagination } from "@mui/material";
import { baseURL } from "api/axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoryHouse from "./CategoryHouse";
import HouseDesc from "./HouseDesc";
import HouseImage from "./HouseImage";
import HouseMeta from "./HouseMeta";
import HouseTitle from "./HouseTitle";

const YourHouse = () => {
  const user = localStorage.getItem("user");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const userData = JSON.parse(user);
  console.log(userData);
  console.log(userData.access_token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "post",
          url: `${baseURL}/api/houses/user/${userData.id}?limit=${limit}&page=${page}`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            console.log(response);
            setPage(response?.data.data);
            setProducts(response?.data?.data?.houses);
          })
          .catch(function (response) {
            toast.error("a");
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit, page, userData.access_token, userData.id]);
  console.log(page.page);

  const handlePageChange = (page) => {
    // const from = (page - 1) * page.total_page;
    // const to = (page - 1) * page.total_page + page.total_page;
    // setPagination({ ...pagination, from: from, to: to });
    setPage(page);
  };

  const deleteHouse = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `${baseURL}/api/houses/${id}`,
        headers: {
          Authorization: userData.access_token,
        },
      })
        .then(function (response) {
          console.log(response);
          // Này là xoá được rồi mà nó không tự render cái trang lại mày xem thử chứ t không biết.
        })
        .catch(function (response) {
          toast.error("a");
        });
    } catch (error) {
      console.log("Failed to delete:", error);
    }
  };

  return (
    <>
      {products &&
        products.map((item) => (
          <div className="flex w-full min-w-[1048px] items-center gap-x-8">
            <HouseImage className="h-[266px] flex-1"></HouseImage>
            <div className="max-w-[435px] flex-1">
              <CategoryHouse
                text={item.typeNames}
                className="mb-4"
              ></CategoryHouse>
              <HouseTitle className="font-bold" name={item.name}></HouseTitle>
              <HouseDesc className="mb-6 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                commodi aperiam alias magnam eos molestiae quam enim corporis
                voluptas similique. Nihil beatae alias maiores blanditiis
                tempore veritatis iste ullam repellat?
              </HouseDesc>
              <HouseMeta address={item.address} price={item.price}></HouseMeta>
            </div>
            <button
              onClick={() => deleteHouse(item.id)}
              className="transform rounded-lg bg-[#c11313] py-2 px-4 text-white active:scale-90"
            >
              Xoá
            </button>
            <button className="transform rounded-lg bg-[#2b9b11] py-2 px-4 text-white active:scale-90">
              Sửa
            </button>
          </div>
        ))}
      <div className="my-4 flex items-center justify-center">
        <Pagination
          count={page.total_page}
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </div>
    </>
  );
};

export default YourHouse;
