import getConversations from "@/app/actions/getConversations";
import Sidebar from "@/app/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import { Toaster } from "react-hot-toast";


export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const conversations = await getConversations();

  return (
    <Sidebar>
      <Toaster/> 
      <div className="h-full">
        <ConversationList
          title="Messages" 
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
