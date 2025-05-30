"use client";

import Image from "next/image";
import React, { useState } from "react";
import { postsData } from "../constants/constant";
import Spinner from "./ui/spinner";
import {
  IconCancel,
  IconDeviceIpadSearch,
  IconDotsVertical,
  IconHeart,
  IconReport,
} from "@tabler/icons-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const menuData = [
  { name: "Report", icon: <IconReport />, action: "report" },
  { name: "Unfollow", icon: <IconCancel />, action: "unfollow" },
  { name: "Add to favorites", icon: <IconHeart />, action: "favorite" },
  { name: "Detect", icon: <IconDeviceIpadSearch />, action: "detect" },
];

const PostFeed = () => {
  const [menuOpenPostId, setMenuOpenPostId] = useState(null);
  const [activePostId, setActivePostId] = useState(null);
  const [prediction, setPrediction] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [postText, setPostText] = useState({});

  // Function to convert image URL to File object
  const urlToFile = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new File([blob], filename, { type: blob.type });
    } catch (error) {
      console.error("Error converting URL to File:", error);
      // Fallback for demo purposes
      return new File(
        [new Blob([""], { type: "image/jpeg" })],
        "fallback.jpg",
        { type: "image/jpeg" }
      );
    }
  };

  const detectFakeNews = async (postId, imageUrl) => {
    if (!imageUrl) return;

    setIsLoading(true);
    setActivePostId(postId);

    try {
      // Convert the image URL to a File object
      const imageFile = await urlToFile(imageUrl, `post_${postId}_image.jpg`);

      const formData = new FormData();
      formData.append("file", imageFile);

      const link = "/api/upload";

      // Real API call
      const response = await fetch(link, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          `Server responded with ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();

      // Set the prediction result and text from the API response
      setPrediction((prev) => ({
        ...prev,
        [postId]: data.result[0],
      }));
      console.log(data.result[0]);
      setPostText((prev) => ({
        ...prev,
        [postId]: data.result[1],
      }));
    } catch (error) {
      console.error("There was a problem with the detection operation:", error);

      // Set a fallback response for demo purposes
      setPrediction((prev) => ({
        ...prev,
        [postId]: "Error",
      }));

      setPostText((prev) => ({
        ...prev,
        [postId]: "Failed to analyze: " + error.message,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleMenuClick = (action, post) => {
    console.log(`Action: ${action}, Post ID: ${post.id}`);

    setMenuOpenPostId(null); // Close the menu after any action

    if (action === "detect") {
      detectFakeNews(post.id, post.image); // Automatically detect and upload the image
    } else if (action === "report") {
      // Handle report action
      console.log("Reporting post:", post.id);
    } else if (action === "unfollow") {
      // Handle unfollow action
      console.log("Unfollowing user from post:", post.id);
    } else if (action === "favorite") {
      // Handle favorite action
      console.log("Adding post to favorites:", post.id);
    }
  };

  return (
    <div className="w-full flex-1 overflow-y-auto space-y-4 pb-4 rounded-t-lg">
      {postsData.map((post) => (
        <div
          key={post.id}
          className="w-full p-4 bg-neutral-800 rounded-xl border border-neutral-700 shadow-md relative"
        >
          {/* Menu Dialog */}
          {menuOpenPostId === post.id && (
            <AlertDialog open onOpenChange={() => setMenuOpenPostId(null)}>
              <AlertDialogContent className="flex w-full items-center justify-center flex-col">
                <AlertDialogTitle />
                <AlertDialogDescription />
                {menuData.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleMenuClick(item.action, post)}
                    className="w-full flex items-center justify-center gap-3 border-b border-neutral-700 pb-3"
                    style={{
                      color:
                        item.name === "Report" || item.name === "Unfollow"
                          ? "red"
                          : "white",
                    }}
                  >
                    {item.icon} {item.name}
                  </button>
                ))}
                <AlertDialogCancel className="border-none text-base p-0">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogContent>
            </AlertDialog>
          )}

          {/* Post Header */}
          <div className="w-full flex items-center justify-between mb-3">
            <div className="w-full flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={post.avatar}
                  alt={post.user}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-200">{post.user}</p>
                <p className="text-xs text-gray-400">{post.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isLoading && activePostId === post.id ? (
                <div className="italic text-base flex items-center gap-2 px-2 py-1 rounded-md bg-amber-500/10 text-amber-500">
                  <p>Detecting</p> <Spinner />
                </div>
              ) : (
                prediction[post.id] && (
                  <p
                    className={`text-sm w-40 text-center px-2 py-1 rounded-lg italic font-medium ${
                      prediction[post.id] === "No, it is not fake"
                        ? "text-green-500 bg-green-500/10"
                        : prediction[post.id] === "Yes, this news is fake"
                        ? "text-red-500 bg-red-500/10"
                        : "text-yellow-500"
                    }`}
                  >
                    {prediction[post.id]}
                  </p>
                )
              )}
              <button
                onClick={() => setMenuOpenPostId(post.id)}
                className="text-gray-400 hover:text-gray-200"
              >
                <IconDotsVertical />
              </button>
            </div>
          </div>

          {/* Post Content */}
          {/* <p className="text-gray-200 mb-3">{post.content}</p> */}
          {/* {postText[post.id] && (
            <p className="text-gray-400 text-sm italic mb-3">
              {postText[post.id]}
            </p>
          )} */}

          {/* Post Image if available */}
          {post.image && (
            <div className="w-full rounded-lg overflow-hidden mb-3 flex justify-center items-center">
              <Image
                src={post.image}
                alt="Post image"
                width={600}
                height={400}
                className="object-contain w-full max-h-96"
                priority
              />
            </div>
          )}

          {/* Post Engagement */}
          <div className="flex items-center justify-between pt-2 border-t border-neutral-700">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1 text-gray-400 hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{post.comments}</span>
              </button>
            </div>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
