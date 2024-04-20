"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full my-8">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
