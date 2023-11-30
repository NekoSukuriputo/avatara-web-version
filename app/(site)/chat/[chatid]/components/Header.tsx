"use client";

import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { useMemo, useState } from "react";
import Link from "next/link";

import Avatar from "@/app/components/Avatar";
import ProfileDrawer from "./ProfileDrawer";

const Header = ({ conversation }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log('conversation', conversation)
  const isActive = true;
  const statusText = useMemo(() => {
    return isActive ? "Active" : "Offline";
  }, [conversation, isActive]);

  return (
    <>
        <ProfileDrawer 
            data={conversation} 
            isOpen={drawerOpen} 
            onClose={() => setDrawerOpen(false)}
        />
      <div
        className="
        bg-white 
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 
        py-3 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-sm
      "
      >
        <div className="flex gap-3 items-center">
          <Link
            href="/chat"
            className="
            lg:hidden 
            block 
            text-sky-500 
            hover:text-sky-600 
            transition 
            cursor-pointer
          "
          >
            <HiChevronLeft size={32} />
          </Link>
          <Avatar user={conversation} />
          <div className="flex flex-col">
            <div>{conversation.name}</div>
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawerOpen(true)}
          className="
          text-sky-500
          cursor-pointer
          hover:text-sky-600
          transition
        "
        />
      </div>
    </>
  );
};

export default Header;
