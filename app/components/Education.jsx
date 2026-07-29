import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">05</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid stagger">
          {education.map(cat => (
            <div className="skill-category" key={cat.category}>
              <h3 className="skill-category-title">
                <span className="skill-icon">{cat.icon}</span>
                {cat.category}
              </h3>
              <div className="skill-list">
                {cat.items.map((item, idx) => (
                  <span className="skill-item" key={idx}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}