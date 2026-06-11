import { useState } from 'react';
import { NAV_LINKS, IMAGES } from '../data/content';

/**
 * Navbar — Fixed top navigation with brand logos, links, CTA, and mobile menu.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-outline-variant bg-surface/95 backdrop-blur-sm"
      aria-label="Navegación principal"
    >
      <div className="flex justify-between items-center px-4 md:px-margin-desktop h-16 max-w-[1280px] mx-auto">
        {/* Brand / Logos */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            alt="IBM Z Skills — Logo oficial"
            className="h-6 sm:h-8 w-auto"
            src={IMAGES.ibmZLogo}
            width={120}
            height={32}
            loading="eager"
          />
          <span className="h-6 w-px bg-outline-variant" aria-hidden="true" />
          <img
            alt="LEAD UTP — Organización estudiantil de la Universidad Tecnológica del Perú"
            className="h-5 sm:h-6 w-auto opacity-90"
            src={IMAGES.leadUtpLogo}
            width={96}
            height={24}
            loading="lazy"
          />
          <span className="font-mono text-[9px] min-[380px]:text-[10px] sm:text-label-mono lg:text-headline-sm font-bold text-primary ml-1 sm:ml-2 hidden min-[360px]:block">
            IBM Z | LEAD UTP
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 font-mono text-label-mono">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <a
                className={`transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ibm-blue-medium ${
                  index === 0
                    ? 'text-primary border-b-2 border-primary pb-1 hover:text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <a
            className="bg-primary-container text-on-primary-container hover:bg-ibm-blue-medium transition-colors duration-200 px-3 sm:px-4 md:px-6 py-2 font-mono text-[11px] sm:text-label-mono tracking-wide uppercase"
            href="#register"
          >
            Register Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav-menu"
        className={`lg:hidden border-t border-outline-variant bg-surface/98 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="navigation"
        aria-label="Navegación móvil"
      >
        <ul className="px-4 py-4 space-y-4 font-mono text-label-mono">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="block text-on-surface-variant hover:text-primary transition-colors duration-200 py-2"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
