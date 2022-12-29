import React, { useState, useEffect } from "react";
import Chart1 from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import { baseURL } from "api/axios";
import axios from "axios";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { Dropdown } from "components/dropdown";
import Select from "components/dropdown/Select";
import List from "components/dropdown/List";
import Option from "components/dropdown/Option";

const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState("");
  const [url, setUrl] = useState("");

  let yearCurrent = new Date().getFullYear();

  const [selectMonth, setSelectMonth] = useState("");
  let yearOld = yearCurrent - 2;
  let years = [];
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  for (let i = yearCurrent; i >= yearOld; i--) {
    years.push(i);
  }

  const [selectYear, setSelectYear] = useState(yearCurrent);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Người dùng mới",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "Số bài viết được đăng",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      let month2 = [];
      let value = [];
      let valueUser = [];

      try {
        await axios({
          method: `get`,
          url: `${url}`,

          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            for (const dataObj of response.data.dataHouses) {
              month2.push(dataObj?.column);
              value.push(dataObj?.value);
            }
            for (const dataObj of response.data.dataUsers) {
              valueUser.push(dataObj?.value);
            }
            setData1(response.data);
          })
          .catch(function (response) {});
      } catch (error) {
        setLoading(false);
      }

      setChartData({
        labels: month2,
        datasets: [
          {
            label: "Người dùng mới",
            backgroundColor: "rgba(194, 116, 161, 0.5)",
            borderColor: "rgb(194, 116, 161)",
            data: valueUser,
          },
          {
            label: "Số bài viết được đăng",
            backgroundColor: "rgba(71, 225, 167, 0.5)",
            borderColor: "rgb(71, 225, 167)",
            data: value,
          },
        ],
      });
    }
    fetchData();
  }, [selectYear, url, userData.access_token]);
  useEffect(() => {
    if (selectMonth) {
      setUrl(
        `${baseURL}/api/dasdboard/interactive/chart/month/?month=${selectMonth}&year=${selectYear}`
      );
    } else {
      setUrl(`${baseURL}/api/dasdboard/interactive/chart?year=${selectYear}`);
    }
  }, [selectMonth, selectYear]);
  return (
    <div className="mt-[16px] mb-[16px] rounded-xl border-2 p-[16px]">
      <div className="ml-[75px] flex gap-x-3">
        <div>
          <Label className="text-xl font-bold">Năm *</Label>
          <div className="max-w-[200px]">
            <Dropdown>
              <Select placeholder={selectYear || "Chọn năm"}></Select>
              <List>
                {years &&
                  years?.map((item) => (
                    <Option key={item} onClick={() => setSelectYear(item)}>
                      <span className="">{item}</span>
                    </Option>
                  ))}
              </List>
            </Dropdown>
          </div>
        </div>
        <div>
          <Label className="text-xl font-bold">Tháng *</Label>
          <div className="max-w-[200px]">
            <Dropdown>
              <Select
                placeholder={`Tháng ${selectMonth}` || "Chọn tháng"}
              ></Select>
              <List>
                <Option onClick={() => setSelectMonth("")}>
                  <span className="w-full text-[16px] font-semibold">
                    Tháng
                  </span>
                </Option>
                {months &&
                  months?.map((item) => (
                    <Option key={item} onClick={() => setSelectMonth(item)}>
                      <span className="">{`Tháng ${item}`}</span>
                    </Option>
                  ))}
              </List>
            </Dropdown>
          </div>
        </div>
      </div>

      <CDBContainer>
        <h3 className="mt-5 font-semibold text-text-1">Line chart</h3>
        <Line data={chartData} options={{ responsive: true }} />
      </CDBContainer>
    </div>
  );
};

export default Chart;
