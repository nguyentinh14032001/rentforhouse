import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ children }) => {
  return <div className="bg-lite py-10 px-[52px]">
  <DashboardTopbar></DashboardTopbar>
  {children}</div>;
};

export default LayoutDashboard;
