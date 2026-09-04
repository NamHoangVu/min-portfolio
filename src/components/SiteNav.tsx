'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sections } from '@/lib/content';

export default function SiteNav() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <ul className="flex items-center gap-1 rounded-full border border-gray-800/60 bg-gray-950/70 backdrop-blur-md px-2 py-2 shadow-xl">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full transition-colors duration-300 ${
                activeId === id ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeId === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-cyan-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
