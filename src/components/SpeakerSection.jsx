import { SPEAKER, IMAGES } from '../data/content';
import FadeInUp from './FadeInUp';

/**
 * SpeakerSection — Featured speaker with photo, bio, badge, and LinkedIn link.
 */
export default function SpeakerSection() {
  return (
    <section
      className="py-24 bg-surface-container border-b border-outline-variant relative"
      id="speakers"
      aria-labelledby="speaker-title"
    >
      {/* Background texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img
          src={IMAGES.bgTexture}
          alt=""
          className="w-full h-full object-cover opacity-10 grayscale mix-blend-luminosity"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Speaker Photo */}
          <FadeInUp className="lg:col-span-4">
            <div className="relative aspect-square border-l-4 border-ibm-blue-medium bg-surface-variant overflow-hidden">
              <img
                alt={`${SPEAKER.name}, ${SPEAKER.role} en IBM — Ponente del evento IBM Z Career Connection UTP`}
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                src={SPEAKER.photo}
                width={400}
                height={400}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 bg-surface-container-high/90 backdrop-blur-sm border-t border-r border-outline-variant p-4 w-full">
                <h3 className="font-body text-headline-sm font-bold text-white">
                  {SPEAKER.name}
                </h3>
                <p className="font-mono text-label-mono tracking-[0.02em] text-ibm-blue-medium">
                  {SPEAKER.role}
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Speaker Bio */}
          <FadeInUp className="lg:col-span-8 space-y-6" delay={200}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-lead-crimson/10 border border-lead-crimson text-secondary-fixed-dim px-3 py-1 font-mono text-label-caps tracking-[0.05em] uppercase">
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden="true"
              >
                flight
              </span>
              {SPEAKER.badge}
            </div>

            {/* Section Title */}
            <h2
              id="speaker-title"
              className="font-body text-display-lg-mobile md:text-display-lg font-bold"
            >
              {SPEAKER.sectionTitle}
            </h2>

            {/* Bio Paragraphs */}
            <div className="max-w-none text-on-surface-variant font-body text-body-lg space-y-4">
              {SPEAKER.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* LinkedIn Link */}
            <div className="pt-6 border-t border-outline-variant flex gap-4">
              <a
                className="text-ibm-blue-medium hover:text-white transition-colors duration-200 flex items-center gap-2 font-mono text-label-mono tracking-[0.02em]"
                href={SPEAKER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Perfil de LinkedIn de ${SPEAKER.name}`}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  link
                </span>
                LinkedIn Profile
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
