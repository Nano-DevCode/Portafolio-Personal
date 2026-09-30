import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { projects } from './data/projects';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300 transition-colors duration-200">
        {/* Sticky Navigation Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Sobre Mí — Perfil, Formación TecNM & Trayectoria */}
          <AboutSection />

          {/* Ecosistema Técnico, Cloudflare, Cloud, Redes & Habilidades */}
          <SkillsSection />

          {/* Projects Showcase & Deep-Dive Section */}
          <ProjectsSection projects={projects} />

          {/* Certificaciones Oficiales & Credenciales */}
          <CertificationsSection />

          {/* Contact & Collaboration Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Scroll to Top button */}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
