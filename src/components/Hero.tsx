'use client';
import { useEffect, useRef, useState } from 'react';

// Pre-seeded stable values — avoids SSR/client hydration mismatch
const DUST_PARTICLES = [
  { left: 14.2, bottom: 22.8, duration: 4.1, delay: 0.3, drift: 12.4 },
  { left: 28.7, bottom: 38.1, duration: 6.3, delay: 1.8, drift: -8.2 },
  { left: 43.5, bottom: 15.6, duration: 5.2, delay: 0.7, drift: 18.9 },
  { left: 61.3, bottom: 31.4, duration: 7.8, delay: 2.4, drift: -14.6 },
  { left: 77.9, bottom: 42.7, duration: 3.9, delay: 3.1, drift: 6.3 },
  { left: 19.8, bottom: 8.3, duration: 6.7, delay: 0.5, drift: -11.7 },
  { left: 52.4, bottom: 25.2, duration: 4.8, delay: 1.2, drift: 9.8 },
  { left: 86.1, bottom: 37.9, duration: 7.3, delay: 3.6, drift: -5.4 },
  { left: 35.6, bottom: 44.1, duration: 5.6, delay: 2.9, drift: 16.2 },
  { left: 68.2, bottom: 18.7, duration: 3.4, delay: 0.9, drift: -19.3 },
  { left: 11.9, bottom: 33.5, duration: 6.1, delay: 1.5, drift: 7.8 },
  { left: 91.3, bottom: 29.4, duration: 4.4, delay: 0.2, drift: -3.6 },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [strumDone, setStrumDone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const animRef = useRef<number>(0);

  useEffect(() => { setMounted(true); }, []);

  // Strum animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setStrumDone(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Particle canvas inside soundhole
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const SIZE = canvas.offsetWidth;
    canvas.width = SIZE;
    canvas.height = SIZE;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; life: number; maxLife: number;
    }[] = [];

    const colors = [
      'rgba(212,165,116,',
      'rgba(245,230,211,',
      'rgba(78,205,196,',
    ];

    // Spawn particles (reduced count by 40% for performance)
    for (let i = 0; i < 36; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * (SIZE * 0.38);
      particles.push({
        x: SIZE / 2 + Math.cos(angle) * r,
        y: SIZE / 2 + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      const cx = SIZE / 2;
      const cy = SIZE / 2;
      const radius = SIZE * 0.42;

      // Clip to circle
      ctx.save();
      
      // Draw background (since alpha is false)
      ctx.fillStyle = '#0F0A05'; // Match rosewood center base
      ctx.fillRect(0, 0, SIZE, SIZE);

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();
      
      // Fill the clipped circle with the gradient (or we can just let it be transparent if we were using CSS, 
      // but since alpha: false we MUST draw the gradient so it looks like the hero background)
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, '#E8D4B8');
      gradient.addColorStop(0.3, '#C9A87C');
      gradient.addColorStop(0.6, '#7A5030');
      gradient.addColorStop(1, '#3D2817');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Check scroll state to skip physics
      const isScrolling = document.body.classList.contains('is-scrolling');

      // Draw particles
      particles.forEach((p) => {
        if (!isScrolling) {
          // Mouse influence
          const canvasRect = canvas.getBoundingClientRect();
          const mx = (mouseRef.current.x - canvasRect.left) / canvasRect.width * SIZE;
          const my = (mouseRef.current.y - canvasRect.top) / canvasRect.height * SIZE;
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            p.vx += (dx / dist) * 0.08;
            p.vy += (dy / dist) * 0.08;
          }

          p.vx *= 0.96;
          p.vy *= 0.96;
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off edges within circle
          const fromCenter = Math.sqrt((p.x - cx) ** 2 + (p.y - cy) ** 2);
          if (fromCenter > radius - 10) {
            const angle = Math.atan2(p.y - cy, p.x - cx);
            p.vx -= Math.cos(angle) * 0.3;
            p.vy -= Math.sin(angle) * 0.3;
          }

          p.life++;
          if (p.life > p.maxLife) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.random() * (SIZE * 0.3);
            p.x = cx + Math.cos(angle) * r;
            p.y = cy + Math.sin(angle) * r;
            p.life = 0;
            p.maxLife = 100 + Math.random() * 100;
            p.vx = (Math.random() - 0.5) * 0.4;
            p.vy = (Math.random() - 0.5) * 0.4;
          }
        }

        const alpha = 0.3 + Math.sin(p.life * 0.05) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.fill();
      });

      // Subtle connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 50) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212,165,116,${(1 - d / 50) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.restore();

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newSize = canvas.offsetWidth;
      canvas.width = newSize;
      canvas.height = newSize;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        /* Martin D-28 under stage lights:
           Honey spruce soundboard glows at center,
           Indian rosewood sides fade to near-black at edges */
        background: `
          radial-gradient(
            circle at 75% 85%,
            rgba(201, 168, 124, 0.15) 0%,
            transparent 50%
          ),
          radial-gradient(
            ellipse 80% 75% at 50% 55%,
            #E8D4B8 0%,
            #C9A87C 15%,
            #7A5030 35%,
            #3D2817 60%,
            #1a1208 85%,
            #0A0603 100%
          )
        `,
        padding: '120px 24px 80px',
      }}
    >
      {/* Strum lines on page load */}
      {!strumDone && (
        <>
          <div className="strum-line" style={{ background: 'var(--spruce-mid)', animationDelay: '0s' }} />
          <div className="strum-line" style={{ background: 'var(--navy-primary)', animationDelay: '0.15s' }} />
          <div className="strum-line" style={{ background: 'var(--cream-rosette)', animationDelay: '0.3s' }} />
        </>
      )}

      {/* Ambient dust particles — only after client mount to avoid hydration mismatch */}
      {mounted && DUST_PARTICLES.map((p, i) => (
        <div
          key={i}
          className="dust-particle"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--drift': `${p.drift}px`,
            opacity: 0,
          } as React.CSSProperties}
        />
      ))}

      {/* Stage light rays */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '800px',
          height: '100%',
          /* Vertical stage light shaft from above, warm ivory-gold */
          background: 'conic-gradient(from 270deg at 50% -10%, rgba(232,212,184,0.08) 0deg, transparent 22deg, transparent 338deg, rgba(232,212,184,0.08) 360deg)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>
        {/* Liner note tag */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            /* On the bright spruce center, use darker text for contrast */
            color: 'var(--mahogany)',
            textTransform: 'uppercase',
            marginBottom: '32px',
            opacity: 0.7,
          }}
        >
          ◈ Premium AI Consultancy ◈
        </p>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 700,
            color: '#F0E6D2',
            letterSpacing: '0.04em',
            lineHeight: 1.05,
            marginBottom: '24px',
            textShadow: '0 2px 30px rgba(240, 230, 210, 0.15)',
          }}
        >
          Vorqentra
          <br />
          <span style={{ color: '#1a1208', fontStyle: 'italic', textShadow: 'none' }}>Labs</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
            fontStyle: 'italic',
            color: '#3D2817',
            letterSpacing: '0.06em',
            marginBottom: '60px',
            fontWeight: 300,
          }}
        >
          We compose intelligence.
        </p>

        {/* Soundhole + Canvas */}
        <div
          style={{
            width: 'clamp(200px, 35vw, 320px)',
            height: 'clamp(200px, 35vw, 320px)',
            margin: '0 auto 56px',
            position: 'relative',
          }}
        >
          {/* Rosette rings: dark mahogany outer → honey spruce band → cream ivory inlay */}
          <div
            style={{
              position: 'absolute',
              inset: '-16px',
              borderRadius: '50%',
              boxShadow: `
                0 0 0 3px #C9A87C,
                0 0 0 6px #3D2817,
                0 0 0 9px #E8D4B8,
                0 0 0 12px #0A0603,
                0 0 0 14px rgba(201, 168, 124, 0.6),
                0 0 0 16px #0A0603,
                0 0 0 18px rgba(240, 230, 210, 0.2),
                0 0 70px rgba(232, 212, 184, 0.3)
              `,
            }}
          />
          {/* Rosette pattern SVG overlay */}
          <svg
            style={{ position: 'absolute', inset: '-20px', width: 'calc(100% + 40px)', height: 'calc(100% + 40px)', pointerEvents: 'none', opacity: 0.6 }}
            viewBox="0 0 360 360"
          >
            {/* Mahogany-toned rosette pattern — dark against spruce background */}
            <circle cx="180" cy="180" r="175" fill="none" stroke="rgba(61,40,23,0.4)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="180" cy="180" r="168" fill="none" stroke="rgba(201,168,124,0.5)" strokeWidth="0.8" />
            <circle cx="180" cy="180" r="162" fill="none" stroke="rgba(61,40,23,0.5)" strokeWidth="2" strokeDasharray="2 4" />
            <circle cx="180" cy="180" r="156" fill="none" stroke="rgba(232,212,184,0.3)" strokeWidth="0.5" />
          </svg>

          {/* Canvas */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              /* Dark guitar interior — ebony depth inside the soundhole */
              background: 'radial-gradient(circle, #070402 0%, #0A0603 55%, #120806 100%)',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.9), inset 0 0 20px rgba(10,6,3,0.6), 0 8px 40px rgba(0,0,0,0.7)',
              position: 'relative',
            }}
          >
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
            {/* Center glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                /* Subtle warmth deep inside the soundhole */
                background: 'radial-gradient(circle, rgba(201,168,124,0.06) 0%, transparent 65%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* CTA */}
        <a
          href="#services"
          className="btn-brass"
          style={{
            fontSize: '1rem',
            letterSpacing: '0.12em',
            padding: '16px 48px',
          }}
          id="hero-cta"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2 L14 8 L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Step Inside
        </a>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: '56px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.5,
          }}
        >
          <div
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(180deg, transparent, var(--amber-spruce))',
            }}
          />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--cream-dim)', textTransform: 'uppercase' }}>
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}
