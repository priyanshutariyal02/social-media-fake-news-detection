import Image from "next/image";
import React from "react";
import { storiesData } from "../constants/constant";
const Stories = () => {
  return (
    <div className="w-full flex gap-5 overflow-x-auto py-4 px-5 bg-neutral-800 rounded-xl border border-neutral-700 shadow-md stories-container">
      {storiesData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center space-y-2 flex-shrink-0 transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden p-1 bg-gradient-to-br from-blue-500 to-purple-600 hover:bg-gradient-to-tl duration-300 transition-all ease-linear">
            <div className="rounded-full overflow-hidden w-full h-full">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-xs font-medium text-center text-gray-200 truncate w-16">
            {item.name.split(" ")[0]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
