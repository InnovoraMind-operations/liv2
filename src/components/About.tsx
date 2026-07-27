'use client';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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
      id="about"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #0F0A05 0%, #0A0603 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: 'var(--amber-spruce)',
            textTransform: 'uppercase',
            marginBottom: '24px',
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          About Us
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--cream-rosette)',
            marginBottom: '32px',
            lineHeight: 1.2,
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
          }}
        >
          Master Craftsmen for Your Data.
        </h2>

        <div
          className="ebony-card"
          style={{
            padding: '48px',
            borderRadius: '4px',
            background: '#0A0603',
            border: '1px solid rgba(201, 168, 124, 0.15)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--cream-dim)',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}
          >
            Crescendo AI is a premium consultancy that makes Artificial Intelligence, Machine Learning, and Data Science work for your business. We take the complexity out of advanced technology, building custom, high-performing systems that deliver real results.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--cream-dim)',
              lineHeight: 1.8,
            }}
          >
            We don't just write code; we compose intelligent systems with precision and care. Whether you need generative architectures, predictive models, or deep data insights, we orchestrate the solution so you can focus on the music.
          </p>
        </div>
      </div>
    </section>
  );
}
