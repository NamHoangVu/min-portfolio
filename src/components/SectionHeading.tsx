'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12"
    >
      <h2 className="text-3xl font-bold tracking-tight text-white whitespace-nowrap">{title}</h2>
      <div className="h-[1px] flex-grow bg-gray-800" />
    </motion.div>
  );
}
