"use client";

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Blueprint } from "@/components/sections/Blueprint";
import { Education } from "@/components/sections/Education";
import { Architecture } from "@/components/sections/Architecture";
import { TheLab } from "@/components/sections/TheLab";
import { Contact } from "@/components/sections/Contact";
import { useTheme } from "@/components/layout/ThemeProvider";

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="relative w-full">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 z-[100] p-3 border-brutal bg-brand-bg text-brand-fg hover:bg-brand-accent hover:text-brand-bg transition-colors duration-300"
        data-cursor="hover"
      >
        <span className="text-label font-bold uppercase">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>

      {/* Sections */}
      <Hero />
      <Blueprint />
      <Education />
      <Architecture />
      <TheLab />
      <Contact />

      {/* Footer Branding */}
      <footer className="py-12 px-6 border-t border-brutal flex justify-between items-center text-label opacity-50">
        <span>© 2026 VEDANT SHENVI</span>
        <span>BUILD_01.0</span>
      </footer>
    </main>
  );
}
