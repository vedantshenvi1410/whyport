"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  specs: { label: string; value: string }[];
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "PROJECT_01 // INITIATING...",
    year: "2026",
    category: "VLSI / HARDWARE",
    specs: [{ label: "STATUS", value: "COMPILING" }, { label: "CORE", value: "TBD" }],
  },
  {
    id: "02",
    title: "PROJECT_02 // COMPILING...",
    year: "2026",
    category: "FULLSTACK / WEB",
    specs: [{ label: "STATUS", value: "SKELETON" }, { label: "CORE", value: "NEXT.JS" }],
  },
  {
    id: "03",
    title: "PROJECT_03 // RENDERING...",
    year: "2026",
    category: "INTERDISCIPLINARY",
    specs: [{ label: "STATUS", value: "DRAFT" }, { label: "CORE", value: "MIXED" }],
  },
  {
    id: "04",
    title: "PROJECT_04 // DEPLOYING...",
    year: "2026",
    category: "DESIGN / UI",
    specs: [{ label: "STATUS", value: "WIRE" }, { label: "CORE", value: "FIGMA" }],
  },
];

export const TheLab = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <SectionWrapper id="lab" number="05" title="The Lab">
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] border-brutal p-8 flex flex-col justify-between bg-brand-muted/10 relative group cursor-pointer"
                data-cursor="hover"
              >
                <div className="flex justify-between items-start">
                  <span className="text-label opacity-50">{project.id}</span>
                  <span className="text-label">{project.year}</span>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-3xl md:text-5xl font-serif uppercase text-center leading-none group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="border-t border-brutal pt-4 mt-4">
                  <div className="text-label mb-4">{project.category}</div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[8px] font-mono opacity-50 uppercase">{spec.label}</span>
                        <span className="text-xs font-mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};