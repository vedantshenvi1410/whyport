"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";

export const Education = () => {
  const data = [
    { label: "Institution", value: "Goa College of Engineering (GCE)" },
    { label: "Program", value: "B.Tech in VLSI Design and Technology" },
    { label: "Timeline", value: "3rd Semester (Expected 2029)" },
    { label: "Core Focus", value: "Creative Thinking, Innovation, Communication, Public Speaking" },
  ];

  return (
    <SectionWrapper id="education" number="03" title="Foundation" className="bg-brand-highlight text-brand-fg">
      <div className="grid grid-cols-1 gap-0 border-brutal overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 border-b border-brutal group transition-colors",
              index % 2 === 0 ? "bg-brand-bg" : "bg-brand-muted/20"
            )}
          >
            <div className="p-6 border-b md:border-b-0 md:border-r border-brutal bg-brand-muted/10">
              <span className="text-label opacity-60">{item.label}</span>
            </div>
            <div className="p-6 md:col-span-2">
              <AnimatedText
                text={item.value}
                className="text-xl md:text-2xl font-sans"
                delay={index * 0.1}
              />
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-3 border-t-4 border-brand-highlight relative">
          <div className="p-6 border-b md:border-b-0 md:border-r border-brutal bg-brand-highlight/20">
            <span className="text-label font-bold text-brand-highlight">Current CGPA</span>
          </div>
          <div className="p-6 md:col-span-2 flex items-center relative overflow-hidden">
            <span className="text-6xl md:text-8xl font-serif leading-none relative z-10">9.85</span>
            <span className="ml-4 text-label opacity-50 relative z-10">Current</span>
            {/* Brutalist highlight block */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-highlight -z-0 opacity-30" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-brutal">
          <div className="p-6 border-b md:border-b-0 md:border-r border-brutal bg-brand-muted/10">
            <span className="text-label opacity-60">Previous CGPA</span>
          </div>
          <div className="p-6 md:col-span-2 flex items-center">
            <span className="text-3xl md:text-4xl font-serif leading-none opacity-70">9.35</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
