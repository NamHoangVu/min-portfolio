'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. TYPESCRIPT-DEFINISJON
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
};

// 2. PROSJEKTDATA
const myProjects: Project[] = [
  {
    id: 1,
    title: "Classic Snake Game",
    description: "Et interaktivt arkadespill bygget med JavaScript. Inkluderer kollisjonsdeteksjon, poengtelling og økende vanskelighetsgrad.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Logic"],
    imageUrl: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/NamHoangVu/Snake-Game",
    liveUrl: "https://namhoangvu.github.io/Snake-Game/",
  },
];

// 3. HOVEDSIDEN
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-12 lg:p-24 selection:bg-cyan-500/30">
      
      {/* Header med Profilbilde og Navn */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 border-b border-gray-800/50 pb-12 text-center"
      >
        {/* Profilbilde-seksjon */}
        <div className="relative mb-10 mx-auto w-40 h-40 group">
          {/* Glød bak bildet */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-gray-900 to-cyan-800 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
          
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
          Nam Hoang Vu
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Frontend-utvikler som bygger sømløse digitale opplevelser med moderne verktøy.
        </p>
      </motion.header>

      {/* Prosjekt-seksjon */}
      <section>
        <div className="flex items-center gap-4 mb-12">
           <h2 className="text-3xl font-bold tracking-tight text-white">Utvalgte Prosjekter</h2>
           <div className="h-[1px] flex-grow bg-gray-800"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-gray-900 text-center">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          &copy; 2026 Nam Hoang Vu &bull;
        </p>
      </footer>
    </main>
  );
}

// 4. INTERAKTIV PROSJEKTKORT-KOMPONENT
function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gray-900/40 border border-gray-800/60 rounded-[2rem] overflow-hidden backdrop-blur-md hover:border-cyan-500/40 transition-all duration-500 flex flex-col shadow-2xl"
    >
      
      {/* Bilde-beholder med zoom-effekt */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />
      </div>

      {/* Innhold */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="mt-4 text-gray-400 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* Tags med moderne glass-stil */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-gray-700/50">
              {tag}
            </span>
          ))}
        </div>

        {/* Lenker */}
        <div className="mt-8 pt-6 border-t border-gray-800/50 flex items-center justify-between">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
          >
            Kildekode
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all transform active:scale-95 shadow-lg"
            >
              Se Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}