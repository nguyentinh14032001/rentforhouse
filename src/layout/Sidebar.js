import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import {
  IconDarkMode,
  IconHouse,
  IconLogout,
  IconSidebar,
  IconUser,
} from "../components/icons";

const dashboardLink = [
  {
    icon: <i className="fa-regular fa-user"></i>,
    url: "/manage/usersmanage",
    text: "Người dùng",
    title: "UserManager",
  },
  {
    icon: <i className="fa-solid fa-pen-to-square"></i>,
    url: "/manage/postmanage",
    text: "Bài Đăng",
    title: "PostManager",
  },
];

const Sidebar = ({ isFixed }) => {
  const sidebarLink = [
    {
      icon: <i className="fa-solid fa-shop"></i>,
      text: "Trang chủ",
      title: "Home",
      url: "/home",
      login: "nonLogin",
    },
    {
      icon: <IconSidebar></IconSidebar>,
      text: "Khám phá",
      title: "Discover",
      url: "/discover",
      login: "nonLogin",
    },
    {
      icon: <IconHouse className="h-6 w-6"></IconHouse>,
      text: "Nhà của bạn",
      title: "House",
      url: "/your-house",
      login: "needLogin",
    },
    {
      icon: <IconUser></IconUser>,
      text: "Liên hệ",
      title: "Contact",
      url: "/contact",
      login: "nonLogin",
    },
    {
      icon: <IconLogout></IconLogout>,
      text: "Đăng xuất",
      title: "Logout",
      url: "/sign-in",
      login: "needLogin",
      onClick: () => userLogout(),
    },
    {
      icon: <IconDarkMode></IconDarkMode>,
      title: "Light/Dark",
      url: "/cx",
      login: "nonLogin",
      onClick: () => {},
    },
  ];

  const { id } = useParams();
  //get login user
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const navigate = useNavigate();

  const navlinkClass = "my-4 w-fit p-2 rounded-lg";

  const [link, setLink] = useState([]);
  // logout fuction
  const userLogout = () => {
    localStorage.removeItem("user");
    navigate("/sign-in");
  };

  const [windowURL, setWindowURL] = useState();
  const [isDashboard, setIsDashboard] = useState(false);
  const [sidebarMT, setSidebarM] = useState(0);

  useEffect(() => {
    // check if it is dashboard
    setWindowURL(window.location.href);
    if (
      windowURL == `http://localhost:3000/manage/${id}` ||
      windowURL == `http://localhost:3000/manage/${id}?`
    ) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [windowURL]);

  useEffect(() => {
    //change sidebar content
    if (userData == null) {
      const newLink = sidebarLink.filter((item) => item.login == "nonLogin");
      setLink(newLink);
    } else if (userData && isDashboard == true) {
      setLink(dashboardLink);
    } else if (userData) {
      setLink(sidebarLink);
    }
  }, [userData && windowURL && isDashboard]);

  return (
    <div
      className={
        isFixed == true ? "w-[15vw]" : "flex w-[15vw] flex-col justify-end"
      }
    >
      <div
        className={
          isDashboard == true
            ? "flex w-fit flex-col pl-8 pr-4"
            : isFixed == true
            ? "fixed top-[18vh] flex w-fit flex-col pl-8 pr-4"
            : "flex w-fit flex-col pl-8 pr-4"
        }
        // fixed top-[19vh] z-10
      >
        {link &&
          link.map((item) => {
            if (item.onClick)
              return (
                <NavLink
                  onClick={item.onClick}
                  key={item.title}
                  to={item.url}
                  className={({ isActive }) =>
                    isActive
                      ? `${navlinkClass} bg-primary bg-opacity-20 text-primary`
                      : `${navlinkClass} text-icon-color hover:text-primary`
                  }
                >
                  <div className="flex">
                    <span className="pr-2">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                  <span className="md:hidden">{item.title}</span>
                </NavLink>
              );
            return (
              <NavLink
                to={item.url}
                key={item.title}
                className={({ isActive }) =>
                  isActive
                    ? `${navlinkClass} bg-primary bg-opacity-20 text-primary`
                    : `${navlinkClass} text-icon-color hover:text-primary`
                }
              >
                <div className="flex">
                  <span className="pr-2">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
                <span className="md:hidden">{item.title}</span>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
