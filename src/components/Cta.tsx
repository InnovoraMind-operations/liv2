'use client';
import { useEffect, useRef, useState } from 'react';

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    service: '',
    company: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '140px 24px',
        background: 'linear-gradient(180deg, var(--espresso) 0%, var(--dark-walnut) 40%, #0a0603 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Spotlight from above — honey spruce warmth, not old amber */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(232,212,184,0.12) 0%, rgba(201,168,124,0.06) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Side vignettes */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.4) 100%)', pointerEvents: 'none' }} />

      {/* Subtle grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(
            90deg,
            transparent 0px, transparent 60px,
            rgba(212,165,116,0.02) 60px, rgba(212,165,116,0.02) 61px
          )`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '620px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Movement label */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: 'var(--amber-spruce)',
            textTransform: 'uppercase',
            marginBottom: '24px',
            opacity: revealed ? 0.8 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          VI. The Encore
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            fontWeight: 700,
            color: 'var(--cream-rosette)',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            marginBottom: '16px',
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
            textShadow: '0 0 60px rgba(212,165,116,0.08)',
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--cream-dim)',
            marginBottom: '64px',
            lineHeight: 1.6,
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          Tell us what you&apos;re building. We&apos;ll tell you how to compose it.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            {/* Email */}
            <div style={{ position: 'relative' }}>
              <label
                htmlFor="cta-email"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  color: 'var(--amber-spruce)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                  textAlign: 'left',
                  opacity: 0.7,
                }}
              >
                Your Email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="you@company.com"
                className="string-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Company */}
            <div style={{ position: 'relative' }}>
              <label
                htmlFor="cta-company"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  color: 'var(--amber-spruce)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                  textAlign: 'left',
                  opacity: 0.7,
                }}
              >
                Company
              </label>
              <input
                id="cta-company"
                type="text"
                placeholder="Your organization"
                className="string-input"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Service dropdown */}
            <div style={{ position: 'relative' }}>
              <label
                htmlFor="cta-service"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  color: 'var(--amber-spruce)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                  textAlign: 'left',
                  opacity: 0.7,
                }}
              >
                I&apos;m interested in
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="cta-service"
                  className="string-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="" disabled>Choose a movement...</option>
                  <option value="ai">The Composer — Artificial Intelligence</option>
                  <option value="ml">The Producer — Machine Learning</option>
                  <option value="ds">The Conductor — Data Science</option>
                  <option value="all">Full Orchestra — All Three</option>
                </select>
                {/* Dropdown arrow */}
                <div
                  style={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: 'var(--amber-spruce)',
                    opacity: 0.6,
                  }}
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                    <path d="M1 1 L6 7 L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px' }}>
              <button
                type="submit"
                className="btn-spruce"
                id="cta-submit"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ marginRight: '8px' }}>
                  <path d="M9 2 L16 9 L9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Book the Headliner
              </button>
            </div>
          </form>
        ) : (
          /* Success state */
          <div
            style={{
              padding: '64px 40px',
              background: 'rgba(92,58,33,0.15)',
              border: '1px solid rgba(212,165,116,0.2)',
              borderRadius: '3px',
              opacity: revealed ? 1 : 0,
              transition: 'opacity 0.8s ease',
            }}
          >
            {/* Rosette circle */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,165,116,0.2) 0%, transparent 70%)',
                boxShadow: `
                  0 0 0 2px var(--amber-spruce),
                  0 0 0 5px var(--espresso),
                  0 0 0 7px rgba(212,165,116,0.3)
                `,
                margin: '0 auto 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M5 14 L11 20 L23 8" stroke="var(--amber-spruce)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--cream-rosette)', marginBottom: '12px' }}>
              Session Booked
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--cream-dim)', lineHeight: 1.7 }}>
              We&apos;ll be in touch within 24 hours to schedule your discovery session.
              Prepare for the opening movement.
            </p>
          </div>
        )}

        {/* Liner note */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: 'var(--cream-dim)',
            opacity: 0.35,
            marginTop: '48px',
            lineHeight: 1.8,
          }}
        >
          No commitment required · 48-hour response guarantee · NDA available on request
        </p>
      </div>
    </section>
  );
}
