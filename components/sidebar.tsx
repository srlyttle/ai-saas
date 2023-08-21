"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  UserPlus,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    colour: "text-sky-500",
    icon: LayoutDashboard,
  },
  {
    label: "Conversation",
    href: "/conversation",
    colour: "text-gray-400",
    icon: MessageSquare,
  },
];
export const Sidebar = () => {
  const pathname = usePathname();
  console.log("current path", pathname);
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white ">
      <div className="px-3 py-2 flex-1 ">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-12 h-8 mr-2">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-lg font-bold", montserrat.className)}>
            Ethermi.ai
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map(({ href, colour, icon: Icon, label }) => (
            <Link
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-gray-400 hover:bg-white/10 rounded-lg transition",
                pathname === href ? "text-gray-400 bg-white/10" : ""
              )}
              href={href}
              key={href}
            >
              <div className="flex items-center flex-1">
                <Icon className={cn("h-5 w-5 mr-3", colour)} />
                {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
