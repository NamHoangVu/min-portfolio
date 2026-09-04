import Reveal from './Reveal';
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

      <Reveal direction="up" distance={20} className="text-gray-400 text-lg mb-10 max-w-2xl">
        <p>Har du et prosjekt i tankene, eller vil du bare si hei? Ta gjerne kontakt.</p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Reveal key={card.label} direction="up" distance={30}>
            <a
              href={card.href}
              download={card.download}
              target={!card.download && card.href.startsWith('http') ? '_blank' : undefined}
              rel={!card.download && card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block bg-gray-900/70 border border-gray-800/60 rounded-[2rem] p-8 shadow-2xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                {card.label}
              </span>
              <p className="mt-2 text-white font-semibold break-all group-hover:text-cyan-300 transition-colors">
                {card.value}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
