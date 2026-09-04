export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 3,
    title: "FPL Draft Helper",
    description:
      "Et verktøy for Fantasy Premier League Draft-ligaer. Henter data direkte fra draft.premierleague.com og gir anbefalinger for startoppstilling, waiver/free agent-valg og bytter mellom lag i ligaen. Tilgjengelig som CLI eller nettside.",
    tags: ["Python", "Flask", "REST API", "Vercel", "CLI"],
    imageUrl: "/fpl-draft-helper.png",
    githubUrl: "https://github.com/NamHoangVu/FPL-Draft-Helper",
  },
  {
    id: 1,
    title: "Classic Snake Game",
    description:
      "Et interaktivt arkadespill bygget med JavaScript. Inkluderer kollisjonsdeteksjon, poengtelling og økende vanskelighetsgrad.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Logic"],
    imageUrl:
      "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/NamHoangVu/Snake-Game",
  },
  {
    id: 2,
    title: "StockSim",
    description:
      "En full-stack aksjehandelssimulator hvor du kan kjøpe og selge reelle aksjer med live-priser ved hjelp av virtuell kapital. Bygget med Flask, React og Alpha Vantage.",
    tags: ["Flask", "React", "Python", "SQLite", "Alpha Vantage API", "REST API"],
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/NamHoangVu/StockSim",
  },
];

export const profile = {
  name: "Nam Hoang Vu",
  title: "IT-konsulent | Utvikler",
  tagline:
    "Utvikler med bachelor i Anvendt Datateknologi fra OsloMet – bygger sømløse digitale opplevelser med moderne verktøy.",
  aboutText: [
    "Jeg er en resultatorientert utvikler med en bachelorgrad i Anvendt Datateknologi fra OsloMet (2025). Jeg har et solid fundament innen programvareutvikling, algoritmer og databaser, bygget gjennom komplekse teamprosjekter og smidige metoder.",
    "Jeg har erfaring med å bruke AI-modeller (YOLOv11) til bildegjenkjenning, og liker å automatisere manuelle prosesser. Jeg kombinerer teknisk kompetanse med sterk problemløsning og samarbeidsevne, bygget opp gjennom support- og lederroller.",
  ],
  quickFacts: [
    { label: "Utdanning", value: "Bachelor i Anvendt Datateknologi, OsloMet" },
    { label: "Periode", value: "2022 – 2025" },
    { label: "Bosted", value: "Oslo, Norge" },
    { label: "Språk", value: "Norsk, Engelsk, Vietnamesisk" },
    { label: "Interesser", value: "Sport, Fjellturer, Helse, Økonomi" },
  ],
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programmeringsspråk",
    skills: ["Java", "JavaScript", "Python", "SQL", "C", "C++"],
  },
  {
    title: "AI & Teknologi",
    skills: ["Maskinlæring (YOLOv11)", "Objektgjenkjenning", "Datavisualisering"],
  },
  {
    title: "Rammeverk & verktøy",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "Smidig metodikk (Scrum)",
      "Teknisk feilsøking",
      "Scripting/automatisering",
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  points: string[];
  type: "job" | "education";
};

export const experience: ExperienceEntry[] = [
  {
    role: "Account Associate",
    org: "Wolt, Oslo",
    period: "Jan 2026 – nå",
    points: [
      "Ansvarlig for teknisk onboarding og systemoppsett for nye partnere.",
      "Automatiserte manuelle arbeidsoppgaver ved å utvikle egne script, som effektiviserte interne prosesser betydelig.",
      "Utfører avansert feilsøking i komplekse systemer og bruker AI-verktøy for å optimalisere arbeidsflyten.",
    ],
    type: "job",
  },
  {
    role: "Support Associate",
    org: "Wolt, Oslo",
    period: "2024 – 2026",
    points: [
      "Brukte daglig interne systemer og verktøy for å løse tekniske problemer og sikre god brukeropplevelse.",
      "Erfaring med å analysere utfordringer under press og forklare komplekse løsninger på en enkel måte.",
    ],
    type: "job",
  },
  {
    role: "Head Runner / Teamleder",
    org: "Tatakii Asian, Oslo",
    period: "2023 – 2024",
    points: [
      "Ansvar for opplæring av nyansatte, koordinering av arbeidsflyt og kvalitetssikring.",
      "Utviklet sterke ferdigheter innen teamledelse og logistikk i et miljø med svært høyt tempo.",
    ],
    type: "job",
  },
  {
    role: "Runner",
    org: "Tatakii Asian, Oslo",
    period: "2022 – 2023",
    points: [
      "Sørget for effektiv logistikk og flyt i serveringen gjennom tett samarbeid med kjøkken og servitører.",
    ],
    type: "job",
  },
  {
    role: "Bachelor i Anvendt Datateknologi",
    org: "OsloMet – storbyuniversitetet",
    period: "2022 – 2025",
    points: [
      "Utviklet et AI-drevet system (YOLOv11) for å automatisere analyse av sponsoreksponering i fotballvideoer.",
      "Bygget et eget brukergrensesnitt med interaktiv datavisualisering, og styrket kompetansen innen Java, JavaScript, SQL og smidig teamarbeid.",
    ],
    type: "education",
  },
];

export const contact = {
  email: "nam.hoang.vu03@gmail.com",
  github: "https://github.com/NamHoangVu",
  linkedin: "https://www.linkedin.com/in/namhoangvu/",
  cvUrl: "/Nam-Hoang-Vu-CV.pdf",
};

export const sections = [
  { id: "om-meg", label: "Om meg" },
  { id: "kompetanse", label: "Kompetanse" },
  { id: "prosjekter", label: "Prosjekter" },
  { id: "erfaring", label: "Erfaring" },
  { id: "kontakt", label: "Kontakt" },
];
