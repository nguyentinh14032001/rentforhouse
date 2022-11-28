import {
  IconDarkMode,
  IconHouse,
  IconLogout,
  IconSidebar,
  IconUser,
} from "components/icons";

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const userLogout = () => {
    localStorage.setItem("user", JSON.stringify(""));
  };
  const sidebarLink = [
    {
      icon: <IconSidebar></IconSidebar>,
      title: "Home",
      url: "/home",
    },
    {
      icon: <IconHouse className="h-6 w-6"></IconHouse>,
      title: "House",
      url: "/your-house",
    },
    {
      icon: <IconUser></IconUser>,
      title: "Contact",
      url: "/contact",
    },
    {
      icon: <IconLogout></IconLogout>,
      title: "Logout",
      url: "/sign-in",
      onClick: () => userLogout(),
    },
    {
      icon: <IconDarkMode></IconDarkMode>,
      title: "Light/Dark",
      url: "/cx",
      onClick: () => {},
    },
  ];
  const navlinkClass =
    "flex  items-center gap-x-5 w-12 h-12 justify-center md:rounded-lg md:mb-8 last:bg-white last:shadow-sdprimary";
  return (
    <div
      className="fixed top-[15vh] z-10 flex w-full flex-col justify-center overflow-hidden 
    py-10 lg:w-[76px] 
    lg:pl-6"
    >
      {sidebarLink.map((item) => {
        if (item.onClick)
          return (
            <NavLink
              to={item.url}
              key={item.title}
              onClick={item.onClick}
              className={({ isActive }) =>
                isActive
                  ? `${navlinkClass} bg-primary bg-opacity-20 text-primary`
                  : `${navlinkClass} text-icon-color`
              }
            >
              <span>{item.icon}</span>
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
                : `${navlinkClass} text-icon-color`
            }
          >
            <span>{item.icon}</span>
            <span className="md:hidden">{item.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
