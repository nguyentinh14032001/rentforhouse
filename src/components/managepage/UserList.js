import React, { useEffect, useState } from "react";
import axios from "axios";

import { baseURL } from "api/axios";
import UserListItem from "./UserListItem";

import "assets/sass/managepage/UserList.scss";
const UserList = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/users?limit=3&page=1`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setUsers(response.data.data.data);
            // console.log(response.data.data);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-[70vw] flex-col">
        <form action="">
          <table className="user-list w-full">
            <thead className="text-left">
              <tr>
                <th>ID</th>
                <th>Họ và tên</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Vai trò</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item) => (
                  <UserListItem key={item?.id} user={item} />
                ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default UserList;
