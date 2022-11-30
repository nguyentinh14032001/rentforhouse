import React from "react";
import { Pagination } from "@mui/material";

const GLPagination = ({ pages, setPage }) => {
  const handlePageChange = (e, page) => {
    setPage(page);
  };

  return (
    <div className="my-4 flex items-center justify-center">
      <Pagination count={pages.total_page} onChange={handlePageChange} />
    </div>
  );
};

export default GLPagination;
