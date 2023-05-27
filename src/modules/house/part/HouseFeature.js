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
import { ActionDelete, ActionEdit } from "components/action";
import Swal from "sweetalert2";
import HouseListItem from "components/discoverpage/HouseListItem";
const user = localStorage.getItem("user");
const userData = JSON.parse(user);

const HouseFeature = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [houseList, setHouseList] = useState([]);
  const [houseListReject, setHouseListReject] = useState([]);
  const [isChange, setIsChange] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`${baseURL}/api/houses/get-hide-posts/${userData?.id}`, {
            headers: {
              Authorization: userData.access_token,
            },
          })
          .then((res) => {
            console.log(res?.data?.data);
            setHouseListReject(res?.data?.data);
          });
      } catch (error) {}
    };
    fetchApi();
  }, []);
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

            //setLoading(false);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
        //setLoading(false);
      }
    }
    fetchData();
  }, [page, isChange, limit]);

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
          {houseListReject.map((item) => (
            <HouseItemReject data={item} key={v4()}></HouseItemReject>
          ))}
        </HouseGrid>
      </div>
    </div>
  );
};

const HouseItemPending = ({ data }) => {
  const handleDeleteHouse = async (house) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios
            .delete(`${baseURL}/api/houses/${house?.id}`, {
              headers: {
                Authorization: userData.access_token,
              },
            })
            .then((res) => {
              console.log(res);
              if (res?.data?.data?.message == "successful delete") {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                //setIsChange(true);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const currentDate = moment(data?.createdDate).format("DD/MM/YYYY");
  return (
    <div>
      <div className="relative">
        <HouseImage image={data?.image}></HouseImage>
        <div className="absolute right-0 mt-[2px] flex gap-x-1">
          <ActionEdit></ActionEdit>
          <ActionDelete onClick={() => handleDeleteHouse(data)}></ActionDelete>
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
