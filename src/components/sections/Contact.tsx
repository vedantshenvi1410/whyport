"use client";

import React from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

export const Contact = () => {
  const links = [
    { label: "Email", value: "shenvivedant@gmail.com", href: "mailto:shenvivedant@gmail.com" },
    { label: "GitHub", value: "github.com/vedantshenvi1410", href: "https://github.com/vedantshenvi1410" },
    { label: "Instagram", value: "@vedant_shenvi", href: "https://instagram.com/vedant_shenvi" },
  ];

  return (
    <SectionWrapper id="contact" number="06" title="Initialization">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-serif uppercase leading-none mb-16">
          Have something <br />
          <span className="text-brand-accent italic">worth building?</span> <br />
          Let's talk.
        </h2>

        <div className="w-full grid grid-cols-1 gap-0 border-brutal">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className={cn(
                "group p-8 flex flex-col md:flex-row justify-between items-center gap-4 border-b last:border-b-0 border-brutal hover:bg-brand-fg/5 transition-colors"
              )}
            >
              <span className="text-label opacity-50">{link.label}</span>
              <span className="text-2xl md:text-4xl font-serif uppercase group-hover:translate-x-2 transition-transform duration-300">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Helper to keep the component clean
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
