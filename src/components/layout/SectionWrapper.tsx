"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, number, title, children, className }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full border-b border-brutal py-20 px-6 md:px-12 lg:px-24",
        className
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
        <div className="flex items-baseline gap-4">
          <span className="text-label opacity-50">{number}</span>
          <h2 className="text-4xl md:text-6xl font-serif uppercase">{title}</h2>
        </div>
      </div>
      <div className="relative">
        {children}
      </div>
    </section>
  );
};
