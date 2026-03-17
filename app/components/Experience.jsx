import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">02</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div className="timeline-item reveal" key={exp.id}>
              <div className="timeline-marker">
                <div className="marker-dot" />
                {idx < experience.length - 1 && <div className="marker-line" />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-company">{exp.company} · {exp.type}</span>
                  </div>
                  <span className="timeline-date">{exp.period}</span>
                </div>
                <ul className="timeline-details">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
