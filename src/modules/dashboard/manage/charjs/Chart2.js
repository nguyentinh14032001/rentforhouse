import React, { useEffect, useState } from "react";
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink,
} from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";

import "./Dashboard.css";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "api/axios";
import HouseImage from "modules/house/part/HouseImage";
import HouseTitle from "modules/house/part/HouseTitle";
import HouseDesc from "modules/house/part/HouseDesc";
import { ActionView } from "components/action";
import ActionCheck from "components/action/ActionCheck";
import { toast } from "react-toastify";

export const Chart2 = (prop) => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [houseList, setHouseList] = useState([]);
  const [isChange, setIsChange] = useState(true);
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [data, setData] = useState({
    chart1: {
      labels: ["Eating", "Drinking", "Sleeping"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["#F2C94C", "#2F80ED", "#9B51E0"],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ],
    },
  });
  useEffect(() => {
    //setLoading(true);
    async function fetchData() {
      let month2 = [];
      let value = [];
      try {
        await axios({
          method: `get`,
          url: `${baseURL}/api/dasdboard/interactive/pie/chart/?year=2022`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            for (const dataObj of response?.data?.datas) {
              month2.push(dataObj?.column);
              value.push(dataObj?.value);
            }
            console.log(month2);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
      setData({
        chart1: {
          labels: month2,
          datasets: [
            {
              label: "Số căn nhà được bán",
              backgroundColor: ["#F2C94C", "#2F80ED", "#9B51E0"],
              borderWidth: 0,
              data: value,
            },
          ],
        },
      });
    }
    fetchData();
  }, [page, userData.access_token]);
  const navigate = useNavigate();
  useEffect(() => {
    //setLoading(true);

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

  const handleAccept = (id) => {
    async function fetchData() {
      try {
        await axios({
          method: `put`,
          url: `${baseURL}/api/houses/house/${id}/status/true`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            toast.success("Duyệt bài đăng thành công");
            setIsChange(true);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  };
  const handleLoadMore = () => {
    setLimit(limit + limit);
  };
  console.log(houseList);
  return (
    <div className="dashboard d-flex">
      <div></div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="cards-container">
                <div className="card-bg d-flex flex-column max-h-[400px] border">
                  <div className="flex flex-col p-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="h5 font-weight-bold text-dark m-0">
                        Thống kê loại nhà
                      </h4>
                      <div className="bg-grey rounded-circle px-2 py-1">
                        <i className="fas fa-chart-line"></i>
                      </div>
                    </div>
                    <div className="justify-center">
                      <CDBContainer
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        // className="h-[250px] w-[250px] p-0 "
                      >
                        <Pie
                          data={data.chart1}
                          options={
                            ({ responsive: true },
                            { maintainAspectRatio: true },
                            { legend: { display: true } })
                          }
                        />
                      </CDBContainer>
                    </div>
                  </div>
                </div>

                <div
                  ref={prop.click}
                  className="card-bg d-flex flex-column wide d-flex  flex-column max-h-[350px] overflow-y-auto border"
                >
                  <div className="d-flex flex-column h-100 p-0">
                    <div className="d-flex justify-content-between align-items-center mx-4 mt-3">
                      <h4 className="font-weight-bold text-dark h5">
                        Duyệt bài đăng
                      </h4>
                      <div className="bg-grey rounded-circle p-1">
                        <i className="fas fa-sticky-note"></i>
                      </div>
                    </div>

                    {
                      <div className="">
                        {houseList.length > 0 &&
                          houseList.map((item) => (
                            <div className="mb-10 flex gap-x-3 overflow-y-auto p-[10px]">
                              <HouseImage
                                image={item?.image}
                                className="h-[100px] w-[100px]"
                              ></HouseImage>

                              <div>
                                <p className="mb-3 text-sm text-[18px] font-bold">
                                  {item?.name}
                                </p>
                                <p className="">{`Mô tả: Số phòng ${item?.roomNumber}, toilet ${item?.toilet}`}</p>
                                <p className="">{`Địa chỉ: ${item?.address}`}</p>

                                <div className="flex gap-x-3">
                                  <ActionView
                                    onClick={() =>
                                      navigate(`/detail/${item?.id}`)
                                    }
                                  ></ActionView>
                                  <ActionCheck
                                    onClick={() => handleAccept(item?.id)}
                                  ></ActionCheck>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    }

                    <p
                      // onClick={() => setPage(prev=>...(page + 1))}
                      className="c-p text-dark font-weight-bold mt-auto mr-3 text-right"
                      onClick={() => handleLoadMore()}
                    >
                      See More
                      <i className="fas fa-arrow-right ml-1"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="align-items-center flex">
                <Link to="/" className="text-dark footer-link">
                  <img alt="logo" src="./logo.png" width="25px" />
                  <span className="lead font-weight-bold ml-4 mb-0">
                    Devwares
                  </span>
                </Link>
                <span
                  className="footer-rem"
                  style={{
                    fontSize: "3em",
                    margin: "-2rem 0px -1.5rem 1rem",
                    color: "#C4C4C4",
                  }}
                >
                  &#8226;
                </span>
                <small className="ml-2 mt-1">
                  &copy; Devwares, 2020. All rights reserved.
                </small>
              </div>
              <div className="footer-rem flex">
                <CDBBtn
                  flat
                  color="dark"
                  className="bg-dark border-0 py-1 px-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="bg-dark mx-3 border-0 py-1 px-2"
                >
                  <i className="fab fa-twitter"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="bg-dark border-0 py-1 px-2"
                >
                  <i className="fab fa-instagram"></i>
                </CDBBtn>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
