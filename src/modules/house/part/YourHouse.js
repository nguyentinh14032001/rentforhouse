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
  const [houses, setHouses] = useState([]);
  const userData = JSON.parse(user);
  console.log(userData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houses/user?userId=${userData.id}&limit=3&page=1`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            console.log(response.data.data.houses);
            setHouses(response?.data?.data?.houses);
          })
          .catch(function (response) {
            toast.error("a");
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(houses);
  return (
    <>
      {houses &&
        houses.map((item) => (
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
              <HouseMeta></HouseMeta>
            </div>
          </div>
        ))}
    </>
  );
};

export default YourHouse;
