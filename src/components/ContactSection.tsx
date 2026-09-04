'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { contact } from '@/lib/content';

const cards = [
  {
    label: 'E-post',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: 'GitHub',
    value: '@NamHoangVu',
    href: contact.github,
  },
  {
    label: 'LinkedIn',
    value: 'namhoangvu',
    href: contact.linkedin,
  },
  {
    label: 'CV',
    value: 'Last ned PDF',
    href: contact.cvUrl,
    download: true,
  },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-28">
      <SectionHeading title="Kontakt" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 text-lg mb-10 max-w-2xl"
      >
        Har du et prosjekt i tankene, eller vil du bare si hei? Ta gjerne kontakt.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.a
            key={card.label}
            href={card.href}
            download={card.download}
            target={!card.download && card.href.startsWith('http') ? '_blank' : undefined}
            rel={!card.download && card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-gray-900/40 border border-gray-800/60 rounded-[2rem] backdrop-blur-md p-8 shadow-2xl hover:border-cyan-500/40 transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
              {card.label}
            </span>
            <p className="mt-2 text-white font-semibold break-all group-hover:text-cyan-300 transition-colors">
              {card.value}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
