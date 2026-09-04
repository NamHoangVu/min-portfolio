import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { profile } from '@/lib/content';

export default function AboutSection() {
  return (
    <section id="om-meg" className="scroll-mt-28 mb-32">
      <SectionHeading title="Om meg" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <Reveal direction="left" distance={40} className="lg:col-span-3 space-y-5">
          {profile.aboutText.map((paragraph, i) => (
            <p key={i} className="text-gray-400 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal
          direction="right"
          distance={40}
          className="lg:col-span-2 bg-gray-900/70 border border-gray-800/60 rounded-[2rem] p-8 shadow-2xl"
        >
          <dl className="space-y-5">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-gray-200">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
