"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <SectionWrapper
      id="hero"
      number="01"
      title="Introduction"
      className="pt-20 md:pt-32 bg-brand-bg text-brand-fg"
      showHeader={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 order-2">
          <div className="relative">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-label opacity-50">01</span>
              <h2 className="text-2xl md:text-4xl font-serif uppercase tracking-tighter opacity-70">Introduction</h2>
            </div>
            <AnimatedText
              text="VEDANT SHENVI"
              className="text-5xl md:text-7xl lg:text-massive uppercase leading-none tracking-tighter mix-blend-difference text-brand-bg"
            />
          </div>

          <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
            <AnimatedText
              text="VLSI Student · Developer · Builder · Designer"
              className="text-label opacity-70"
              delay={0.2}
            />
            <div className="h-px w-12 bg-brand-fg hidden md:block" />
            <AnimatedText
              text="Based in Goa"
              className="text-label opacity-70"
              delay={0.4}
            />
          </div>

          <div className="mt-12 md:mt-16">
            <div className="relative inline-block">
              <AnimatedText
                text="I don’t know enough,YET."
                className="text-3xl md:text-6xl font-serif italic text-brand-accent leading-tight"
                delay={0.6}
              />
            </div>
          </div>
        </div>

        {/* Visual Content Column */}
        <div className="lg:col-span-5 relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full order-2 lg:order-1 -z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-md aspect-[3/4] overflow-hidden border-4 border-brand-fg shadow-[12px_12px_0px_0px_var(--color-accent)] transition-transform duration-500 hover:translate-x-1 hover:translate-y-1 max-h-[80vh]">
              <Image
                src="/images/vedant-portrait.png"
                alt="Vedant Shenvi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-[center_top] contrast-125"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
