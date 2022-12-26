import React, { useState } from "react";

import lodash from "lodash";
import Button from "../../../../components/button/Button";
import DashboardHeading from "../../DashboardHeading";
import OverviewTable from "./OverviewTable";

const UserManage = () => {
  const [filter, setFilter] = useState("");
  const handleQuery = lodash.debounce((e) => {
    setFilter(e.target.value);
  }, 500);
  return (
    <div>
      <DashboardHeading
        title="Users"
        desc="Manage your user"
      ></DashboardHeading>
      <div className="mb-10 flex justify-end">
        <div className="mr-3 w-full  max-w-[300px]">
          <input
            type="text"
            className="a w-full rounded-lg border border-solid border-gray-300 p-[16px]"
            placeholder="Search user..."
            onChange={handleQuery}
          />
        </div>
        <Button kind="primary" href="/manage/add-user">
          Add new user
        </Button>
      </div>
      <OverviewTable filter={filter}></OverviewTable>
    </div>
  );
};

export default UserManage;
