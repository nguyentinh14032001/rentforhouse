import {
  IconDarkMode,
  IconHouse,
  IconLogout,
  IconSidebar,
  IconUser,
} from "components/icons";

import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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

const Sidebar = () => {
  const { id } = useParams();
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [link, setLink] = useState([]);

  const [windowURL, setWindowURL] = useState();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
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
    if (userData == null) {
      const newLink = sidebarLink.filter((item) => item.login == "nonLogin");
      setLink(newLink);
    } else if (userData && isDashboard == true) {
      setLink(dashboardLink);
    } else {
      setLink(sidebarLink);
    }
  }, [userData]);

  const navlinkClass = "my-4 w-fit p-2 rounded-lg";

  return (
    <div className="w-[15vw]">
      <div
        className={
          isDashboard == true
            ? "flex w-fit flex-col pl-8 pr-4"
            : "fixed top-[19vh] z-10 flex flex-col pl-8 pr-4"
        }
      >
        {link &&
          link.map((item) => (
            <NavLink
              to={item.url}
              key={item.title}
              className={({ isActive }) =>
                isActive
                  ? `${navlinkClass} whitespace-nowrap bg-primary bg-opacity-20 text-primary`
                  : `${navlinkClass} whitespace-nowrap text-icon-color hover:text-primary`
              }
            >
              <div className="flex">
                <span className="pr-2">{item.icon}</span>
                <span>{item.text}</span>
              </div>
              <span className="md:hidden">{item.title}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
