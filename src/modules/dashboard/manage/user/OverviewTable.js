import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import axios from "axios";

import { baseURL } from "../../../../api/axios";
import LabelStatus from "../../../../components/label/LabelStatus";
import ActionView from "../../../../components/action/ActionView";
import ActionEdit from "../../../../components/action/ActionEdit";
import ActionDelete from "../../../../components/action/ActionDelete";
import Table from "../../../../components/table/Table";
import GLPagination from "../../../../layout/GLPagination";
const OverviewTable = ({ filter }) => {
  const [userList, setUserList] = useState([]);
  const user = localStorage.getItem("user");
  
  const userData = JSON.parse(user);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(true);
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  console.log(url);
  const [method, setMethod] = useState("");
  // function getName(name) {
  //   if (!name) return "user";
  //   const fullName = name.split(/(\s).+\s/).join("");
  //   return fullName;
  // }
  console.log(filter);
  useEffect(() => {
    if (filter) {
      setUrl(`${baseURL}/api/users/search/?content=${filter}`);
      setMethod("post");
    } else {
      setUrl(`${baseURL}/api/users`);
      setMethod("get");
    }
  }, [filter]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        await axios({
          method: `${method}`,
          url: `${url}`,
          params: {
            page: page,
            limit: 3,
          },
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setPages(response.data.data);
            setUserList(response.data.data.data);
            console.log("log", response.data.data);
            setIsChange(false);
            setLoading(false);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [method, page, url, userData.access_token]);
  const handleDeleteUser = async (user) => {
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
            .delete(`${baseURL}/api/users/${user?.id}`, {
              headers: {
                Authorization: userData.access_token,
              },
            })
            .then((res) => {
              console.log(res);
              if (res?.data?.data?.message == "successful delete") {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                setIsChange(true);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const renderLabelStatus = (status) => {
    switch (status) {
      case 1:
        return <LabelStatus type="success">Hoạt động</LabelStatus>;
      case 2:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case 0:
        return <LabelStatus type="danger">Khóa</LabelStatus>;

      default:
        break;
    }
  };
  const renderLabelRole = (role) => {
    switch (role) {
      case 1:
        return "Admin";
      case 2:
        return "Moderator";
      case 3:
        return "User";
      default:
        break;
    }
  };
  const renderUserItem = (user) => {
    return (
      <tr key={user?.id}>
        <td title={user?.id}>{user?.id}</td>
        <td className="whitespace-nowrap">
          <div className="flex items-center justify-center gap-x-3">
            <img
              src={user?.image}
              alt=""
              className=" h-10 w-10 flex-shrink-0 rounded-lg object-cover"
            />
            <div className="flex-1 ">
              <h3 className="font-semibold">{`${user?.lastName} ${user?.firstName}`}</h3>
              <time className="text-sm text-gray-400">
                {moment(user?.createdDate).format("MM/DD/YYYY (hh:mm:ss a)")}
              </time>
            </div>
          </div>
        </td>
        <td>{user?.phone}</td>
        <td>{user?.email}</td>
        <td>{renderLabelStatus(Number(user?.status))}</td>
        <td>{user?.roles[0]?.description}</td>
        <td>{user?.createdBy}</td>
        <td>
          <div className="flex items-center justify-center gap-x-3">
            <div className="flex-1 ">
              <h3 className="font-semibold">{user?.createdBy}</h3>
              <time className="text-sm text-gray-400">
                {moment(user?.createdDate).format("MM/DD/YYYY (hh:mm:ss a)")}
              </time>
            </div>{" "}
          </div>
        </td>

        <td>
          <div className="flex items-center gap-x-3">
            <ActionView></ActionView>
            <ActionEdit
              onClick={() => navigate(`/manage/update-user?id=${user?.id}`)}
            ></ActionEdit>
            <ActionDelete onClick={() => handleDeleteUser(user)}></ActionDelete>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Vai trò</th>
            <th>Người tạo</th>
            <th>Cập nhật bởi</th>
            <th></th>
          </tr>
        </thead>
        {loading && (
          <tbody className="relative h-[250px] w-[300px]">
            <div className=" absolute right-2/4 top-2/4 h-10 w-10  animate-spin  rounded-full border-[7px] border-green-600 border-b-transparent border-t-transparent"></div>
          </tbody>
        )}
        {!loading && (
          <tbody>
            {userList.length > 0 &&
              userList.map((user) => renderUserItem(user))}
          </tbody>
        )}
      </Table>

      <GLPagination pages={pages} setPage={setPage} />
    </div>
  );
};

export default OverviewTable;
