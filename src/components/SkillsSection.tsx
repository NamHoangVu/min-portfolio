'use client';

import { motion, type Variants } from 'framer-motion';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillGroups } from '@/lib/content';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function SkillsSection() {
  return (
    <section id="kompetanse" className="scroll-mt-28 mb-32">
      <SectionHeading title="Kompetanse" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <Reveal
            key={group.title}
            direction="up"
            distance={30}
            className="bg-gray-900/70 border border-gray-800/60 rounded-[2rem] p-8 shadow-2xl"
          >
            <h3 className="text-lg font-bold text-white mb-5">{group.title}</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={chip}
                  transition={{ duration: 0.35 }}
                  className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-xs font-semibold rounded-full border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
