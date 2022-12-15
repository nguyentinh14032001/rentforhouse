import React, { useState } from "react";

import lodash from "lodash";
import Button from "../../../../components/button/Button";
import DashboardHeading from "../../DashboardHeading";
import OverviewTable from "./OverviewTable";

const HouseManage = () => {
  const [filter, setFilter] = useState("");
  const [isChange, setIsChange] = useState(false);
  const handleQuery = lodash.debounce((e) => {
    setFilter(e.target.value);
  }, 500);
  return (
    <div>
      <DashboardHeading
        title="House"
        desc="Manage your house"
      ></DashboardHeading>
      <div className="mb-10 flex justify-end">
        <div className="mr-3 w-full  max-w-[300px]">
          <input
            type="text"
            className=" w-full rounded-lg border border-solid border-gray-300 p-4"
            placeholder="Search house..."
            onChange={handleQuery}
          />
        </div>
        <Button kind="ghost" href="/sell-house">
          Add house
        </Button>
      </div>
      <OverviewTable filter={filter}></OverviewTable>
    </div>
  );
};

export default HouseManage;
