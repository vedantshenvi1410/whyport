"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";

export const Builder = () => {
  return (
    <SectionWrapper id="builder" number="05" title="Builder / Startup">
      <div className="flex flex-col gap-12">

        {/* Zone A: Current Focus */}
        <div className="border-brutal p-6 md:p-10 bg-brand-bg relative overflow-hidden group">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <div className="inline-block bg-brand-fg text-brand-bg text-label px-2 py-1 mb-6">
                STATUS: ACTIVE_PROTOTYPE
              </div>
              <h3 className="text-4xl md:text-6xl font-serif uppercase leading-none mb-6 tracking-tighter">
                Magnetic Charging + Port Extension + NFC
              </h3>
              <p className="text-lg md:text-xl font-sans leading-relaxed opacity-80 max-w-2xl">
                I am currently exploring and building a compact hardware concept for phones that do not natively support certain features.
                The idea is to add magnetic charging and NFC through a carefully designed physical accessory rather than requiring
                the phone itself to have those capabilities built in.
              </p>
            </div>

            <div className="w-full md:w-72 border-brutal p-6 bg-brand-muted/20">
              <div className="text-label opacity-50 mb-4">Technical_Specs</div>
              <ul className="font-mono text-sm space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-fg"></span>
                  Magnetic Charging Coil
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-fg"></span>
                  NFC Extension
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-fg"></span>
                  Retractable Connector
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-brutal text-[10px] font-mono opacity-50 uppercase">
                Experimental Prototype
              </div>
            </div>
          </div>
        </div>

        {/* Zone B: Trajectory */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border-brutal p-8 flex flex-col justify-between h-full bg-brand-bg">
            <div>
              <div className="text-label opacity-50 mb-4 uppercase">Startup_Direction</div>
              <p className="text-2xl font-serif leading-tight mb-6">
                Exploring the same hardware-product direction as a potential startup/business idea.
              </p>
              <p className="font-sans opacity-70 leading-relaxed">
                Focused on the intersection of hardware, electronics, software, and physical product design.
                Currently in the exploration and prototyping phase.
              </p>
            </div>
            <div className="mt-8 text-label text-right opacity-30">
              [ RESEARCH_PHASE ]
            </div>
          </div>

          <div className="border-brutal p-8 flex flex-col justify-between h-full bg-brand-bg relative">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="text-label opacity-50 uppercase">Launched_History</div>
                <div className="text-[10px] font-mono px-2 py-0.5 border border-brutal opacity-40 line-through">
                  OFFLINE
                </div>
              </div>
              <h4 className="text-3xl font-serif uppercase mb-4">Deadline</h4>
              <p className="font-sans opacity-80 mb-6">
                A student product designed to help students understand how missed assignments and attendance affect their marks/GPA.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-label font-bold border-brutal px-3 py-1 bg-brand-muted/20">
                30 ACTIVE USERS
              </div>
              <div className="text-[10px] font-mono opacity-50 uppercase">
                Student Project
              </div>
            </div>
          </div>
        </div>

        {/* Zone C: Philosophy */}
        <div className="border-brutal overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brutal">
            <div className="p-8 md:p-12 flex flex-col items-center text-center group hover:bg-brand-muted/10 transition-colors">
              <div className="text-label opacity-50 mb-6">The Complex</div>
              <h5 className="text-3xl md:text-4xl font-serif uppercase mb-4">Technically Difficult</h5>
              <p className="font-sans opacity-70 max-w-md">
                Problems where the challenge comes from understanding and building a technically complex solution.
              </p>
            </div>
            <div className="p-8 md:p-12 flex flex-col items-center text-center group hover:bg-brand-muted/10 transition-colors">
              <div className="text-label opacity-50 mb-6">The Overlooked</div>
              <h5 className="text-3xl md:text-4xl font-serif uppercase mb-4">Easy-to-Overlook</h5>
              <p className="font-sans opacity-70 max-w-md">
                Problems that may appear simple once identified, but are difficult because people rarely notice them.
              </p>
            </div>
          </div>
          <div className="bg-brand-fg text-brand-bg py-4 text-center">
            <p className="text-label text-[10px] md:text-xs tracking-widest px-4 leading-relaxed">
              SOMETIMES THE HARD PART IS SOLVING THE PROBLEM; SOMETIMES IT IS FINDING THE PROBLEM WORTH SOLVING.
            </p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
