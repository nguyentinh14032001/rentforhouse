import { useEffect, useState } from "react";

import axios from "axios";
import { baseURL } from "api/axios";
import PopularHouse from "modules/homepage/PopularHouse";

import "../../assets/sass/section/News.scss";

function News() {
  const [houses, setHouses] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);

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
            setPages(res.data.data);
            setHouses(res.data.data.houses);
          });
      } catch (error) {}
    };
    fetchApi();
  }, [page]);

  return (
    <div className="News">
      <div className="news container">
        <div className="row">
          <div className="col-12 title">
            <span>Mới</span>
            <h1>Xem các căn mới nhất</h1>
          </div>
          {/* End row */}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {houses &&
            houses.map((house) => (
              <PopularHouse key={house?.id} house={house} />
            ))}
        </div>
      </div>
      {/* End container */}
    </div>
  );
}
export default News;
