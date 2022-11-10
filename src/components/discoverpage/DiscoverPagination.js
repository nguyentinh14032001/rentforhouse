import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import service from "./Service";

const pageSize = 3;

const DiscoverPagination = ({ setProducts }) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        setPagination({ ...pagination, count: response.count });
        setProducts(response.data);
      });
  }, [pagination.from, pagination.to]);

  const handlePageChange = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <div className="my-4 flex items-center justify-center">
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default DiscoverPagination;
