import React from "react";
<<<<<<< HEAD

=======
import axios, { baseURL } from "api/axios";
>>>>>>> homepage2
import moment from "moment/moment";
import axios from "axios";

const UserListItem = ({ user, setIsChange }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  // console.log("ngày cập nhật", moment(user?.modifiedDate).toDate().valueOf());
  // console.log("ngày tạo", moment(user?.createdDate).toDate().valueOf());

  const deleteUser = async () => {
    try {
      await axios
        .delete(`${baseURL}/api/users/${user?.id}`, {
          headers: {
            Authorization: userData.access_token,
          },
        })
        .then((res) => {
          if (res?.data?.data?.message == "successful delete") {
            setIsChange(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr>
        <td>{user?.id}</td>
        <td className="capitalize">
          {user?.lastName} {user.firstName}
        </td>
        <td>{user?.phone}</td>
        <td>{user?.email}</td>
        <td className={user?.status == true ? "text-[green]" : "text-[red]"}>
          {user?.status == true ? "Bình thường" : "Bị khoá"}
        </td>
        <td>{user?.roles.map((item) => item?.description)}</td>
        <td>{user?.createdBy}</td>
        <td>{moment(user?.createdDate).format("MM/DD/YYYY (hh:mm:ss a)")}</td>
        <td>{user?.modifiedBy}</td>
        <td>{moment(user?.modifiedDate).format("MM/DD/YYYY (hh:mm:ss a)")}</td>
        <td className="btn-control flex justify-around">
          <button className="text-[red]" onClick={deleteUser}>
            Xoá
          </button>
          {/* <button className="text-[green]">Sửa</button> */}
        </td>
      </tr>
    </>
  );
};

export default UserListItem;
