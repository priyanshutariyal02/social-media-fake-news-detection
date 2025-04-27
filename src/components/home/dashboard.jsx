"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Stories from "../stories";
import PostFeed from "../post-feed";
import Suggestion from "../suggestion";
import ProfileCard from "../profile-card";
import Footer from "../footer";

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full gap-4 border border-neutral-200 bg-white md:px-6 md:pt-6 dark:border-neutral-700 dark:bg-neutral-900">
        {/* Main Content Area */}
        <div className="w-2/3 flex flex-col overflow-hidden space-y-6">
          {/* Stories Section */}
          <Stories />

          {/* Posts Feed */}
          <PostFeed />
        </div>

        {/* Right Sidebar */}
        <div className="w-1/3 flex flex-col space-y-4">
          {/* Profile Card */}
          <ProfileCard />

          {/* Suggestions */}

          <Suggestion />

          {/* Footer  */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
