import React, { useContext, useEffect, useState } from "react";

import HighVoteItem from "./HighVoteItem";

import axios from "axios";
import { baseURL } from "api/axios";
import { Link, useNavigate } from "react-router-dom";

function HighVote() {
  let navigate = useNavigate();
  const [houses, setHouses] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios.get(`${baseURL}/api/houses/top-6`).then((res) => {
          setHouses(res?.data?.data);
        });
      } catch (error) {}
    };
    fetchApi();
  }, []);

  const newHouses = houses?.splice(4, 2);

  return (
    <div className="highvote mt-[30px] border-[1px] border-[#e2e2e2] p-[20px]">
      <h1 className="mb-4 border-l-[3px] border-[#ff5a3c] pl-[10px] text-[20px] font-bold">
        Đánh giá cao
      </h1>
      {houses &&
        houses.map((house) => (
          <Link to={`/detail/${house?.id}`} key={house?.id}>
            <HighVoteItem house={house} />
          </Link>
        ))}
    </div> /* End fragment */
  );
}

export default HighVote;
