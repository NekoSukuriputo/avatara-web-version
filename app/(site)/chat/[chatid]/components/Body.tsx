"use client";

import { useEffect, useRef, useState } from "react";

// import useConversation from "@/app/hooks/useConversations";
import MessageBox from "./MessageBox";

const BodyChat = ({ initialMessages = [] }) => {

  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);

//   const { conversationId } = useConversation();


  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
};

export default BodyChat;
