"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { links } from "../constants/navTabs";
import { cn } from "../lib/utils";

import Dashboard from "../components/home/dashboard";
import Logo from "../components/logo";
const Home = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-dark">
      {session ? (
        <div>
          <div
            className={cn(
              "w-full mx-auto flex min-h-screen flex-1 flex-col overflow-hidden border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
              "h-[60vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
          >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
              <SidebarBody className="justify-between gap-10">
                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                  {/* {open ? <Logo /> : <LogoIcon />} */}
                  <Logo />
                  <div className="mt-8 flex flex-col gap-2">
                    {/* <div>
                      <div className="w-full flex flex-col items-center justify-center gap-5 mb-5">
                        <div className="relative">
                          <img
                            src={session.user.image}
                            alt={session.user.name + "image"}
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                          <IconRosetteDiscountCheckFilled className="text-blue-500 absolute right-0 bottom-1 bg-neutral-800 rounded-full" />
                        </div>
                        <p>{session.user.name}</p>
                      </div>
                    </div> */}
                    {links.map((link, idx) => (
                      <SidebarLink key={idx} link={link} />
                    ))}
                  </div>
                </div>
              </SidebarBody>
            </Sidebar>
            <Dashboard />
          </div>
        </div>
      ) : (
        <div>
          <Link href="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
