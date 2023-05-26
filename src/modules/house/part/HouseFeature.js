import Header from "layout/Header";
import React, { useEffect, useState } from "react";
import HouseGrid from "../HouseGrid";
import { v4 } from "uuid";
import HouseImage from "./HouseImage";
import CategoryHouse from "./CategoryHouse";
import HouseTitle from "./HouseTitle";
import HouseDesc from "./HouseDesc";
import HouseMeta2 from "./HouseMeta2";
import HouseAuthor from "./HouseAuthor";
import Heading from "components/common/Heading";
import Gap from "components/common/Gap";
import axios, { baseURL } from "api/axios";
import moment from "moment";
import { Button } from "components/button";
import { ActionDelete, ActionEdit } from "components/action";
const HouseFeature = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [houseList, setHouseList] = useState([]);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    //setLoading(true)
    async function fetchData() {
      try {
        await axios({
          method: `get`,
          url: `${baseURL}/api/houses/status/false`,
          params: {
            page: page,
            limit: limit,
          },
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setPages(response.data.data);
            setHouseList(response.data.data.houses);
            setIsChange(false);
            console.log(response.data.data);
            //setLoading(false);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
        //setLoading(false);
      }
    }
    fetchData();
  }, [page, userData.access_token, isChange, limit]);
  return (
    <div>
      <Header></Header>
      <div className="mx-[5vw] mb-3 pt-[10vh]">
        <Heading>Các bài viết đang chờ quản trị viên xét duyệt</Heading>
        <HouseGrid>
          {houseList.map((item) => (
            <HouseItemPending data={item} key={item?.id}></HouseItemPending>
          ))}
        </HouseGrid>
        <Gap></Gap>
        <Heading>Các bài viết đã bị từ chối</Heading>
        <HouseGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <HouseItemReject key={v4()}></HouseItemReject>
            ))}
        </HouseGrid>
      </div>
    </div>
  );
};

const HouseItemPending = ({ data }) => {
  const currentDate = moment(data?.createdDate).format("DD/MM/YYYY");
  return (
    <div>
      <div className="relative">
        <HouseImage image={data?.image}></HouseImage>
        <div className="absolute right-0 mt-[2px] flex gap-x-1">
          <ActionEdit></ActionEdit>
          <ActionDelete></ActionDelete>
        </div>
      </div>

      <div className="px-4 py-2">
        <CategoryHouse text={data?.typeHouse?.name}></CategoryHouse>
        <HouseTitle name={data?.name}></HouseTitle>
        <HouseDesc children={`Đăng ngày: ${currentDate}`}></HouseDesc>
        <div className="mb-3 flex items-start justify-between gap-x-5">
          <HouseMeta2
            text={`Địa chỉ: ${data?.address}`}
            amount={`${data?.price} VNĐ`}
          ></HouseMeta2>
        </div>
        <HouseAuthor
          author={`${data?.user?.lastName} ${data?.user?.firstName}`}
          image={data?.user?.image}
        ></HouseAuthor>
        <div></div>
      </div>
    </div>
  );
};
const HouseItemReject = ({ data }) => {
  const currentDate = moment(data?.createdDate).format("DD/MM/YYYY");
  return (
    <div>
      <div className="relative">
        <HouseImage image={data?.image}></HouseImage>
        <div className="absolute right-0 mt-[2px] flex gap-x-1">
          <ActionEdit></ActionEdit>
          <ActionDelete></ActionDelete>
        </div>
      </div>

      <div className="px-4 py-2">
        <CategoryHouse text={data?.typeHouse?.name}></CategoryHouse>
        <HouseTitle name={data?.name}></HouseTitle>
        <HouseDesc children={`Đăng ngày: ${currentDate}`}></HouseDesc>
        <div className="mb-3 flex items-start justify-between gap-x-5">
          <HouseMeta2
            text={`Địa chỉ: ${data?.address}`}
            amount={`${data?.price} VNĐ`}
          ></HouseMeta2>
        </div>
        <HouseAuthor
          author={`${data?.user?.lastName} ${data?.user?.firstName}`}
          image={data?.user?.image}
        ></HouseAuthor>
        <div></div>
      </div>
    </div>
  );
};

export default HouseFeature;
