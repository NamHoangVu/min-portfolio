'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile, contact } from '@/lib/content';

export default function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mb-24 border-b border-gray-800/50 pb-12 text-center"
    >
      {/* Profilbilde-seksjon */}
      <div className="relative mb-10 mx-auto w-40 h-40 group">
        {/* Glød bak bildet */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-gray-900 to-cyan-800 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

        {/* Selve bildet */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 p-1 bg-gray-900 transition-transform duration-500 group-hover:scale-105 shadow-xl">
          <Image
            src="/profilbilde.jpg"
            alt="Profilbilde av Nam Hoang Vu"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
        {profile.name}
      </h1>
      <p className="mt-3 text-cyan-400 font-bold uppercase tracking-widest text-sm">
        {profile.title}
      </p>
      <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-col items-center gap-10">
        <a
          href={contact.cvUrl}
          download
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-cyan-400 transition-all transform active:scale-95 shadow-lg uppercase tracking-widest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>
          Last ned CV
        </a>

        <motion.a
          href="#om-meg"
          aria-label="Scroll ned"
          className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll ned</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </div>
    </motion.header>
  );
}
