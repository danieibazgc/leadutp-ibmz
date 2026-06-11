import { BENEFITS, IMAGES } from '../data/content';
import BenefitCard from './BenefitCard';
import FadeInUp from './FadeInUp';

/**
 * BenefitsSection — "¿Por qué asistir?" section with 4 benefit cards in responsive grid.
 */
export default function BenefitsSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-surface-container border-b border-outline-variant relative"
      aria-labelledby="benefits-title"
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
        {/* Section Header */}
        <FadeInUp className="mb-10 sm:mb-16">
          <h2 id="benefits-title" className="font-body text-2xl sm:text-headline-md font-bold mb-4">
            ¿Por qué asistir?
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            Aprovecha esta oportunidad única para potenciar tu perfil profesional con conocimientos de alto valor en la industria tecnológica.
          </p>
        </FadeInUp>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <FadeInUp key={benefit.title} delay={index * 100}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
