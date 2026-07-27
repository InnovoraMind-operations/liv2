'use client';
import { useEffect, useRef, useState } from 'react';

const stages = [
  {
    fret: '01',
    label: 'Tracking',
    sublabel: 'Data Ingestion',
    description: 'We listen before we compose. Raw data streams are captured, catalogued, and quality-checked — every signal, every source, every edge case.',
    color: 'var(--amber-spruce)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="12" r="5" fill="none" stroke="var(--amber-spruce)" strokeWidth="1.2" />
        <line x1="16" y1="17" x2="16" y2="24" stroke="var(--amber-spruce)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="10" y1="24" x2="22" y2="24" stroke="var(--amber-spruce)" strokeWidth="1.2" strokeLinecap="round" />
        {/* Waveform */}
        <path d="M2 16 Q4 12 6 16 Q8 20 10 16 Q12 12 14 16 Q16 20 18 16 Q20 12 22 16 Q24 20 26 16 Q28 12 30 16" fill="none" stroke="rgba(201,168,124,0.4)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    fret: '05',
    label: 'Mixing',
    sublabel: 'Feature Engineering',
    description: 'Separating signal from noise is craft, not formula. We engineer features that carry the true frequency of your business — discarding interference, amplifying insight.',
    color: 'var(--navy-primary)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* EQ sliders */}
        {[6, 12, 18, 24].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="6" x2={x} y2="26" stroke="rgba(95,188,184,0.3)" strokeWidth="1" strokeLinecap="round" />
            <rect x={x - 2.5} y={[8, 14, 10, 18][i]} width="5" height="3" rx="1" fill="var(--navy-primary)" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    fret: '09',
    label: 'Mastering',
    sublabel: 'Model Training',
    description: 'The convergence moment — when loss curves flatten and accuracy peaks. We monitor every epoch, tune every hyperparameter, until the model hits its frequency.',
    color: '#7fd88a',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* VU Meter bars */}
        {[4, 7, 10, 13, 16, 19, 22, 25].map((x, i) => {
          const heights = [16, 20, 14, 22, 18, 24, 12, 20];
          const colors = ['#7fd88a', '#7fd88a', '#7fd88a', '#c4e87f', '#c4e87f', '#e8d47f', '#e8a07f', '#e87f7f'];
          return (
            <rect key={i} x={x} y={26 - heights[i]} width="2" height={heights[i]} rx="0.5" fill={colors[i]} opacity="0.8" />
          );
        })}
        {/* Peak line */}
        <line x1="2" y1="5" x2="30" y2="5" stroke="rgba(127,216,138,0.3)" strokeWidth="0.5" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    fret: '12',
    label: 'Distribution',
    sublabel: 'Deployment',
    description: 'The release. Infrastructure hardened, APIs wired, monitoring live. Your model goes from studio to stage — scalable, observable, always on.',
    color: 'var(--cream-rosette)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* Sound waves radiating */}
        <circle cx="16" cy="16" r="3" fill="var(--cream-rosette)" opacity="0.7" />
        <circle cx="16" cy="16" r="7" fill="none" stroke="rgba(240,230,210,0.5)" strokeWidth="1" />
        <circle cx="16" cy="16" r="12" fill="none" stroke="rgba(240,230,210,0.3)" strokeWidth="1" />
        <circle cx="16" cy="16" r="17" fill="none" stroke="rgba(240,230,210,0.15)" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / (sectionHeight * 0.7));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        /* Ebony fretboard section — darkest zone, like the neck of the guitar */
        background: 'linear-gradient(180deg, #0F0A05 0%, #0A0603 40%, #080402 80%, #0A0603 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 40px,
            rgba(201,168,124,0.015) 40px,
            rgba(201,168,124,0.015) 41px
          )`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--amber-spruce)', textTransform: 'uppercase', marginBottom: '16px' }}>
            IV. In the Studio
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--cream-rosette)', marginBottom: '16px' }}>
            The Recording Process
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--cream-dim)', maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Four movements from raw data to deployed intelligence. Every stage deliberate, every transition earned.
          </p>
        </div>

        {/* Fretboard + Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Guitar neck column (center spine) */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0, bottom: 0,
              transform: 'translateX(-50%)',
              width: '48px',
              background: 'linear-gradient(180deg, #0d0806 0%, #1a1208 50%, #0d0806 100%)',
              border: '1px solid rgba(212,165,116,0.15)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
            className="neck-hide-mobile"
          >
            {/* Fret lines on neck */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: `${10 + i * 14}%`,
                  left: 0, right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(212,165,116,0.3), transparent)',
                }}
              />
            ))}

            {/* Playhead */}
            <div
              style={{
                position: 'absolute',
                left: 0, right: 0,
                top: `${scrollProgress * 85}%`,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, var(--amber-spruce), transparent)',
                boxShadow: '0 0 12px var(--amber-spruce), 0 0 24px rgba(212,165,116,0.4)',
                transition: 'top 0.1s linear',
              }}
            />
          </div>

          {/* Stages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {stages.map((stage, i) => {
              const isLeft = i % 2 === 0;
              const isActive = activeStage === i;
              const isScrolled = scrollProgress > (i / stages.length) * 0.9;

              return (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 80px 1fr',
                    alignItems: 'center',
                    gap: '0',
                    opacity: revealed && isScrolled ? 1 : 0,
                    transform: revealed && isScrolled
                      ? 'translateY(0)'
                      : `translateY(20px)`,
                    transition: `opacity 0.6s ease, transform 0.6s ease`,
                  }}
                  className="stage-row"
                >
                  {/* Left content */}
                  <div style={{ textAlign: 'right', paddingRight: '40px', visibility: isLeft ? 'visible' : 'hidden' }}>
                    {isLeft && (
                      <StageCard stage={stage} isActive={isActive} onHover={(v) => setActiveStage(v ? i : null)} />
                    )}
                  </div>

                  {/* Center fret node */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', zIndex: 1 }}>
                    {/* Fret number */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: isScrolled ? stage.color : 'rgba(212,165,116,0.3)',
                        letterSpacing: '0.1em',
                        marginBottom: '8px',
                        transition: 'color 0.4s ease',
                      }}
                    >
                      {stage.fret}
                    </div>
                    {/* Node */}
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: isScrolled
                          ? `radial-gradient(circle, ${stage.color} 0%, transparent 70%)`
                          : 'transparent',
                        border: `2px solid ${isScrolled ? stage.color : 'rgba(212,165,116,0.2)'}`,
                        boxShadow: isScrolled ? `0 0 16px ${stage.color}60` : 'none',
                        transition: 'all 0.5s ease',
                      }}
                    />
                  </div>

                  {/* Right content */}
                  <div style={{ paddingLeft: '40px', visibility: !isLeft ? 'visible' : 'hidden' }}>
                    {!isLeft && (
                      <StageCard stage={stage} isActive={isActive} onHover={(v) => setActiveStage(v ? i : null)} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}

function StageCard({
  stage,
  isActive,
  onHover,
}: {
  stage: (typeof stages)[0];
  isActive: boolean;
  onHover: (v: boolean) => void;
}) {
  return (
    <div
      className="glass-warm"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        padding: '28px 24px',
        borderRadius: '2px',
        border: `1px solid ${isActive ? stage.color + '40' : 'rgba(212,165,116,0.15)'}`,
        boxShadow: isActive
          ? `0 12px 40px rgba(0,0,0,0.5), 0 0 20px ${stage.color}20`
          : '0 8px 24px rgba(0,0,0,0.3)',
        transition: 'all 0.4s ease',
        textAlign: 'left',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <div style={{ filter: isActive ? `drop-shadow(0 0 8px ${stage.color})` : 'none', transition: 'filter 0.3s ease' }}>
          {stage.icon}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: stage.color, textTransform: 'uppercase', opacity: 0.8 }}>
            {stage.sublabel}
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--cream-rosette)' }}>
            {stage.label}
          </h3>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--cream-dim)', lineHeight: 1.7, opacity: isActive ? 1 : 0.7, transition: 'opacity 0.3s ease' }}>
        {stage.description}
      </p>
    </div>
  );
}
