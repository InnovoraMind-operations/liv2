'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/about', label: 'About Us', active: pathname === '/about' },
    { href: isHome ? '#services' : '/#services', label: 'Services' },
    { href: isHome ? '#credibility' : '/#credibility', label: 'Our Work' },
    { href: isHome ? '#process' : '/#process', label: 'Process' },
    { href: isHome ? '#contact' : '/#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease',
          background: scrolled ? 'rgba(10, 6, 3, 0.98)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(201,168,124,0.12)' : '1px solid transparent',
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-brand)',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--amber-spruce)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <img
            src="/logo-symbol.jpg"
            alt="Vorqentra Labs"
            width={34}
            height={34}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1.5px solid rgba(201, 168, 124, 0.5)',
              boxShadow: '0 0 12px rgba(201, 168, 124, 0.25)',
              display: 'block',
            }}
          />
          <span>
            Vorqentra <span style={{ fontStyle: 'italic' }}>Labs</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-desktop">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                color: link.active ? 'var(--amber-spruce)' : undefined,
                borderBottom: link.active ? '1px solid var(--amber-spruce)' : undefined,
                paddingBottom: link.active ? '2px' : undefined,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <a
          href={isHome ? '#contact' : '/#contact'}
          className="btn-brass nav-desktop"
          style={{ padding: '10px 24px', fontSize: '0.85rem' }}
        >
          Book a Session
        </a>

        {/* Hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: '24px', height: '1.5px',
                background: 'var(--amber-spruce)',
                display: 'block',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '65px', left: 0, right: 0,
            zIndex: 999,
            background: 'rgba(15, 10, 5, 0.97)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(212,165,116,0.15)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          className="nav-mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="btn-brass"
            style={{ textAlign: 'center', marginTop: '8px' }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Session
          </a>
        </div>
      )}

    </>
  );
}
