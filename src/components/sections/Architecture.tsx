"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { cn } from "@/lib/utils";

type Category = "software" | "hardware" | "supporting";

interface Skill {
  name: string;
  category: Category;
  tier: 1 | 2 | 3;
}

const SKILLS: Skill[] = [
  { name: "Flutter & Dart", category: "software", tier: 1 },
  { name: "Next.js / React / TS", category: "software", tier: 1 },
  { name: "VLSI Design", category: "hardware", tier: 1 },
  { name: "Figma & Framer", category: "software", tier: 1 },
  { name: "C++", category: "software", tier: 2 },
  { name: "Linux", category: "software", tier: 2 },
  { name: "Digital Electronics", category: "hardware", tier: 2 },
  { name: "Python", category: "software", tier: 3 },
  { name: "Node.js", category: "software", tier: 3 },
  { name: "AI/ML", category: "software", tier: 3 },
];

export const Architecture = () => {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  return (
    <SectionWrapper id="architecture" number="04" title="Technical Architecture">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[150px]">
        {SKILLS.map((skill) => {
          const isDimmed = hoveredCategory && skill.category !== hoveredCategory;
          const sizeClass = {
            1: "col-span-2 row-span-2 text-4xl md:text-6xl",
            2: "col-span-1 row-span-1 text-xl md:text-2xl",
            3: "col-span-1 row-span-1 text-sm md:text-base",
          }[skill.tier];

          const categoryColor = {
            software: "bg-brand-accent/10 hover:bg-brand-accent",
            hardware: "bg-brand-tech/10 hover:bg-brand-tech",
            supporting: "bg-brand-muted/10 hover:bg-brand-muted",
          }[skill.category];

          return (
            <motion.div
              key={skill.name}
              onMouseEnter={() => setHoveredCategory(skill.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ 
                scale: 0.98, 
                y: -4,
                boxShadow: "8px 8px 0px 0px var(--color-fg)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "border-brutal p-6 flex items-center justify-center text-center cursor-default transition-all duration-300 relative overflow-hidden group shadow-[4px_4px_0px_0px_var(--color-fg)]",
                sizeClass,
                isDimmed ? "opacity-30 grayscale" : "opacity-100",
                categoryColor
              )}
              data-cursor="hover"
            >
              <span className={cn(
                "font-serif uppercase leading-none transition-colors duration-300",
                skill.tier === 1 ? "font-black" : "font-medium",
                hoveredCategory === skill.category ? "text-brand-bg" : "text-brand-fg"
              )}>
                {skill.name}
              </span>

              {/* Technical Label */}
              <span className="absolute bottom-2 right-2 text-[8px] font-mono uppercase opacity-0 group-hover:opacity-50 transition-opacity">
                {skill.category}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-brand-tech" />
          <span className="text-label">Hardware</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-brand-accent" />
          <span className="text-label">Software</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
