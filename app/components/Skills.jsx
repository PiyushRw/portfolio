import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">04</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid stagger">
          {skills.map(cat => (
            <div className="skill-category" key={cat.category}>
              <h3 className="skill-category-title">
                <span className="skill-icon">{cat.icon}</span>
                {cat.category}
              </h3>
              <div className="skill-list">
                {cat.items.map(item => (
                  <span className="skill-item" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
