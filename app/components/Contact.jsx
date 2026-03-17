'use client';
import { useState } from 'react';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setStatusMsg(data.message || 'Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network error. Please try again.');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">06</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>
        <div className="contact-content">
          <p className="contact-text reveal">
            Interested in collaborating or have an opportunity? Let&apos;s connect.
          </p>
          <div className="contact-grid reveal">
            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Your message..."
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <div className="form-success">{statusMsg}</div>}
              {status === 'error' && <div className="form-error">{statusMsg}</div>}
            </form>

            {/* Links */}
            <div className="contact-links">
              <a href={`mailto:${profile.contact.email}`} className="contact-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div className="contact-card-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{profile.contact.email}</span>
                </div>
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                <div className="contact-card-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">piyush-rawat006</span>
                </div>
              </a>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <div className="contact-card-text">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">PiyushRw</span>
                </div>
              </a>
              <a href={`tel:${profile.contact.phone}`} className="contact-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div className="contact-card-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">{profile.contact.phone}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
