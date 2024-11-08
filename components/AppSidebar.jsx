import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "./ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

const AppSidebar = async () => {
  const url = process.env.URL;
  const req = await fetch(`${url}/api/user`);
  const data = await req.json();

  return (
    <Sidebar className="bg-background border-r border-secondary ">
      <SidebarContent className="py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <h1 className="text-base">Active contacts</h1>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.map((item) => (
                <div
                  key={item._id}
                  className="rounded-lg  px-3 py-3 hover:bg-accent"
                >
                  <Link href={`/${item._id}`} className="flex gap-3">
                      <Image
                        src={item.profilePicture}
                        alt=""
                        width={40}
                        height={25}
                        className="bg-muted-foreground aspect-square rounded"
                      />

                    <div>
                      <h1 className="text-base capitalize">{item.username}</h1>
                      <p className="w-32 truncate text-xs opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates non ducimus soluta temporibus, atque cumque
                        aperiam placeat adipisci quod libero perferendis odit
                        tenetur nulla animi fuga vel error ea quae?
                      </p>
                          </div>
                          <div>
                              
                          </div>
                  </Link>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
