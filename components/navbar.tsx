import React from "react";
import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";
// import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
