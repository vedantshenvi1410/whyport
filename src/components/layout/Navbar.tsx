"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-brand-bg border-b border-brutal py-4 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-center">

        {/* Left Column: Brand */}
        <div className="flex items-center">
          <span className="text-label font-bold tracking-tighter uppercase">
            V.SHENVI // PORTFOLIO_OS
          </span>
        </div>

        {/* Center Column: Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          {[
            { name: "ABOUT", href: "#hero" },
            { name: "THE LAB", href: "#lab" },
            { name: "CONTACT", href: "#contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-label hover:text-brand-accent transition-colors cursor-pointer decoration-brand-accent hover:underline underline-offset-4"
            >
              [ {link.name} ]
            </a>
          ))}
        </nav>

        {/* Right Column: Controls & Data */}
        <div className="flex justify-end items-center gap-6">
          <div className="hidden sm:block text-right">
            <span className="text-[10px] font-mono opacity-60 uppercase tracking-widest">
              LOC: GOA, IN // STATUS: ONLINE
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 border-brutal bg-brand-bg text-brand-fg hover:bg-brand-accent hover:text-brand-bg transition-colors duration-300"
            data-cursor="hover"
          >
            <span className="text-[10px] font-mono font-bold uppercase">
              {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
