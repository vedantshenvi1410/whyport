"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  specs: { label: string; value: string }[];
  github?: string;
  demo?: string;
  description: string;
  problem: string;
  concept: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "DEJAVU // RECOVERING...",
    year: "2026",
    category: "WEB / UTILITY",
    specs: [{ label: "STATUS", value: "REDEVELOPING" }, { label: "USERS", value: "15" }],
    github: "https://github.com/vedantshenvi1410/LOSTFOUND.git",
    description: "A lost-item recovery platform built around QR codes.",
    problem: "Losing valuable items often leads to total loss because there is no easy way for a finder to notify the owner.",
    concept: "Lost item → QR scan → owner notification. Simple mechanism replacing the need for a phone to be present with the item.",
    tags: ["Product", "Software", "Utility"],
  },
  {
    id: "02",
    title: "INDIAN KNOWLEDGE MAP // MAPPING...",
    year: "2026",
    category: "REACT / CULTURAL",
    specs: [{ label: "STATUS", value: "ONLINE" }, { label: "CORE", value: "INTERACTIVE" }],
    github: "https://github.com/vedantshenvi1410/IKS.git",
    description: "An interactive map of India showing ancient Indian temples.",
    problem: "Cultural information is often trapped in physical pamphlets or scattered texts.",
    concept: "A digital, interactive atlas allowing users to explore temple heritage spatially.",
    tags: ["Software", "Research", "Cultural"],
  },
  {
    id: "03",
    title: "NASA SPACE GAME // EXPLORING...",
    year: "2026",
    category: "FLUTTER / GAME",
    specs: [{ label: "STATUS", value: "OFFLINE" }, { label: "CORE", value: "3D ASPECTS" }],
    github: "https://github.com/vedantshenvi1410/NASA_HACAKATHON.git",
    description: "An interactive space game designed for students and kids.",
    problem: "Planetary environments and the possibility of life are complex concepts that are hard to visualize.",
    concept: "Experiment with life on different planets based on solar conditions and Sun levels.",
    tags: ["Game", "Flutter", "Educational"],
  },
  {
    id: "04",
    title: "DEADLINE // TRACKING...",
    year: "2026",
    category: "WEB / STUDENT",
    specs: [{ label: "STATUS", value: "OFFLINE" }, { label: "USERS", value: "30" }],
    demo: "https://smarterweb.vercel.app/",
    description: "Student-focused tracker for academic impact of missed work.",
    problem: "Students often don't realize the cumulative damage of one missed assignment or a few missed classes on their GPA.",
    concept: "Quantify the impact of attendance and marks to provide a clear academic risk assessment.",
    tags: ["Software", "Product", "Educational"],
  },
  {
    id: "05",
    title: "CARBONWISE // CALCULATING...",
    year: "2026",
    category: "NODE.JS / CLIMATE",
    specs: [{ label: "STATUS", value: "ONLINE" }, { label: "CORE", value: "EMBODIED CARBON" }],
    github: "https://github.com/vedantshenvi1410/Carbon.git",
    demo: "https://carbon-seven-gamma.vercel.app/",
    description: "Prototype platform exploring embodied and operational carbon in buildings.",
    problem: "Carbon data in construction is often unreliable or lacking confidence markers.",
    concept: "A platform that not only calculates carbon but calculates the confidence associated with that data.",
    tags: ["Research", "Climate", "Node.js"],
  },
  {
    id: "06",
    title: "HARDWARE PROTOTYPE // BUILDING...",
    year: "2026",
    category: "ELECTRONICS / HW",
    specs: [{ label: "STATUS", value: "EXPERIMENTAL" }, { label: "CORE", value: "NFC / MAGNETIC" }],
    description: "Experimental phone-case accessory for enhancing native phone capabilities.",
    problem: "Phones lack certain hardware capabilities (NFC/Magnetic charging) that could be added without bulky external gear.",
    concept: "PHONE → CASE → ELECTRONICS → MAGNETIC COIL → PORT / NFC. Integrating a retractable USB-C connector into a case.",
    tags: ["Hardware", "Product", "Electronics"],
  },
];

export const TheLab = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <SectionWrapper id="lab" number="06" title="The Lab">
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] border-brutal p-8 flex flex-col justify-between bg-brand-muted/10 relative group cursor-pointer hover:bg-brand-fg/5 transition-colors"
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
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-label">{project.category}</div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[10px] font-mono px-2 py-1 border border-brutal hover:bg-brand-fg hover:text-brand-bg transition-colors"
                        >
                          GH
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[10px] font-mono px-2 py-1 border border-brutal hover:bg-brand-fg hover:text-brand-bg transition-colors"
                        >
                          LIVE
                        </a>
                      )}
                    </div>
                  </div>
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

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-bg/60 backdrop-blur-sm pointer-events-auto"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-bg border-brutal p-8 md:p-12 shadow-[20px_20px_0px_0px_var(--color-fg)] pointer-events-auto z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-label hover:opacity-50"
              >
                [ CLOSE ]
              </button>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-brutal uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-4xl md:text-6xl font-serif uppercase leading-none mb-8">
                {selectedProject.title.split(" //")[0]}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="text-label opacity-50 mb-2 uppercase">The Idea</div>
                  <p className="text-lg font-sans leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="text-label opacity-50 mb-2 uppercase">The Problem</div>
                  <p className="text-lg font-sans leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="bg-brand-muted/20 p-6 border-brutal">
                  <div className="text-label opacity-50 mb-4 uppercase">Core Concept</div>
                  <p className="font-mono text-sm leading-loose">
                    {selectedProject.concept}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-brutal flex gap-4">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-label border border-brutal px-4 py-2 hover:bg-brand-fg hover:text-brand-bg transition-colors">
                    VIEW GITHUB
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="text-label border border-brutal px-4 py-2 hover:bg-brand-fg hover:text-brand-bg transition-colors">
                    VIEW LIVE DEMO
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};