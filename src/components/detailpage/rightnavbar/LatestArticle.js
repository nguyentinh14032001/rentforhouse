import React, { useContext, useEffect, useState } from "react";

import LatestArticleItem from "./LatestArticleItem";
import { Link, useNavigate } from "react-router-dom";
import { DetailContext } from "pages/DetailPage";

import "assets/sass/detailpage/LatestArticle.scss";
import axios from "axios";
import { baseURL } from "api/axios";

function LatestArticle() {
  let navigate = useNavigate();
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`${baseURL}/api/houses/status/true`, {
            params: {
              limit: 4,
              page: 1,
            },
          })
          .then((res) => {
            setHouses(res.data.data.houses);
          });
      } catch (error) {}
    };
    fetchApi();
  }, []);

  return (
    <div className="latest-article">
      <h1>Bài viết mới nhất</h1>
      {houses &&
        houses.map((house) => (
          <Link to={`/detail/${house?.id}`} key={house?.id}>
            <LatestArticleItem house={house} />
          </Link>
        ))}
    </div> /* End fragment */
  );
}

export default LatestArticle;
