'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Leadership team data
const leaders = [
  {
    name: 'Wiktoria Gromowa-Cieślik',
    role: 'Director',
    image: '/Images/Image1.png',
    facePos: 'center 18%',
  },
  {
    name: 'Dr. Dina Alkhodary',
    role: 'Strategy Director',
    image: '/Images/Image4.png',
    facePos: 'center 18%',
  },
  {
    name: 'Dr. Eka Devidze',
    role: 'Independent Director',
    image: '/Images/Image5.png',
    facePos: 'center 18%',
  },
  {
    name: 'Assoc. Prof. Dr. Muliati Hj. Sedek',
    role: 'Board Member',
    image: '/Images/Image6.png',
    facePos: 'center 18%',
  },
  {
    name: 'Nino Devidze',
    role: 'Advisory Board Member',
    image: '/Images/Image8.jpeg',
    facePos: 'center 20%',
  },
];

// Leadership Perspectives / Voices of Innovation
const perspectives = [
  {
    quote:
      'I believe the future of enterprise belongs to those who treat technology not as a commodity, but as a carefully composed instrument — built with intention, calibrated to each organization, and measured by real outcomes.',
    author: 'Wiktoria Gromowa-Cieślik',
    title: 'Director',
    image: '/Images/Image1.png',
  },
  {
    quote:
      'Strategy transforms ambition into advantage. By aligning advanced AI and data systems with clear business direction, we ensure every investment compounds into measurable, lasting value.',
    author: 'Dr. Dina Alkhodary',
    title: 'Strategy Director',
    image: '/Images/Image4.png',
  },
  {
    quote:
      'Independence gives us clarity. Our commitment is to objective oversight — ensuring that every decision, every system, and every result is tested against the highest standards of integrity and value creation.',
    author: 'Dr. Eka Devidze',
    title: 'Independent Director',
    image: '/Images/Image5.png',
  },
  {
    quote:
      'Excellence begins with rigorous foundations. Through academic depth and disciplined engineering, we build intelligent systems that stand on proven science and perform under real-world pressure.',
    author: 'Assoc. Prof. Dr. Muliati Hj. Sedek',
    title: 'Board Member',
    image: '/Images/Image6.png',
  },
  {
    quote:
      'Innovation flourishes where curiosity meets discipline. By mentoring and empowering teams, we create cultures where intelligent ideas are not only imagined, but realized at scale.',
    author: 'Nino Devidze',
    title: 'Advisory Board Member',
    image: '/Images/Image8.jpeg',
  },
];

// Core Pillars
const pillars = [
  {
    roman: 'I',
    title: 'Artisanal Neural Engineering',
    desc: 'We refuse generic off-the-shelf wrappers. Every neural architecture, loss function, and inference pipeline is engineered and fine-tuned specifically for your proprietary business domain.',
    highlight: 'Bespoke Customization',
  },
  {
    roman: 'II',
    title: 'Zero-Drift Governance',
    desc: 'Enterprise AI must be reliable, auditable, and secure. We embed strict mathematical guardrails, automated data verification, and sovereign privacy standards into every layer.',
    highlight: 'Enterprise Security',
  },
  {
    roman: 'III',
    title: 'Continuous Harmonic Resonance',
    desc: 'Deploying a model is only the opening movement. We implement real-time latency monitoring, drift detection, and continuous parameter retuning to maintain peak model performance.',
    highlight: 'Full Lifecycle SLA',
  },
  {
    roman: 'IV',
    title: 'Compounding Enterprise Alpha',
    desc: 'We measure intelligence in tangible results: reduced inference overhead, automated decision workflows, and direct ROI that compounds over your organization’s lifecycle.',
    highlight: 'Measurable ROI',
  },
];

export default function AboutView() {
  const [revealed, setRevealed] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{ background: 'var(--espresso)', color: 'var(--cream-rosette)', minHeight: '100vh' }}>
      <Navbar />

      {/* =========================================================
          HERO SECTION: THE ATELIER OF MACHINE INTELLIGENCE
      ========================================================= */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          padding: '160px 24px 100px',
          background:
            'radial-gradient(ellipse 80% 50% at 50% 10%, rgba(201,168,124,0.12) 0%, rgba(61,40,23,0.35) 40%, var(--espresso) 100%)',
          overflow: 'hidden',
          textAlign: 'center',
          borderBottom: '1px solid rgba(201,168,124,0.12)',
        }}
      >
        {/* Subtle glowing orbs */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(201,168,124,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb / Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(201,168,124,0.08)',
              border: '1px solid rgba(201,168,124,0.25)',
              marginBottom: '28px',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(15px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--amber-spruce)',
                boxShadow: '0 0 8px var(--amber-spruce)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
              }}
            >
              ◈ Who We Are & Our Legacy ◈
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              fontWeight: 700,
              color: 'var(--cream-rosette)',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
              marginBottom: '24px',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
            }}
          >
            Master Craftsmen at the Frontier of Machine Intelligence
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
              color: 'var(--amber-spruce)',
              maxWidth: '780px',
              margin: '0 auto 36px',
              lineHeight: 1.6,
              opacity: revealed ? 0.95 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            Advancing Technology, Research Innovation, and Artisanal AI Excellence.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--cream-dim)',
              maxWidth: '720px',
              margin: '0 auto 48px',
              lineHeight: 1.8,
              opacity: revealed ? 0.75 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            Vorqentra Labs is a premier artificial intelligence, machine learning, and data systems consultancy.
            We reject mass-produced, brittle wrappers. Instead, we compose intelligent systems with the patience,
            rigor, and artisanal mastery of world-class lutherie.
          </p>

          {/* Stats strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              padding: '28px 24px',
              background: 'linear-gradient(135deg, rgba(15,10,5,0.9), rgba(30,18,10,0.75))',
              border: '1px solid rgba(201,168,124,0.18)',
              borderRadius: '4px',
              boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
            }}
          >
            {[
              { val: '40+', label: 'Enterprise Engagements', note: 'Global reach' },
              { val: '120+', label: 'Production Models', note: 'Zero critical drift' },
              { val: '99.1%', label: 'Uptime SLA', note: 'Enterprise hardened' },
              { val: '3.2×', label: 'Decision Velocity', note: 'Average acceleration' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '8px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.85rem',
                    fontWeight: 600,
                    color: 'var(--amber-spruce)',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.val}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    color: 'var(--cream-rosette)',
                    marginTop: '6px',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--cream-dim)',
                    opacity: 0.5,
                    letterSpacing: '0.08em',
                    marginTop: '2px',
                  }}
                >
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: OUR STORY & CRAFTSMANSHIP
      ========================================================= */}
      <section
        style={{
          padding: '120px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left: Narrative */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              The Founding Philosophy
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--cream-rosette)',
                lineHeight: 1.2,
                marginBottom: '28px',
              }}
            >
              Why We Treat Artificial Intelligence as Lutherie.
            </h2>

            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--cream-dim)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '20px' }}>
                Vorqentra Labs was founded with a singular conviction: as machine learning permeates every core
                decision in modern enterprise, the one-size-fits-all approach of generic APIs is proving dangerously
                inadequate. High-stakes industries do not need generic probabilistic guesses; they demand calibrated,
                verifiable, and custom-tuned intelligence.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Much like a master luthier carving tonewood for a Stradivarius or Martin D-28 — testing every frequency,
                minimizing destructive interference, and optimizing harmonic richness — we engineer artificial neural
                networks that resonate harmoniously with your proprietary data landscape.
              </p>
              <p>
                Our laboratory combines the agility of a modern research boutique with the battle-tested engineering
                maturity required by global enterprises. Backed by distinguished research leaders, our solutions deliver
                unyielding uptime, mathematical explainability, and compounding strategic advantage.
              </p>
            </div>
          </div>

          {/* Right: Verified Entity & Emblem Showcase Card */}
          <div
            className="ebony-card"
            style={{
              padding: '48px 36px',
              borderRadius: '6px',
              border: '1px solid rgba(201,168,124,0.25)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(201,168,124,0.15)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient Gold Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(201,168,124,0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Emblem with animated concentric border */}
            <div
              style={{
                width: '130px',
                height: '130px',
                margin: '0 auto 28px',
                borderRadius: '50%',
                padding: '3px',
                background: 'linear-gradient(135deg, #C9A87C 0%, #3D2817 50%, #C9A87C 100%)',
                boxShadow: '0 0 35px rgba(201,168,124,0.3), 0 12px 32px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src="/logo-symbol.jpg"
                alt="Vorqentra Labs Emblem"
                width={124}
                height={124}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-brand)',
                fontSize: '1.4rem',
                letterSpacing: '0.08em',
                color: 'var(--cream-rosette)',
                marginBottom: '6px',
              }}
            >
              Vorqentra <span style={{ fontStyle: 'italic', color: 'var(--amber-spruce)' }}>Labs</span>
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Certified Enterprise AI Lab • Atelier Tier
            </p>

            <div
              style={{
                background: 'rgba(201,168,124,0.04)',
                border: '1px solid rgba(201,168,124,0.12)',
                borderRadius: '4px',
                padding: '16px',
                textAlign: 'left',
                fontSize: '0.78rem',
                color: 'var(--cream-dim)',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.7,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,168,124,0.08)', paddingBottom: '6px', marginBottom: '6px' }}>
                <span style={{ opacity: 0.6 }}>Registry Status:</span>
                <span style={{ color: 'var(--amber-spruce)', fontWeight: 600 }}>Active • Verified Entity</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,168,124,0.08)', paddingBottom: '6px', marginBottom: '6px' }}>
                <span style={{ opacity: 0.6 }}>Primary Practice:</span>
                <span>AI / ML / Data Science</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,168,124,0.08)', paddingBottom: '6px', marginBottom: '6px' }}>
                <span style={{ opacity: 0.6 }}>Deployment Model:</span>
                <span>Sovereign & Cloud Native</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ opacity: 0.6 }}>Engineering Standard:</span>
                <span style={{ color: '#7fd88a' }}>Artisanal Precision (Zero Drift)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: MISSION & VISION (DUAL RESONANCE)
      ========================================================= */}
      <section
        style={{
          padding: '100px 24px',
          background: 'linear-gradient(180deg, #0A0603 0%, #0F0A05 50%, #0A0603 100%)',
          borderTop: '1px solid rgba(201,168,124,0.1)',
          borderBottom: '1px solid rgba(201,168,124,0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              The Dual Resonance
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 700,
                color: 'var(--cream-rosette)',
              }}
            >
              Our Vision & Mission
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Vision Card */}
            <div
              className="wood-panel"
              style={{
                padding: '48px 40px',
                borderRadius: '4px',
                border: '1px solid rgba(201,168,124,0.2)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  background: 'rgba(201,168,124,0.12)',
                  border: '1px solid rgba(201,168,124,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--amber-spruce)',
                  marginBottom: '24px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="3" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="21" y2="12" />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--cream-rosette)',
                  marginBottom: '16px',
                }}
              >
                Our Vision
              </h3>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.02rem', color: 'var(--cream-dim)', lineHeight: 1.8 }}>
                To pioneer an era where intelligent systems are architected with intentionality, ethical transparency,
                and bespoke elegance — elevating artificial intelligence from a commodities black box into an artisanal
                engineering discipline that empowers global leadership and human ingenuity.
              </p>
            </div>

            {/* Mission Card */}
            <div
              className="wood-panel"
              style={{
                padding: '48px 40px',
                borderRadius: '4px',
                border: '1px solid rgba(155,181,212,0.25)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  background: 'rgba(155,181,212,0.12)',
                  border: '1px solid rgba(155,181,212,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--navy-primary)',
                  marginBottom: '24px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--cream-rosette)',
                  marginBottom: '16px',
                }}
              >
                Our Mission
              </h3>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.02rem', color: 'var(--cream-dim)', lineHeight: 1.8 }}>
                To deliver enterprise-grade AI architectures, predictive machine learning pipelines, and orchestrate
                complex data landscapes — built on rigorous scientific standards, bespoke domain tuning, and an
                uncompromising dedication to engineering systems that are hardened, observable, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: THE FOUR PILLARS (THE QUARTET PRINCIPLES)
      ========================================================= */}
      <section style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: 'var(--amber-spruce)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Our Engineering Creed
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 700,
              color: 'var(--cream-rosette)',
            }}
          >
            The Four Pillars of Vorqentra
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className="ebony-card"
              style={{
                padding: '36px 28px',
                borderRadius: '4px',
                border: '1px solid rgba(201,168,124,0.14)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(201,168,124,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(201,168,124,0.14)';
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--amber-spruce)',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    marginBottom: '16px',
                  }}
                >
                  {p.roman} • {p.highlight}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--cream-rosette)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--cream-dim)',
                    lineHeight: 1.7,
                    opacity: 0.85,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 5: LEADERSHIP & SCIENTIFIC ADVISORY (THE ENSEMBLE)
      ========================================================= */}
      <section
        style={{
          padding: '120px 24px',
          background: 'linear-gradient(180deg, #070402 0%, #120806 40%, #070402 100%)',
          borderTop: '1px solid rgba(201,168,124,0.1)',
          borderBottom: '1px solid rgba(201,168,124,0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Executive & Scientific Leadership
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                fontWeight: 700,
                color: 'var(--cream-rosette)',
                marginBottom: '16px',
              }}
            >
              The Virtuosos Driving Vorqentra
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--cream-dim)',
                maxWidth: '680px',
                margin: '0 auto',
                opacity: 0.8,
              }}
            >
              The visionaries, research scientists, and architectural directors shaping the next era of enterprise AI.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '42px 40px',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="wood-panel"
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,124,0.45)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,124,0.16)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Leader Photo */}
                <div
                  style={{
                    width: '100%',
                    height: '320px',
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      'linear-gradient(180deg, #24160c 0%, #0d0804 100%)',
                  }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: leader.facePos || 'center 20%',
                      display: 'block',
                      transition: 'transform 0.55s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.045)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, transparent 45%, rgba(7,4,2,0.96) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(10, 6, 3, 0.78)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(201,168,124,0.45)',
                      color: 'var(--amber-spruce)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.08em',
                      zIndex: 2,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Name + Post */}
                <div
                  style={{
                    padding: '26px 30px 28px',
                    textAlign: 'center',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--cream-rosette)',
                      lineHeight: 1.3,
                      margin: '0 0 6px',
                    }}
                  >
                    {leader.name}
                  </h4>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--amber-spruce)',
                      letterSpacing: '0.08em',
                      lineHeight: 1.4,
                    }}
                  >
                    {leader.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: LEADERSHIP PERSPECTIVES (VOICES OF INNOVATION)
      ========================================================= */}
      <section style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: 'var(--amber-spruce)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Leadership Perspectives
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: 700,
              color: 'var(--cream-rosette)',
              marginBottom: '16px',
            }}
          >
            Voices of Innovation
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--cream-dim)',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Reflections on algorithmic integrity, data mastery, and the future of machine intelligence.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {perspectives.map((item, i) => (
            <div
              key={i}
              className="ebony-card"
              style={{
                padding: '40px 32px',
                borderRadius: '6px',
                border: '1px solid rgba(201,168,124,0.18)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {/* Luxury gold quotation glyph */}
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '3.5rem',
                  lineHeight: 0.8,
                  color: 'rgba(201,168,124,0.25)',
                  marginBottom: '16px',
                  userSelect: 'none',
                }}
              >
                “
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.08rem',
                  color: 'var(--cream-rosette)',
                  lineHeight: 1.75,
                  marginBottom: '32px',
                }}
              >
                {item.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(201,168,124,0.1)',
                    border: '1px solid var(--amber-spruce)',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.author}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 25%',
                      display: 'block',
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--cream-rosette)',
                    }}
                  >
                    {item.author}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--amber-spruce)',
                      letterSpacing: '0.05em',
                      marginTop: '2px',
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 7: HOW WE DIFFER (ATELIER VS FACTORY)
      ========================================================= */}
      <section
        style={{
          padding: '100px 24px',
          background: 'linear-gradient(180deg, #0A0603 0%, #150C07 50%, #0A0603 100%)',
          borderTop: '1px solid rgba(201,168,124,0.1)',
          borderBottom: '1px solid rgba(201,168,124,0.1)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              The Vorqentra Advantage
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--cream-rosette)',
              }}
            >
              The Atelier vs. The Generic Consultancy
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Vorqentra Labs Card */}
            <div
              style={{
                padding: '40px 32px',
                borderRadius: '4px',
                background: 'linear-gradient(135deg, rgba(30,18,10,0.9), rgba(15,10,5,0.95))',
                border: '1.5px solid var(--amber-spruce)',
                boxShadow: '0 12px 40px rgba(201,168,124,0.12)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--amber-spruce)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontWeight: 600,
                }}
              >
                ◈ The Vorqentra Standard
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Bespoke, domain-tuned neural architectures calibrated to your data.',
                  'Strict zero-drift mathematical bounds and verifiable accuracy guarantees.',
                  'Hardened production-ready code with complete IP ownership and sovereign deployment.',
                  'Direct collaboration with principal AI architects and scientific directors.',
                  'Optimized inference efficiency eliminating runaway cloud API costs.',
                ].map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: 'var(--cream-rosette)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--amber-spruce)', fontWeight: 700 }}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional Consultancies Card */}
            <div
              style={{
                padding: '40px 32px',
                borderRadius: '4px',
                background: 'rgba(10,6,3,0.6)',
                border: '1px solid rgba(232,212,184,0.08)',
                opacity: 0.65,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--cream-dim)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                Traditional Consultancies
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Generic wrappers around public APIs with zero underlying customization.',
                  'Vague probabilistic outputs with no auditability or explainability.',
                  'Endless slide decks and proof-of-concepts that never survive production.',
                  'Junior contractors with high turnover and no deep research pedigree.',
                  'Astronomical monthly token charges and vendor lock-in.',
                ].map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: 'var(--cream-dim)', lineHeight: 1.6 }}>
                    <span style={{ opacity: 0.4 }}>✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 8: CALL TO ACTION
      ========================================================= */}
      <section
        style={{
          padding: '140px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,124,0.1) 0%, var(--espresso) 75%)',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: 'var(--amber-spruce)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            ◈ Compose With Us ◈
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 700,
              color: 'var(--cream-rosette)',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            Ready to Compose Your Next Movement?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: 'var(--cream-dim)',
              marginBottom: '48px',
              lineHeight: 1.6,
            }}
          >
            Whether architecting custom foundation models or transforming massive enterprise data streams,
            our master craftsmen are ready.
          </p>

<Link href="/#contact" className="btn-brass" style={{ fontSize: '1rem', padding: '16px 40px' }}>
    Book an Architectural Session
  </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
