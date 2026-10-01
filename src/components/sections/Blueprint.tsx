"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { cn } from "@/lib/utils";

const TechCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: 100 }, () => new Particle(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 71, 171, 0.5)"; // Cobalt Blue

      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(209, 255, 0, ${1 - dist / 100})`; // Lime Green
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export const Blueprint = () => {
  return (
    <SectionWrapper id="blueprint" number="02" title="The Blueprint">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="text-4xl md:text-6xl font-serif leading-tight tracking-tighter mb-6">
              I don't just learn how things work. I learn why they work, down to the very atom.
            </div>
            <div className="text-xl md:text-2xl font-sans opacity-80 leading-relaxed">
              From hardware architectures to software ecosystems, I build across the entire stack.
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-brutal flex flex-col h-full min-h-[400px] bg-brand-bg">
          {/* Marquee Header */}
          <div className="relative z-20 border-b border-brutal bg-brand-fg text-brand-bg py-4 overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1000]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex whitespace-nowrap gap-8 text-label text-lg font-bold uppercase"
            >
              <span className="flex gap-8">
                VLSI // SOFTWARE // HARDWARE // BIOTECH // BIOCHIPS // AI // STARTUPS // VIDEO EDITING //
              </span>
              <span className="flex gap-8">
                VLSI // SOFTWARE // HARDWARE // BIOTECH // BIOCHIPS // AI // STARTUPS // VIDEO EDITING //
              </span>
            </motion.div>
          </div>

          {/* Tech Visual Space */}
          <div className="flex-1 relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full bg-brand-muted/20">
              <TechCanvas />
              {/* Noise/Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* Vignette/Inner Shadow */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.1)]" />

              {/* Stylized Label */}
              <div className="absolute bottom-4 right-4 z-10">
                <span className="text-[10px] font-mono px-2 py-1 border border-brand-fg bg-brand-bg text-brand-fg uppercase tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
                  [ VISUAL_DATA // GENERATIVE_CORE ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};