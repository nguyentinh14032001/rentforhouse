import React, { useState } from "react";

import lodash from "lodash";
import Button from "../../../../components/button/Button";
import DashboardHeading from "../../DashboardHeading";
import OverviewTable from "./OverviewTable";
import { baseURL } from "api/axios";
import axios from "axios";
import fs from "fs";
import { toast } from "react-toastify";
const HouseManage = () => {
  const [filter, setFilter] = useState("");
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [isChange, setIsChange] = useState(false);
  const [fileImport, setFileImport] = useState("");
  const handleQuery = lodash.debounce((e) => {
    setFilter(e.target.value);
  }, 500);

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
  const handleImportFileExcel = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append("file", fileImport);
    try {
      const response = await axios({
        method: `post`,
        url: `${baseURL}/api/houses/import/excel`,
        data: bodyFormData,
        headers: {
          Authorization: userData.access_token,
          "Content-Type": "multipart/form-data",
        },
      })
        .then(function (response) {
          console.log(response);
          toast.success("Nhập file bài đăng thành công");
          setIsChange(true);
        })
        .catch(function (response) {});
    } catch (error) {
      throw Error(error);
    }
  };
  return (
    <div>
      <DashboardHeading
        title="House"
        desc="Manage your house"
      ></DashboardHeading>
      <div className="flex justify-between">
        <div>
          <Button
            kind="primary"
            type="button"
            onClick={() => {
              handleExportFileExcel();
            }}
          >
            Xuất file excel
          </Button>
        </div>
        <div className="item flex gap-x-1">
          <div>
            <Button
              kind="primary"
              type="button"
              onClick={() => {
                handleImportFileExcel();
              }}
            >
              Nhập file excel
            </Button>
          </div>
          <input type="file" onChange={handleChange} />
        </div>

        <div className="mb-10 flex">
          <div className="mr-3 w-full max-w-[300px]">
            <input
              type="text"
              className=" w-full rounded-lg border border-solid border-gray-300 p-[16px]"
              placeholder="Search house..."
              onChange={handleQuery}
            />
          </div>
          <div className="w-full">
            <Button kind="ghost" href="/manage/add-house">
              Tạo mới nhà
            </Button>
          </div>
        </div>
      </div>
      <OverviewTable filter={filter}></OverviewTable>
    </div>
  );
};

export default HouseManage;
