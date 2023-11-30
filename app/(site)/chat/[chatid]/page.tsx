import getConversationById from "@/app/actions/getConversationById";
import getUserById from "@/app/actions/getUserById";

import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import EmptyState from "@/app/components/EmptyState";


const ChatId = async ({ params }) => {
  const conversation = await getConversationById(params.chatid);
  const messages = conversation.messages;
  const user = await getUserById(params.chatid)
//   console.log('messages', messages)

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={user} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ChatId;
