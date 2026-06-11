import { useEffect, useRef } from 'react';

/**
 * Modal — A highly customized, premium dark-themed dialog component.
 * Features IBM Carbon-inspired industrial style: sharp corners, high-contrast borders,
 * monospace details, and smooth glassmorphism backdrop.
 *
 * @param {boolean} isOpen - Whether the modal is visible.
 * @param {function} onClose - Callback function to close the modal.
 * @param {string} title - The dialog title.
 * @param {object} content - Object containing introduction, sections, and footer.
 */
export default function Modal({ isOpen, onClose, title, content }) {
  const closeButtonRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
      window.addEventListener('keydown', handleKeyDown);
      // Focus the close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  // Handle click on the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-backdrop-fade"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-[640px] bg-surface-container border border-outline-variant shadow-2xl flex flex-col max-h-[90vh] sm:max-h-[85vh] animate-modal-enter"
        style={{
          boxShadow: '0 0 30px rgba(15, 98, 254, 0.15)', // Subtle IBM blue glow
        }}
      >
        {/* Accent Top Border */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-primary-container" />

        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-outline-variant bg-surface-container-high/50">
          <h2
            id="modal-title"
            className="font-mono text-body-lg md:text-headline-sm font-bold uppercase tracking-wider text-primary"
          >
            {title || content.title}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary text-on-surface-variant hover:text-primary transition-all duration-200 cursor-pointer bg-transparent"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-[20px] font-bold" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 scrollbar-thin scrollbar-thumb-outline-variant space-y-6">
          {content.introduction && (
            <p className="text-on-surface text-body-md leading-relaxed border-l-2 border-primary/50 pl-4 italic">
              {content.introduction}
            </p>
          )}

          {content.sections && content.sections.length > 0 && (
            <div className="space-y-6">
              {content.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="border-b border-outline-variant/30 pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="font-mono text-label-mono font-bold text-tertiary mb-2 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <p className="text-on-surface-variant text-body-md leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-t border-outline-variant bg-surface-container-high/30">
          <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
            {content.footer || '© 2026 IBM Z Career Connection'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto bg-primary-container text-on-primary-container hover:bg-ibm-blue-medium transition-colors duration-200 px-6 py-2 font-mono text-label-mono tracking-wide uppercase cursor-pointer text-center"
          >
            Aceptar y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
