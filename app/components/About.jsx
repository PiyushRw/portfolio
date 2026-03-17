import { profile } from '../data/portfolio';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">01</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>
        <div className="about-grid reveal">
          <div className="about-text">
            {profile.bio.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: p.replace(/\b(Computer Science|Artificial Intelligence & Machine Learning|ML pipeline|FastAPI|Docker|MLOps)\b/g, '<strong>$1</strong>')
              }} />
            ))}
          </div>
          <div className="about-details stagger">
            {Object.entries(profile.details).map(([key, value]) => (
              <div className="detail-card" key={key}>
                <span className="detail-label">{key}</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
