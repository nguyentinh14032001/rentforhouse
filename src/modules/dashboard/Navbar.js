import React from "react";
import { Header } from "./Header";
import { CDBNavbar, CDBInput } from "cdbreact";

const Navbar = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  return (
    <Header style={{ background: "#fff", color: "#1DC071" }}>
      <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        <CDBInput
          type="search"
          size="md"
          hint="Search"
          className="mb-n4 mt-n3 input-nav"
        />
        <div className="ml-auto">
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-alt mx-4"></i>
          <img
            alt="panelImage"
            src={userData?.image}
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default Navbar;
