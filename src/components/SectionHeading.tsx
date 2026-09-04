import Reveal from './Reveal';

export default function SectionHeading({ title }: { title: string }) {
  return (
    <Reveal direction="up" distance={20} className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-white whitespace-nowrap">{title}</h2>
      <div className="h-[1px] flex-grow bg-gray-800" />
    </Reveal>
  );
}
