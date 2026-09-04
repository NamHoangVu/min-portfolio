import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projects, type Project } from '@/lib/content';

export default function ProjectsSection() {
  return (
    <section id="prosjekter" className="scroll-mt-28 mb-32">
      <SectionHeading title="Utvalgte Prosjekter" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal
      direction="up"
      distance={30}
      className="group bg-gray-900/70 border border-gray-800/60 rounded-[2rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-500 flex flex-col shadow-2xl"
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
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-800/50 text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-gray-700/50"
            >
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
    </Reveal>
  );
}
