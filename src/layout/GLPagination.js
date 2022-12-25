import React from "react";
import { Pagination } from "@mui/material";

const GLPagination = ({ pages, setPage }) => {
  const handlePageChange = (e, page) => {
    // console.log("page", page);
    // console.log("pages", pages);
    setPage(page);
  };

  return (
    <div className="col-span-3 my-4 flex items-center justify-center">
      <Pagination count={pages?.total_page} onChange={handlePageChange} />
    </div>
  );
};

export default GLPagination;
