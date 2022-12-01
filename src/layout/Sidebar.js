import {
  IconDarkMode,
  IconHouse,
  IconLogout,
  IconSidebar,
  IconUser,
} from "components/icons";

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    url: "/xczxc",
    login: "needLogin",
    onClick: () => {},
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "/cx",
    login: "nonLogin",
    onClick: () => {},
  },
];

const dashboardLink = [
  {
    icon: <i className="fa-regular fa-user"></i>,
    text: "Người dùng",
    title: "UserManager",
    login: "nonLogin",
  },
];

const Sidebar = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const navigate = useNavigate();
  //const [link, setLink] = useState([]);
  const userLogout = () => {
    localStorage.setItem("user", JSON.stringify(""));
    navigate("/sign-in");
  };
  const link = [
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

  const [windowURL, setWindowURL] = useState();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    setWindowURL(window.location.href);
    if (windowURL == "http://localhost:3000/manage") {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [windowURL]);

  // useEffect(() => {
  //   console.log("go");
  //   if (userData == null) {
  //     const newLink = sidebarLink.filter((item) => item.login == "nonLogin");
  //     setLink(newLink);
  //   } else if (userData && isDashboard == true) {
  //     setLink(dashboardLink);
  //   } else {
  //     setLink(sidebarLink);
  //   }
  // }, [isDashboard, sidebarLink, userData]);

  const navlinkClass = "my-4 w-fit p-2 rounded-lg";

  return (
    <div className="w-[15vw]">
      <div className="fixed top-[19vh] z-10 flex flex-col pl-8 pr-4">
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
