"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StickerProps {
  src: string;
  className?: string;
  rotation?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

export const Sticker = ({ src, className, rotation = 0, position = "top-left" }: StickerProps) => {
  const positionClasses = {
    "top-left": "top-[-20px] left-[-20px]",
    "top-right": "top-[-20px] right-[-20px]",
    "bottom-left": "bottom-[-20px] left-[-20px]",
    "bottom-right": "bottom-[-20px] right-[-20px]",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: rotation }}
      animate={{ scale: 1, rotate: rotation }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "absolute z-50 w-24 h-24 md:w-32 md:h-32 pointer-events-none",
        positionClasses[position],
        className
      )}
    >
      <Image
        src={src}
        alt="Decorative Sticker"
        fill
        className="object-contain drop-shadow-xl"
      />
    </motion.div>
  );
};
