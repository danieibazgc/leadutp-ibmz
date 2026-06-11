import FadeInUp from './FadeInUp';

/**
 * RegistrationSection — Event registration form with Luma-style header.
 */
export default function RegistrationSection() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-ibm-blue-dark relative overflow-hidden"
      id="register"
      aria-labelledby="register-title"
    >
      {/* Abstract gradient background */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-ibm-blue-dark via-[#00174c] to-lead-navy z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-container/10 blur-[100px] z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 md:px-margin-desktop relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-8 sm:mb-12">
          <h2
            id="register-title"
            className="font-body text-display-lg-mobile md:text-display-lg font-bold text-white mb-4"
          >
            Asegura tu vacante
          </h2>
          <p className="font-body text-body-lg text-primary-fixed-dim">
            Los cupos son limitados y exclusivos para la comunidad UTP.
          </p>
        </FadeInUp>

        {/* Luma Registration iframe — 2:3 mobile / 4:3 desktop (max 90vh) */}
        <FadeInUp delay={200}>
          <div
            className="relative overflow-hidden shadow-2xl mx-auto w-full aspect-[2/3] md:aspect-[4/3] md:max-w-[calc(90vh*4/3)]"
            aria-label="Formulario de registro al evento en Luma"
          >
            <iframe
              src="https://luma.com/embed/event/evt-7TcqVnYmGdTDmID/simple"
              title="Registro al evento — IBM Z Career Connection"
              frameBorder="0"
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex={0}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '1px solid rgba(191,203,218,0.533)',
                borderRadius: '4px',
              }}
            />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
