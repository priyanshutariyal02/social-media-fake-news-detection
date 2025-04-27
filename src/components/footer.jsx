import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center">
      <div className="flex items-center justify-evenly mb-4 gap-8">
        {["About", "Help", "Privacy", "Terms & Conditions"].map(
          (item, index) => (
            <Link
              href={`/${item.split(" ")[0].toLowerCase()}`}
              key={index}
              className="flex items-center text-neutral-400 hover:text-neutral-500 text-sm"
            >
              {item}
            </Link>
          )
        )}
      </div>

      <small className="text-center text-neutral-400">
        © {new Date().getFullYear()} Chimsta. All Rights Reserved
      </small>
    </div>
  );
};

export default Footer;
