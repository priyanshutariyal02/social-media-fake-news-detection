import Image from "next/image";
import React from "react";
import { suggestedUsers } from "../constants/constant";
const Suggestion = () => {
  return (
    <div className="flex flex-col p-4 bg-neutral-800 rounded-xl border border-neutral-700 shadow-md">
      <h3 className="text-lg font-bold text-white mb-4">Suggested for you</h3>
      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={user.image}
                  alt={user.name + " image"}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200 mb-1">
                  {user.name}
                </p>
                <div className="flex items-center">
                  <p className="text-xs text-gray-400 mr-1">Followed by</p>
                  <div className="flex -space-x-2">
                    {user.followedBy.map((follower, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full overflow-hidden border border-neutral-800"
                        title={follower.name}
                      >
                        <Image
                          src={follower.image}
                          alt={follower.name}
                          width={16}
                          height={16}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  {user.followedBy.length > 0 && (
                    <span className="text-xs text-gray-400 ml-1">
                      {user.followedBy.length > 1
                        ? `+${user.followedBy.length}`
                        : ""}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button className="text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors">
              Follow
            </button>
          </div>
        ))}
        <button className="text-sm text-blue-400 hover:text-blue-300 mt-2 font-medium">
          See More
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
