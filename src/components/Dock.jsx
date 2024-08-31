"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HomeIcon from "./icons/HomeIcon";
import BlogIcon from "./icons/BlogIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import ResumeIcon from "./icons/ResumeIcon";

const DockItem = ({ href, icon, label, isActive, onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={`flex transition-all duration-1000 ease-in-out items-center gap-1 px-3 py-2 rounded-xl backdrop-blur-sm ${
          isActive ? "bg-white/20 w-auto" : "bg-white/10 w-12"
        } hover:bg-white/20`}
      >
        {icon}
        <p
          className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
            isActive
              ? "max-w-24 opacity-100 transition-opacity duration-500 ease-in-out"
              : "max-w-0 opacity-100 transition-opacity duration-500 ease-in-out"
          }`}
        >
          {label}
        </p>
      </div>
    </Link>
  );
};

const Dock = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(router.pathname);

  const handleItemClick = (href) => {
    setActiveItem(href);
  };

  const items = [
    { href: "/", icon: <HomeIcon />, label: "Home" },
    { href: "/blog", icon: <BlogIcon />, label: "Blog" },
    { href: "/projects", icon: <ProjectsIcon />, label: "Projects" },
    { href: "/resume", icon: <ResumeIcon />, label: "Resume" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/10 backdrop-blur-sm rounded-3xl p-2 flex space-x-4 border-[0.5px] border-white/30">
      {items.map((item) => (
        <DockItem
          key={item.href}
          {...item}
          isActive={activeItem === item.href}
          onClick={() => handleItemClick(item.href)}
        />
      ))}
    </div>
  );
};

export default Dock;
