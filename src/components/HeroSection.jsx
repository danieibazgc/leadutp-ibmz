import { EVENT_DETAILS, IMAGES } from '../data/content';
import FadeInUp from './FadeInUp';

/**
 * HeroSection — Main hero banner with event details, date/location, and 3D character.
 */
export default function HeroSection() {
  return (
    <section
      className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 bg-ibm-blue-dark bg-dots overflow-hidden border-b border-outline-variant"
      id="event"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left: Content */}
        <FadeInUp className="space-y-8">
          {/* Badge */}
          <div className="inline-block bg-primary-container/20 border border-primary text-primary px-3 py-1 font-mono text-label-caps tracking-[0.05em] uppercase">
            {EVENT_DETAILS.badge}
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className="font-body text-display-lg-mobile md:text-display-lg text-white font-bold leading-tight"
          >
            {EVENT_DETAILS.title}
          </h1>

          {/* Description */}
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
            {EVENT_DETAILS.description}
          </p>

          {/* Date & Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-outline-variant/50">
            {/* Date */}
            <div className="flex items-start gap-3">
              <span
                className="material-symbols-outlined text-ibm-blue-medium mt-0.5"
                aria-hidden="true"
              >
                calendar_today
              </span>
              <div>
                <p className="font-mono text-label-mono text-on-surface-variant">
                  {EVENT_DETAILS.date.label}
                </p>
                <p className="font-body text-body-md text-white">
                  {EVENT_DETAILS.date.line1}
                </p>
                <p className="font-body text-body-md text-white">
                  {EVENT_DETAILS.date.line2}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <span
                className="material-symbols-outlined text-ibm-blue-medium mt-0.5"
                aria-hidden="true"
              >
                location_on
              </span>
              <div>
                <p className="font-mono text-label-mono text-on-surface-variant">
                  {EVENT_DETAILS.location.label}
                </p>
                <p className="font-body text-body-md text-white">
                  {EVENT_DETAILS.location.line1}
                </p>
                <p className="font-body text-body-md text-white">
                  {EVENT_DETAILS.location.line2}
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Right: 3D Character */}
        <FadeInUp
          className="flex justify-center lg:justify-end relative"
          delay={200}
        >
          <div className="relative w-64 md:w-80 animate-float">
            {/* Accent glow behind Bob */}
            <div
              className="absolute -inset-4 bg-primary-container/20 blur-2xl z-0 rounded-full"
              aria-hidden="true"
            />
            <img
              alt="IBM Bob 3D Character — mascota del evento IBM Z Career Connection"
              className="relative z-10 w-full h-auto drop-shadow-2xl"
              src={IMAGES.ibmBob}
              width={320}
              height={320}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
