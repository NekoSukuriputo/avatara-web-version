import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiBuildingStorefront, HiUsers } from "react-icons/hi2";
import useConversation from "./useConversations";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/chat",
        icon: HiChat,
        active: pathname === "/chat" || !!conversationId,
      },
      {
        label: "Kontak",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Transaksi",
        href: "#",
        icon: HiBuildingStorefront,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
