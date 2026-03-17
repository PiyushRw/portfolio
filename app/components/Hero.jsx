'use client';
import { useEffect, useRef } from 'react';
import { profile } from '../data/portfolio';

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const animateCounters = () => {
      const counters = statsRef.current?.querySelectorAll('.stat-number');
      counters?.forEach(counter => {
        const target = parseFloat(counter.dataset.count);
        const isFloat = target % 1 !== 0;
        const duration = 1500;
        const startTime = performance.now();

        const update = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          counter.textContent = isFloat ? current.toFixed(1) : Math.round(current);
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      });
    };

    const timer = setTimeout(animateCounters, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content hero-enter">
        <div className="hero-tag">
          <span className="tag-dot" />
          {profile.title}
        </div>
        <h1 className="hero-title">
          {profile.name.split(' ')[0]}<br />
          <span className="outline-text">{profile.name.split(' ')[1]}</span>
        </h1>
        <p className="hero-subtitle">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          <a href="https://drive.google.com/file/d/1Vx0-i7y-32hnPZDpgleezvz_3EFo9gQT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div className="stat">
            <span className="stat-number" data-count="8.1">0</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number" data-count="2">0</span>
            <span className="stat-label">Internships</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number" data-count="4">0</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </div>
      <div className="hero-grid-lines">
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
