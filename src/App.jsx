import React, { useState } from 'react';
import { portfolioData, uiStrings } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FocusAreas from './components/FocusAreas';
import ProjectsPipeline from './components/ProjectsPipeline';
import TechStack from './components/TechStack';
import AcademicJourney from './components/AcademicJourney';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'pt';
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const currentData = portfolioData[lang] || portfolioData.pt;
  const t = uiStrings[lang] || uiStrings.pt;

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = currentData.personal.cvPdfPath;
    link.download = lang === 'pt' ? 'Curriculo_Telmo_Botelho.pdf' : 'CV_Telmo_Botelho.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Feedback visual
    setToastMessage(t.toast.downloadingCv);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  return (
    <div className="portfolio-app">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'rgba(14, 20, 36, 0.95)',
            border: '1px solid var(--accent-cyan)',
            color: '#fff',
            padding: '14px 20px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.7), 0 0 15px rgba(0,242,254,0.3)',
            zIndex: 1000,
            fontSize: '0.88rem',
            maxWidth: '380px',
            lineHeight: '1.4',
          }}
        >
          {toastMessage}
        </div>
      )}

      {/* Barra de Navegação */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onDownloadCv={handleDownloadCv}
        t={t}
      />

      <main>
        {/* Página Principal / Hero & Hub de Navegação */}
        <Hero
          data={currentData}
          lang={lang}
          onDownloadCv={handleDownloadCv}
          t={t}
        />

        {/* Áreas de Especialização & Domínio Técnico */}
        <FocusAreas
          areas={currentData.focusAreas}
          t={t}
        />

        {/* Pipeline de Projetos (Concluídos | Em Curso | No Radar) */}
        <ProjectsPipeline
          projects={currentData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
          t={t}
        />

        {/* Stack Tecnológica */}
        <TechStack
          categories={currentData.techStack}
          t={t}
        />

        {/* Percurso Académico & Estado Atual */}
        <AcademicJourney
          timeline={currentData.academicTimeline}
          t={t}
        />

        {/* Contacto & Download do CV */}
        <Contact
          personal={currentData.personal}
          onDownloadCv={handleDownloadCv}
          t={t}
        />
      </main>

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        t={t}
      />

      {/* Rodapé */}
      <Footer t={t} />
    </div>
  );
}
