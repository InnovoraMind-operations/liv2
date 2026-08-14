'use client';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--dark-walnut)',
        borderTop: '1px solid rgba(201,168,124,0.08)',
        padding: '60px 24px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
      role="contentinfo"
    >
      {/* Subtle fretboard pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,124,0.3) 20%, var(--amber-spruce) 50%, rgba(201,168,124,0.3) 80%, transparent 100%)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '48px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-brand)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--amber-spruce)',
                letterSpacing: '0.06em',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="var(--amber-spruce)" strokeWidth="1.5" fill="none" />
                <circle cx="11" cy="11" r="4" fill="var(--amber-spruce)" opacity="0.35" />
                <circle cx="11" cy="11" r="2" fill="var(--amber-spruce)" />
              </svg>
              Vorqentra <span style={{ fontStyle: 'italic' }}>Labs</span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--cream-dim)',
                marginBottom: '20px',
                opacity: 0.7,
              }}
            >
              We compose intelligence.....
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--cream-dim)',
                lineHeight: 1.7,
                opacity: 0.5,
                maxWidth: '320px',
              }}
            >
              A premium AI consultancy at the intersection of artisanal craftsmanship and algorithmic precision.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
                marginBottom: '20px',
                opacity: 0.7,
              }}
            >
              Movements
            </h4>
            <nav aria-label="Footer services">
              {[
                { label: 'The Composer — AI', href: '#services' },
                { label: 'The Producer — ML', href: '#services' },
                { label: 'The Conductor — Data', href: '#services' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--cream-dim)',
                    textDecoration: 'none',
                    marginBottom: '12px',
                    opacity: 0.6,
                    transition: 'opacity 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.opacity = '1';
                    el.style.color = 'var(--cream-rosette)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.opacity = '0.6';
                    el.style.color = 'var(--cream-dim)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Studio */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                color: 'var(--amber-spruce)',
                textTransform: 'uppercase',
                marginBottom: '20px',
                opacity: 0.7,
              }}
            >
              Studio
            </h4>
            <nav aria-label="Footer studio links">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Work', href: '#credibility' },
                { label: 'Process', href: '#process' },
                { label: 'Book a Session', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--cream-dim)',
                    textDecoration: 'none',
                    marginBottom: '12px',
                    opacity: 0.6,
                    transition: 'opacity 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.opacity = '1';
                    el.style.color = 'var(--cream-rosette)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.opacity = '0.6';
                    el.style.color = 'var(--cream-dim)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(212,165,116,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              color: 'var(--cream-dim)',
              opacity: 0.35,
            }}
          >
            © {currentYear} Vorqentra Labs. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy', 'Terms', 'Ethics Policy'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--cream-dim)',
                  opacity: 0.3,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.3'; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
