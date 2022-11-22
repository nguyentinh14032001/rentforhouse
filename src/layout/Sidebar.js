import {
  IconDarkMode,
  IconHouse,
  IconLogout,
  IconSidebar,
  IconUser,
} from "components/icons";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const sidebarLink = [
  {
    icon: <i class="fa-solid fa-shop"></i>,
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
const Sidebar = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [link, setLink] = useState([]);
  useEffect(() => {
    if (userData == null) {
      const newLink = sidebarLink.filter((item) => item.login == "nonLogin");
      setLink(newLink);
    } else {
      setLink(sidebarLink);
    }
  }, [userData]);

  const navlinkClass = "my-4 w-fit p-2 rounded-lg";
  return (
    <div className="w-[15vw]">
      <div className="fixed top-[19vh] z-10 flex flex-col pl-8 pr-4">
        {link &&
          link.map((item) => (
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
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
