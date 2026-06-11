import { TARGET_AUDIENCE, REQUIREMENTS } from '../data/content';
import FadeInUp from './FadeInUp';

/**
 * RequirementsSection — Target audience and mandatory requirements for the event.
 */
export default function RequirementsSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-surface border-b border-outline-variant"
      id="requirements"
      aria-labelledby="audience-title requirements-title"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
          {/* Target Audience */}
          <FadeInUp>
            <h2
              id="audience-title"
              className="font-body text-2xl sm:text-headline-md font-bold mb-6 sm:mb-8 flex items-center gap-3"
            >
              <span
                className="material-symbols-outlined text-ibm-blue-medium"
                aria-hidden="true"
              >
                target
              </span>
              Público Objetivo
            </h2>

            <ul className="space-y-4 list-none">
              {TARGET_AUDIENCE.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 pb-4 border-b border-outline-variant"
                >
                  <span
                    className="material-symbols-outlined text-ibm-blue-medium mt-0.5"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-body text-lg sm:text-headline-sm text-white">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Mandatory Requirements */}
          <FadeInUp delay={200}>
            <div className="bg-gray-cool border border-outline-variant border-l-4 border-l-lead-crimson p-5 sm:p-8 h-full">
              <h2
                id="requirements-title"
                className="font-body text-2xl sm:text-headline-md font-bold mb-4 sm:mb-6 text-white flex items-center gap-3"
              >
                <span
                  className="material-symbols-outlined text-lead-crimson"
                  aria-hidden="true"
                >
                  gavel
                </span>
                Requisitos Obligatorios
              </h2>

              <div className="space-y-6">
                {REQUIREMENTS.map((req) => (
                  <div
                    key={req.label}
                    className="bg-surface-variant/50 p-4 border border-outline-variant/50"
                  >
                    <p className="font-mono text-label-mono tracking-[0.02em] text-secondary-fixed-dim mb-1">
                      {req.label}
                    </p>
                    <p className="text-white">{req.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
