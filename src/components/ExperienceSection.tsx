'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experience } from '@/lib/content';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <section id="erfaring" className="scroll-mt-28 mb-32">
      <SectionHeading title="Erfaring" />

      <div ref={containerRef} className="relative">
        {/* Bakgrunnslinje */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800/60 md:-translate-x-1/2" />
        {/* Linje som fylles etter hvor langt man har scrollet */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-cyan-600 origin-top md:-translate-x-1/2"
        />

        <div className="space-y-12">
          {experience.map((entry, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <div
                key={`${entry.role}-${entry.period}`}
                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
              >
                {/* Prikk på linjen */}
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />

                <Reveal
                  direction={fromLeft ? 'left' : 'right'}
                  distance={50}
                  className={`bg-gray-900/70 border border-gray-800/60 rounded-[2rem] p-8 shadow-2xl ${
                    fromLeft ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                >
                  <span className="inline-block mb-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    {entry.type === 'education' ? 'Utdanning' : 'Arbeidserfaring'} &bull; {entry.period}
                  </span>
                  <h3 className="text-xl font-bold text-white">{entry.role}</h3>
                  <p className="text-gray-500 text-sm mb-4">{entry.org}</p>
                  <ul className="space-y-2">
                    {entry.points.map((point) => (
                      <li key={point} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-cyan-500 mt-1">&bull;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
