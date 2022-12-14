import React, { createContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import GLPagination from "../layout/GLPagination";
import axios from "axios";
import { baseURL } from "../api/axios";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import UserList from "../components/managepage/UserList";
import HouseManage from "../components/managepage/HouseManage";

export const DashboardContext = createContext();

const ManagePage = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const { id } = useParams();

  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [houses, setHouses] = useState([]);

  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    if (id == "usersmanage") {
      async function fetchData() {
        try {
          await axios({
            method: "get",
            url: `${baseURL}/api/users`,
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
              setUsers(response.data.data.data);
              setIsChange(false);
            })
            .catch(function (response) {});
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    } else if (id == "postmanage") {
      const fetchApi = async () => {
        try {
          await axios
            .get(`${baseURL}/api/houses/all`, {
              params: {
                page: page,
                limit: 10,
              },
            })
            .then((res) => {
              setPages(res.data.data);
              setHouses(res.data.data.houses);
              setIsChange(false);
            });
        } catch (error) {}
      };
      fetchApi();
    }
  }, [page, isChange == true, window.location.href]);

  const value = { users, setIsChange, houses };
  return (
    <>
      <DashboardContext.Provider value={value}>
        <Navbar></Navbar>
        <div className="flex items-start">
          <Sidebar></Sidebar>

          {id == "usersmanage" && <UserList />}
          {id == "postmanage" && <HouseManage />}
          <GLPagination pages={pages} setPage={setPage} />
        </div>
      </DashboardContext.Provider>
    </>
  );
};

export default ManagePage;
