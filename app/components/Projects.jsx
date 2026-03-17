import { projects } from '../data/portfolio';

const icons = [
  // Shield icon for network monitoring
  <svg key="shield" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  // File icon for file organizer
  <svg key="file" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/></svg>
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">03</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card reveal" key={proj.id}>
              <div className="project-number">0{idx + 1}</div>
              <div className="project-icon">{icons[idx]}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-subtitle">{proj.subtitle}</p>
              <p className="project-desc" dangerouslySetInnerHTML={{
                __html: proj.description.replace(
                  /(\d+%\s*(?:detection\s*)?accuracy|80%)/g,
                  '<strong>$1</strong>'
                )
              }} />
              <div className="project-tags">
                {proj.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-date">{proj.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
