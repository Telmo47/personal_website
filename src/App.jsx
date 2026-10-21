import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RpgStats from './components/RpgStats';
import ProjectsPipeline from './components/ProjectsPipeline';
import TechStack from './components/TechStack';
import AcademicJourney from './components/AcademicJourney';
import DevNotes from './components/DevNotes';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleDownloadCv = () => {
    // Tenta abrir/descarregar o ficheiro de CV
    const link = document.createElement('a');
    link.href = portfolioData.personal.cvPdfPath;
    link.download = 'Curriculo_Engenheiro_Informatico.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Feedback visual
    setToastMessage('A transferir o currículo (PDF)... Para colocar o teu PDF real, basta copiar para public/cv.pdf');
    setTimeout(() => {
      setToastMessage('');
    }, 5000);
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
      <Navbar onDownloadCv={handleDownloadCv} />

      <main>
        {/* Página Principal / Hero & Hub de Navegação */}
        <Hero data={portfolioData} onDownloadCv={handleDownloadCv} />

        {/* Ficha de Habilidades estilo RPG / Videojogo */}
        <RpgStats stats={portfolioData.rpgStats} />

        {/* Pipeline de Projetos (Concluídos | Em Curso | No Radar) */}
        <ProjectsPipeline
          projects={portfolioData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Stack Tecnológica */}
        <TechStack />

        {/* Percurso Académico & Estado Atual */}
        <AcademicJourney timeline={portfolioData.academicTimeline} />

        {/* Notas Técnicas / Dev Blog */}
        <DevNotes notes={portfolioData.devNotes} />

        {/* Contacto & Download do CV */}
        <Contact personal={portfolioData.personal} onDownloadCv={handleDownloadCv} />
      </main>

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
