import React, { useState } from "react";
import lodash from "lodash";
import Button from "../../../../components/button/Button";
import DashboardHeading from "../../DashboardHeading";
import OverviewTable from "./OverviewTable";
import { baseURL } from "api/axios";
import axios from "axios";
import fs from "fs";
import { toast } from "react-toastify";
const CheckHouse = () => {
  const [filter, setFilter] = useState("");
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [isChange, setIsChange] = useState(false);
  const [fileImport, setFileImport] = useState("");
  const handleQuery = lodash.debounce((e) => {
    setFilter(e.target.value);
  }, 500);

  // api xuất file excel
  const handleExportFileExcel = async () => {
    try {
      const response = await axios({
        method: `get`,
        url: `${baseURL}/api/houses/export/excel`,
        responseType: "arraybuffer",
        headers: {
          Authorization: userData.access_token,
          "Content-Type": "blob",
        },
      });
      const dateNow = new Date();
      // const outputFilename = `${Date.now()}.xls`;
      const outputFilename = `House_${dateNow.getFullYear()}_${
        dateNow.getMonth() + 1
      }_${dateNow.getDay()}.xlsx`;
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", outputFilename);
      document.body.appendChild(link);
      link.click();
      fs.writeFileSync(outputFilename, response.data);
    } catch (error) {
      throw Error(error);
    }
  };

  const handleChange = (e) => {
    const imageUpload = e.target.files[0];
    setFileImport(imageUpload);
  };

  return (
    <div>
      <DashboardHeading
        title="Check House"
        desc="review home sale posts"
      ></DashboardHeading>
      <div className="flex justify-between">
        <div className="mb-10 flex">
          <div className="mr-3 w-full max-w-[300px]">
            <input
              type="text"
              className=" w-full rounded-lg border border-solid border-gray-300 p-[16px]"
              placeholder="Search post sell house..."
              onChange={handleQuery}
            />
          </div>
        </div>
      </div>
      <OverviewTable filter={filter}></OverviewTable>
    </div>
  );
};

export default CheckHouse;
