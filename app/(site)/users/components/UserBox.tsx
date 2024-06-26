import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import Avatar from "@/app/components/Avatar";

const UserBox = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    router.push(`/chat/${data.id}`);
  }, [data, router]);

  return (
    <>
      <div
        onClick={handleClick}
        className="
          w-full 
          relative 
          flex 
          items-center 
          space-x-3 
          bg-white 
          p-3 
          hover:bg-neutral-100
          rounded-lg
          transition
          cursor-pointer
        "
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-900">{data.name}</p>
            </div>
            <div>
              <p className="text-xs font-small text-gray-700">{data.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
