import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

const ProfileCard = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center p-6 bg-neutral-800 rounded-xl border border-neutral-700 shadow-md">
      <div className="w-24 h-24 relative rounded-full mb-4">
        <Image
          src={session.user.image || "/user.png"}
          alt="Your Profile"
          width={100}
          height={100}
          className="object-cover w-full h-full rounded-full"
        />
        <IconRosetteDiscountCheckFilled className="text-blue-500 absolute right-0 bottom-1 bg-neutral-800 rounded-full" />
      </div>
      <h2 className="text-xl font-bold text-white mb-1">{session.user.name}</h2>
      <p className="text-gray-400 text-sm mb-4">
        @
        {session.user.name.split(" ")[0].toLocaleLowerCase() +
          session.user.name.split(" ")[1].toLocaleLowerCase()}
      </p>
      <div className="flex justify-around w-full mb-4">
        <div className="text-center">
          <p className="font-bold text-white">543</p>
          <p className="text-xs text-gray-400">Posts</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-white">23.5K</p>
          <p className="text-xs text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-white">128</p>
          <p className="text-xs text-gray-400">Following</p>
        </div>
      </div>
      <Link
        href={"/profile"}
        className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
      >
        Edit Profile
      </Link>
    </div>
  );
};

export default ProfileCard;
