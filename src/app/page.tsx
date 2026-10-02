"use client";

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Blueprint } from "@/components/sections/Blueprint";
import { Education } from "@/components/sections/Education";
import { Architecture } from "@/components/sections/Architecture";
import { Builder } from "@/components/sections/Builder";
import { TheLab } from "@/components/sections/TheLab";
import { Contact } from "@/components/sections/Contact";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="relative w-full pt-16">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Sections */}
      <Hero />
      <Blueprint />
      <Education />
      <Architecture />
      <Builder />
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
