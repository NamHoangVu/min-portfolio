import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SiteNav from '@/components/SiteNav';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-gray-100 p-6 md:p-12 lg:p-24 selection:bg-cyan-500/30">
      <AnimatedBackground />
      <ScrollProgressBar />
      <SiteNav />

      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
