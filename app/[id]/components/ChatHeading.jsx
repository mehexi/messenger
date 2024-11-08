import { SidebarTrigger } from "@/components/ui/sidebar";
import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";

const ChatHeading = ({ data }) => {
  return (
    <div className="bg-secondary px-6 w-full py-3 flex justify-between items-center max-w-screen-2xl">
      <div className="flex items-center gap-6">
        <SidebarTrigger className="rounded-full" />
        <div className="flex items-center gap-3">
          <Image
            src={data.profilePicture}
            alt=""
            width={40}
            height={40}
            className="object-cover bg-background rounded-full"
          />
          <h1>{data.username}</h1>
              </div>
      </div>
              <Info/>
    </div>
  );
};

export default ChatHeading;
