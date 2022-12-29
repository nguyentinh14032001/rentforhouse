import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { baseURL } from "api/axios";
import HeaderLists from "components/header/HeaderLists";
import MenuUser from "components/header/MenuUser";
import SearchHomePage from "../modules/homepage/SearchHomePage";

import logo from "assets/images/logo-new.png";
import logo2 from "assets/images/logo-new-2.png";
import "assets/sass/layout/Header.scss";

export const HeaderContext = createContext();

function Header({ main, id }) {
  const authorUser = JSON.parse(localStorage.getItem("user"));

  const [navActive, setNavActive] = useState(false);
  const [checkmain, setChekmain] = useState(false);
  const [profile, setProfile] = useState();
  const [image, setImage] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/profiles/`,
          headers: {
            Authorization: authorUser.access_token,
          },
        })
          .then(function (response) {
            setProfile(response?.data?.data);
            setImage(response?.data?.data?.image);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const nav = document.querySelector(".navbar");
    const fixNav = () => {
      if (nav) {
        setNavActive(window.scrollY > nav?.offsetHeight);
        if (main) {
          setChekmain(window.scrollY > nav?.offsetHeight);
        }
      }
    };
    window.addEventListener("scroll", fixNav);
  }, [navActive]);

  const value = {
    image,
    setImage,
    profile,
    setProfile,
    show,
    setShow,
    navActive,
  };

  return (
    <HeaderContext.Provider value={value}>
      <nav
        className={
          navActive == true
            ? "navbar navbar-expand-lg fixed z-50 w-full bg-black py-2 text-white"
            : "navbar navbar-expand-lg bg-light py-2"
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            {navActive == true ? (
              <img src={logo2} alt="" />
            ) : (
              <img src={logo} alt="" />
            )}
          </Link>
          <div className="w-full max-w-[458px]">
            <SearchHomePage></SearchHomePage>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex justify-end"
            id="navbarNav"
          >
            <HeaderLists />
          </div>
        </div>
      </nav>
      {show && <MenuUser />}
      {/* end menu to profile */}
    </HeaderContext.Provider>
  );
}
export default Header;
