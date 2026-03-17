import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">05</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </div>
        <div className="certs-grid stagger">
          {certifications.map(cert => (
            <div className="cert-card" key={cert.title}>
              <div className="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-year">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
