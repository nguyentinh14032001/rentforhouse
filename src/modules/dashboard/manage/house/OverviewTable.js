import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { baseURL } from "../../../../api/axios";
import axios from "axios";
import ActionView from "../../../../components/action/ActionView";
import ActionEdit from "../../../../components/action/ActionEdit";
import ActionDelete from "../../../../components/action/ActionDelete";
import Table from "../../../../components/table/Table";
import LabelStatus from "../../../../components/label/LabelStatus";
import GLPagination from "../../../../layout/GLPagination";
import LoadingDashboard from "modules/dashboard/LoadingDashboard";

const OverviewTable = ({ filter }) => {
  const [houseList, setHouseList] = useState([]);

  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(true);
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("");
  function getName(name) {
    if (!name) return "house";
    const fullName = name.split(/(\s).+\s/).join("");
    return fullName;
  }
  console.log(filter);
  useEffect(() => {
    if (filter) {
      setUrl(`${baseURL}/api/houses/?name=${filter}`);
      setMethod("post");
    } else {
      setUrl(`${baseURL}/api/houses/all`);
      setMethod("get");
    }
  }, [filter]);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        await axios({
          method: `${method}`,
          url: `${url}`,
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
            setIsChange(false);
            console.log(response.data.data);
            setLoading(false);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [method, page, url, userData.access_token, isChange]);
  const handleDeleteUser = async (house) => {
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
  const renderUserItem = (house) => {
    return (
      <tr key={house?.id}>
        <td>{house?.id}</td>
        <td className="whitespace-nowrap">
          <div
            title={house?.name}
            className="flex items-center justify-center gap-x-3"
          >
            <img
              src={house?.image}
              alt=""
              className=" h-10 w-10 flex-shrink-0 rounded-lg object-cover"
            />
            <div className="flex-1 ">
              <h3 className="font-semibold">{`${house?.houseType?.name}`}</h3>
              <time className="text-sm text-gray-400">
                {moment(house?.createdDate).format("MM/DD/YYYY (hh:mm:ss a)")}
              </time>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center justify-center gap-x-3">
            <img
              src={house?.user?.image}
              alt=""
              className=" h-10 w-10 flex-shrink-0 rounded-lg object-cover"
            />
            <div className="flex-1 ">
              <h3 className="font-semibold">{`${house?.user?.firstName}, ${house?.user?.phone}`}</h3>
              <time className="text-sm text-gray-400">
                {`${house?.user?.email}`}
              </time>
            </div>
          </div>
        </td>
        <td className="whitespace-pre-wrap">
          <div>{house?.address}</div>
          <div>{`Diện tích: ${house?.area}m, Giá: ${house?.price.toLocaleString(
            "it-IT",
            { style: "currency", currency: "VND" }
          )}`}</div>
        </td>

        <td>{renderLabelStatus(Number(house?.status))}</td>

        <td>
          <div className="flex items-center justify-center gap-x-3">
            <div className="flex-1 ">
              <h3 className="font-semibold">{house?.createdBy}</h3>
              <time className="text-sm text-gray-400">
                {moment(house?.createdDate).format("MM/DD/YYYY (hh:mm:ss a)")}
              </time>
            </div>{" "}
          </div>
        </td>

        <td>
          <div className="flex items-center gap-x-3">
            <ActionView
              onClick={() => navigate(`/detail/${house?.id}`)}
            ></ActionView>
            <ActionEdit
              onClick={() => navigate(`/manage/update-house?id=${house?.id}`)}
            ></ActionEdit>
            <ActionDelete
              onClick={() => handleDeleteUser(house)}
            ></ActionDelete>
          </div>
        </td>
      </tr>
    );
  };
  console.log(houseList);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nhà</th>
            <th>Người bán</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Người sửa</th>
            <th></th>
          </tr>
        </thead>
        {loading && (
          <tbody className="relative h-[250px] w-[300px]">
            <LoadingDashboard></LoadingDashboard>
          </tbody>
        )}
        {!loading && (
          <tbody>
            {houseList.length > 0 &&
              houseList.map((house) => renderUserItem(house))}
          </tbody>
        )}
      </Table>
      <GLPagination pages={pages} setPage={setPage} />
    </div>
  );
};

export default OverviewTable;
