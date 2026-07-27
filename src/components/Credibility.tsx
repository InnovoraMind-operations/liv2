'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '47%', label: 'Avg. Efficiency Gain', pos: '3rd', note: 'across 40+ engagements' },
  { value: '120+', label: 'Models Deployed', pos: '5th', note: 'in production environments' },
  { value: '2.8×', label: 'ROI Multiplier', pos: '7th', note: 'avg. 18-month return' },
  { value: '99.1%', label: 'Uptime SLA', pos: '12th', note: 'zero critical incidents' },
];

const clients = [
  { name: 'InnovoraMind', sector: 'Tech Consultancy' },
  { name: 'Eminsphere', sector: 'Research' },
  { name: 'TechryonGlobal', sector: 'Tech Consultancy' },
];

export default function Credibility() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="credibility"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        /* Mahogany body zone — warm red-brown, lighter than rosewood sections.
           The reddish warmth evokes real mahogany under varnish. */
        background: 'linear-gradient(180deg, #0F0A05 0%, #2A1510 20%, #3D2817 50%, #2E1C0E 80%, #1A0E07 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Wood grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(
            92deg,
            transparent 0px,
            transparent 4px,
            rgba(139,69,19,0.08) 4px,
            rgba(139,69,19,0.08) 5px,
            transparent 5px,
            transparent 12px
          )`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '72px',
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--amber-spruce)', textTransform: 'uppercase', marginBottom: '16px' }}>
            III. The Gold Record Wall
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--cream-rosette)' }}>
            Proven in the Studio
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '16px',
          }}
          className="bento-grid"
        >
          {/* Hero stat — vinyl record card */}
          <div
            className="wood-panel"
            style={{
              gridColumn: '1 / 3',
              gridRow: '1 / 2',
              padding: '48px 40px',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              gap: '48px',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
            }}
          >
            {/* Vinyl Record */}
            <div style={{ flexShrink: 0, position: 'relative' }}>
              <div
                className="vinyl-record"
                style={{
                  width: '140px',
                  height: '140px',
                  position: 'relative',
                }}
              >
                {/* Record background */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: `conic-gradient(
                      #E8D4B8 0deg, #C9A87C 15deg,
                      #E8D4B8 30deg, #C9A87C 45deg,
                      #E8D4B8 60deg, #C9A87C 75deg,
                      #E8D4B8 90deg, #C9A87C 105deg,
                      #E8D4B8 120deg, #C9A87C 135deg,
                      #E8D4B8 150deg, #C9A87C 165deg,
                      #E8D4B8 180deg, #C9A87C 195deg,
                      #E8D4B8 210deg, #C9A87C 225deg,
                      #E8D4B8 240deg, #C9A87C 255deg,
                      #E8D4B8 270deg, #C9A87C 285deg,
                      #E8D4B8 300deg, #C9A87C 315deg,
                      #E8D4B8 330deg, #C9A87C 345deg,
                      #E8D4B8 360deg
                    )`,
                    boxShadow: '0 0 20px rgba(0,0,0,0.6), 0 0 40px rgba(232,212,184,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Gold label center */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #C9A87C 0%, #E8D4B8 50%, #A8845A 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 12px rgba(201,168,124,0.4)',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0F0A05' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--amber-spruce)', textTransform: 'uppercase', marginBottom: '12px', opacity: 0.8 }}>
                Platinum Studio Record
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 500,
                  color: 'var(--amber-spruce)',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  textShadow: '0 0 30px rgba(212,165,116,0.3)',
                  marginBottom: '8px',
                }}
              >
                47%
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--cream-rosette)', marginBottom: '8px', fontWeight: 600 }}>
                Average Efficiency Gain
              </p>

            </div>
          </div>

          {/* Process card */}
          <div
            className="wood-panel"
            style={{
              gridColumn: '3 / 4',
              gridRow: '1 / 2',
              padding: '40px 32px',
              borderRadius: '3px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--navy-primary)', textTransform: 'uppercase', marginBottom: '24px', opacity: 0.8 }}>
              Live Studio
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Discovery', complete: true },
                { label: 'Architecture', complete: true },
                { label: 'Training', complete: true },
                { label: 'Deployment', complete: true },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: item.complete ? 'var(--navy-primary)' : 'transparent',
                      border: `1px solid ${item.complete ? 'var(--navy-primary)' : 'rgba(78,205,196,0.3)'}`,
                      boxShadow: item.complete ? '0 0 8px rgba(78,205,196,0.5)' : 'none',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: item.complete ? 'var(--cream-rosette)' : 'var(--cream-dim)', opacity: item.complete ? 1 : 0.5 }}>
                    {item.label}
                  </span>
                  {item.complete && (
                    <div style={{ marginLeft: 'auto', width: '40px', height: '2px', background: 'linear-gradient(90deg, var(--navy-primary), transparent)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Fretboard stats strip */}
          <div
            style={{
              gridColumn: '1 / 4',
              gridRow: '2 / 3',
              padding: '0',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            {/* Fretboard strip */}
            <div
              style={{
                /* Ebony fretboard strip */
                background: 'linear-gradient(180deg, #0A0603 0%, #080402 50%, #0A0603 100%)',
                border: '1px solid rgba(232,212,184,0.12)',
                borderRadius: '3px',
                padding: '32px 40px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Fret lines */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0, bottom: 0,
                    left: `${12 + i * 11}%`,
                    width: '1px',
                    background: 'linear-gradient(180deg, transparent, rgba(232,212,184,0.15), transparent)',
                  }}
                />
              ))}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '24px', flexWrap: 'wrap' }}>
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                      padding: '0 16px',
                    }}
                  >
                    {/* Fret dot */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                      <div className="fret-dot" />
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--amber-spruce)', letterSpacing: '0.04em' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--cream-dim)', marginTop: '4px', fontWeight: 500 }}>
                      {stat.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--cream-dim)', opacity: 0.4, marginTop: '4px', letterSpacing: '0.1em' }}>
                      {stat.note}
                    </div>
                    {/* Fret position badge */}
                    <div style={{
                      position: 'absolute',
                      top: '-8px', right: '0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      color: 'rgba(212,165,116,0.4)',
                      letterSpacing: '0.1em',
                    }}>
                      {stat.pos}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div
          style={{
            marginTop: '64px',
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--cream-dim)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '32px', opacity: 0.5 }}>
            Trusted by
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {clients.map((client, i) => (
              <div
                key={i}
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #1e140a, #2a1a0c)',
                  border: '1px solid rgba(212,165,116,0.12)',
                  borderRadius: '2px',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  boxShadow: 'inset 0 1px 0 rgba(212,165,116,0.05)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(212,165,116,0.3)';
                  el.style.boxShadow = 'inset 0 1px 0 rgba(212,165,116,0.1), 0 4px 16px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(212,165,116,0.12)';
                  el.style.boxShadow = 'inset 0 1px 0 rgba(212,165,116,0.05)';
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--cream-dim)', letterSpacing: '0.06em' }}>
                  {client.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--amber-spruce)', opacity: 0.6, letterSpacing: '0.15em', marginTop: '2px' }}>
                  {client.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
