"use client";

import clsx from "clsx";
import { useState } from "react";

import Avatar from "@/app/components/Avatar";

const MessageBox = ({ data, isLast }) => {

  const isOwn = false

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");
  const avatar = clsx(isOwn && "order-2");
  const body = clsx("flex flex-col gap-2", isOwn && "items-end");
  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">{data.sender.name}</div>
          <div className="text-xs text-gray-400">
            {data.createdAt}
          </div>
        </div>
        <div className={message}>
            <div>{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
