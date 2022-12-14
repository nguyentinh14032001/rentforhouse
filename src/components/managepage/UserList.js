import React, { useContext } from "react";

import UserListItem from "./UserListItem";

import { DashboardContext } from "../../pages/ManagePage";
const UserList = () => {
  const value = useContext(DashboardContext);
  const { users, setIsChange } = value;
  return (
    <>
      <div>
        <form action="">
          <table className="user-list mr-[20px]">
            <thead className="text-left">
              <tr>
                <th>ID</th>
                <th>Họ và tên</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Vai trò</th>
                <th>Người tạo</th>
                <th>Ngày tạo</th>
                <th>Cập nhật bởi</th>
                <th>Ngày cập nhật</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item) => (
                  <UserListItem
                    key={item?.id}
                    user={item}
                    setIsChange={setIsChange}
                  />
                ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default UserList;
