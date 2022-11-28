import React from "react";

const UserListItem = ({ user }) => {
  return (
    <>
      <tr key={user?.id}>
        <td>{user?.id}</td>
        <td className="capitalize">
          {user?.lastName} {user.firstName}
        </td>
        <td>{user?.phone}</td>
        <td>{user?.email}</td>
        <td>{user?.status == true ? "Bình thường" : "Bị khoá"}</td>
        <td>Người dùng</td>
        <td className="flex justify-around">
          <button className="text-[red]">Xoá</button>
          <button className="text-[green]">Sửa</button>
        </td>
      </tr>
    </>
  );
};

export default UserListItem;
