import {
  IconDarkMode,
  IconHouse,
  IconLogout,
  IconSidebar,
  IconUser,
} from "components/icons";

import React from "react";
import { NavLink } from "react-router-dom";

const sidebarLink = [
  {
    icon: <IconSidebar></IconSidebar>,
    title: "Home",
    url: "/home",
  },
  {
    icon: <IconHouse className="h-6 w-6"></IconHouse>,
    title: "House",
    url: "/slug",
  },
  {
    icon: <IconUser></IconUser>,
    title: "Contact",
    url: "/contact",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/xczxc",
    onClick: () => {},
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "/cx",
    onClick: () => {},
  },
];
const Sidebar = () => {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary";
  return (
    <div
      className="block w-full 
    rounded-[20px] bg-white px-[14px] py-10 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] 
    md:w-[76px]"
    >
      {sidebarLink.map((item) => (
        
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
      ))}
    </div>
  );
};

export default Sidebar;
