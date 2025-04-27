import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-white text-lg"
      >
        Chimsta
      </motion.span>
    </a>
  );
};
export default Logo;
