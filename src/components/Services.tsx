'use client';
import { useState, useEffect, useRef } from 'react';

interface Service {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  colorDim: string;
  glowColor: string;
  metric: string;
  metricLabel: string;
  icon: React.ReactNode;
  stringLineColor?: string;
  stringGlowBoxShadow?: string;
  cardGlowColor?: string;
  labelLineColor?: string;
  labelGlowBoxShadow?: string;
  metricColor?: string;
  bodyColor?: string;
  titleTextShadow?: string;
}

const services: Service[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    title: 'The Composer',
    tagline: 'Generative systems that create from silence.',
    description:
      'We architect intelligent systems that don\'t just process—they originate. From large language model fine-tuning to custom generative architectures, we compose AI from the first note.',
    color: '#C9A87C',
    colorDim: 'rgba(201,168,124,0.15)',
    glowColor: 'rgba(201,168,124,0.4)',
    metric: '10×',
    metricLabel: 'avg. content velocity',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Quill */}
        <path d="M30 5 Q35 10 28 18 L15 32 L12 35 L11 30 L24 17 Q32 10 30 5Z" fill="none" stroke="#C9A87C" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M11 30 L15 32" stroke="#C9A87C" strokeWidth="1.2" strokeLinecap="round" />
        {/* Circuit node */}
        <circle cx="20" cy="20" r="2" fill="rgba(201,168,124,0.6)" />
        <line x1="20" y1="18" x2="20" y2="14" stroke="rgba(201,168,124,0.4)" strokeWidth="0.8" />
        <circle cx="20" cy="13" r="1.5" fill="none" stroke="rgba(201,168,124,0.5)" strokeWidth="0.8" />
        <line x1="20" y1="22" x2="20" y2="26" stroke="rgba(201,168,124,0.4)" strokeWidth="0.8" />
        <circle cx="20" cy="27" r="1.5" fill="none" stroke="rgba(201,168,124,0.5)" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    title: 'The Producer',
    tagline: 'Models trained to perfection, noise to signal.',
    description:
      'Every great album is 90% mixing. Our ML engineers refine raw data into precision models—gradient descent curves you can feel, regularization like a sound engineer pulling reverb.',
    color: '#9BB5D4',
    colorDim: 'rgba(155,181,212,0.12)',
    glowColor: 'rgba(122,155,191,0.4)',
    stringLineColor: '#7A9BBF',
    stringGlowBoxShadow: '0 0 8px #7A9BBF, 0 0 20px rgba(122,155,191,0.35)',
    cardGlowColor: 'rgba(122,155,191,0.4)',
    labelLineColor: '#7A9BBF',
    labelGlowBoxShadow: '0 0 20px rgba(122,155,191,0.35)',
    metricColor: '#A8C4E0',
    bodyColor: '#B8CFE6',
    titleTextShadow: '0 0 30px rgba(122,155,191,0.2)',
    metric: '94.7%',
    metricLabel: 'avg. model accuracy',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Tuning peg */}
        <circle cx="20" cy="12" r="5" fill="none" stroke="#7A9BBF" strokeWidth="1.2" />
        <circle cx="20" cy="12" r="2" fill="#7A9BBF" opacity="0.5" />
        <line x1="20" y1="17" x2="20" y2="22" stroke="#7A9BBF" strokeWidth="1.2" strokeLinecap="round" />
        {/* Gradient descent curve */}
        <path d="M6 30 Q12 24 18 26 Q24 28 30 20 Q33 16 36 18" fill="none" stroke="rgba(122,155,191,0.7)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="18" r="2" fill="#7A9BBF" opacity="0.7" />
        {/* Loss arrows */}
        <path d="M9 34 L9 30 L13 30" fill="none" stroke="rgba(122,155,191,0.3)" strokeWidth="0.8" strokeLinecap="round" />
        <text x="5" y="39" fontSize="5" fill="rgba(122,155,191,0.5)" fontFamily="monospace">loss</text>
        <text x="29" y="38" fontSize="5" fill="rgba(122,155,191,0.5)" fontFamily="monospace">iter</text>
      </svg>
    ),
  },
  {
    id: 'ds',
    name: 'Data Science',
    title: 'The Conductor',
    tagline: 'Patterns revealed across the orchestra of your data.',
    description:
      'The conductor sees every instrument, every timing, every dynamic shift. We survey your entire data landscape, reveal hidden harmonics, and orchestrate insights that drive decision.',
    color: '#F0E6D2',
    colorDim: 'rgba(240,230,210,0.1)',
    glowColor: 'rgba(240,230,210,0.3)',
    metric: '3.2×',
    metricLabel: 'decision velocity',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Baton */}
        <line x1="8" y1="32" x2="28" y2="8" stroke="#F0E6D2" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="27" cy="9" r="3" fill="#F0E6D2" opacity="0.6" />
        {/* Scatter plot */}
        <circle cx="14" cy="28" r="2" fill="rgba(240,230,210,0.5)" />
        <circle cx="22" cy="22" r="1.5" fill="rgba(240,230,210,0.4)" />
        <circle cx="30" cy="26" r="2.5" fill="rgba(240,230,210,0.3)" />
        <circle cx="18" cy="33" r="1" fill="rgba(240,230,210,0.4)" />
        <circle cx="32" cy="18" r="1.5" fill="rgba(240,230,210,0.5)" />
        <circle cx="26" cy="30" r="1" fill="rgba(240,230,210,0.3)" />
        {/* Trend line */}
        <line x1="12" y1="34" x2="34" y2="16" stroke="rgba(240,230,210,0.2)" strokeWidth="0.8" strokeDasharray="2 3" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        padding: '120px 0',
        position: 'relative',
        /* Dark rosewood transition from hero — services live in the dark body */
        background: 'linear-gradient(180deg, #0A0603 0%, #0F0A05 25%, #150C06 60%, #0F0A05 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Section header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '80px',
          padding: '0 24px',
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--amber-spruce)', textTransform: 'uppercase', marginBottom: '16px' }}>
          II. The Three Movements
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--cream-rosette)', marginBottom: '16px' }}>
          The Strings
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--cream-dim)', maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
          Three distinct disciplines, each resonating at its own frequency — together, they form a complete intelligence.
        </p>
      </div>

      {/* Desktop: Three strings layout */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0 2px',
          position: 'relative',
        }}
        className="services-grid"
      >
        {/* Horizontal connector line */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: '10%', right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,124,0.2), rgba(122,155,191,0.3), rgba(240,230,210,0.2), transparent)',
          }}
        />

        {services.map((svc, index) => (
          <div
            key={svc.id}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 16px',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
            }}
          >
            {/* String line */}
            <div
              style={{
                width: '2px',
                height: activeService === svc.id ? '40px' : '60px',
                background: `linear-gradient(180deg, transparent, ${svc.stringLineColor || svc.color})`,
                boxShadow: svc.stringGlowBoxShadow || `0 0 8px ${svc.stringLineColor || svc.color}, 0 0 12px ${svc.glowColor}`,
                marginBottom: '0',
                flexShrink: 0,
                transition: 'height 0.4s ease',
              }}
            />

            {/* String card */}
            <div
              className="ebony-card"
              onMouseEnter={() => setActiveService(svc.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                borderRadius: '2px',
                padding: activeService === svc.id ? '40px 32px' : '32px 24px',
                background: activeService === svc.id ? 'linear-gradient(160deg, #1A1208 0%, #0F0A05 100%)' : '#0A0603',
                border: `1px solid ${activeService === svc.id ? svc.color + '40' : 'rgba(232,212,184,0.06)'}`,
                boxShadow: activeService === svc.id
                  ? `0 0 0 1px ${svc.color}25, 0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 ${svc.color}20, 0 0 40px ${svc.cardGlowColor || svc.glowColor}, inset 0 0 20px rgba(0,0,0,0.5)`
                  : '0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.8)',
                transition: 'all 0.5s ease',
                cursor: 'default',
                width: '100%',
              }}
            >
              {/* String indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: activeService === svc.id ? '40px' : '24px',
                    height: '2px',
                    background: svc.labelLineColor || svc.color,
                    boxShadow: svc.labelGlowBoxShadow || `0 0 8px ${svc.glowColor}`,
                    transition: 'width 0.4s ease',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: svc.color,
                    textTransform: 'uppercase',
                    opacity: 0.8,
                  }}
                >
                  {svc.name}
                </span>
              </div>

              {/* Icon */}
              <div style={{ marginBottom: '20px', filter: activeService === svc.id ? `drop-shadow(0 0 8px ${svc.glowColor})` : 'none', transition: 'filter 0.4s ease' }}>
                {svc.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: svc.color,
                  textShadow: svc.titleTextShadow || 'none',
                  marginBottom: '8px',
                  letterSpacing: '0.02em',
                }}
              >
                {svc.title}
              </h3>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'var(--cream-dim)',
                  marginBottom: '20px',
                  lineHeight: 1.5,
                }}
              >
                {svc.tagline}
              </p>

              {/* Description (shows on hover) */}
              <div
                style={{
                  maxHeight: activeService === svc.id ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: svc.bodyColor || 'var(--cream-dim)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                    opacity: activeService === svc.id ? 1 : 0,
                    transition: 'opacity 0.3s ease 0.2s',
                  }}
                >
                  {svc.description}
                </p>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: `linear-gradient(90deg, ${svc.color}40, transparent)`,
                  marginBottom: '16px',
                  marginTop: '4px',
                }}
              />

              {/* Metric */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: svc.metricColor || svc.color,
                    letterSpacing: '0.05em',
                    filter: activeService === svc.id ? `drop-shadow(0 0 12px ${svc.glowColor})` : 'none',
                    transition: 'filter 0.4s ease',
                    display: 'block',
                  }}
                >
                  {svc.metric}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'var(--cream-dim)',
                    textTransform: 'uppercase',
                    opacity: 0.6,
                  }}
                >
                  {svc.metricLabel}
                </span>
              </div>
            </div>

            {/* Bottom string */}
            <div
              style={{
                width: '2px',
                height: '40px',
                background: `linear-gradient(180deg, ${svc.color}, transparent)`,
                filter: `drop-shadow(0 0 6px ${svc.color})`,
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Fretboard bottom accent */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '60px auto 0',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            height: '40px',
            background: 'linear-gradient(180deg, #0d0806 0%, #1a1208 50%, #0d0806 100%)',
            border: '1px solid rgba(212,165,116,0.1)',
            borderRadius: '0 0 4px 4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '0 10%',
            position: 'relative',
          }}
        >
          {/* Fret lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ width: '1px', height: '100%', background: 'rgba(212,165,116,0.1)', position: 'absolute', left: `${20 + i * 15}%` }} />
          ))}
        </div>
      </div>

    </section>
  );
}
