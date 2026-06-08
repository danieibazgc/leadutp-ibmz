import { useState } from 'react';
import { FOOTER_LINKS, IMAGES, PRIVACY_POLICY, TERMS_OF_SERVICE } from '../data/content';
import Modal from './Modal';

/**
 * Footer — Site footer with brand logos, copyright, and navigation links.
 * Incorporates modal popups for Privacy Policy and Terms of Service.
 */
export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleLinkClick = (e, link) => {
    if (link.id) {
      e.preventDefault();
      if (link.id === 'privacy') {
        setModalContent(PRIVACY_POLICY);
      } else if (link.id === 'terms') {
        setModalContent(TERMS_OF_SERVICE);
      }
      setModalOpen(true);
    }
  };

  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest text-on-surface-variant">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-margin-desktop max-w-[1280px] mx-auto gap-4">
        {/* Brand / Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-6 opacity-70 mb-2">
            <img
              alt="IBM Z Skills Logo"
              className="h-6 w-auto grayscale"
              src={IMAGES.ibmZLogo}
            />
            <img
              alt="LEAD UTP Logo"
              className="h-5 w-auto grayscale"
              src={IMAGES.leadUtpLogo}
            />
          </div>
          <p className="font-mono text-label-caps tracking-[0.05em] text-on-surface-variant text-center md:text-left">
            © 2026 IBM Z Career Connection | Powered by LEAD UTP &amp; IBM Z Skills Team
            <br />
            <span className="text-outline">Peruvians in STEM Ally</span>
          </p>
        </div>

        {/* Footer Links */}
        <nav aria-label="Enlaces del pie de página">
          <ul className="flex flex-wrap justify-center gap-6 mt-6 md:mt-0 list-none">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                {link.id ? (
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 text-left font-body text-[16px]"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    className="text-on-surface-variant hover:text-on-surface transition-colors duration-200"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Popup Modal for Legal Agreements */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
      />
    </footer>
  );
}
