import { AGENDA_ITEMS } from '../data/content';
import AgendaItem from './AgendaItem';
import FadeInUp from './FadeInUp';

/**
 * AgendaSection — Event agenda timeline, vertical on mobile and horizontal on desktop.
 */
export default function AgendaSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-surface border-b border-outline-variant relative"
      id="agenda"
      aria-labelledby="agenda-title"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-crosshatch opacity-20 z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop relative z-10">
        {/* Section Header */}
        <FadeInUp className="mb-10 sm:mb-16">
          <h2 id="agenda-title" className="font-body text-2xl sm:text-headline-md font-bold mb-4">
            Agenda del Evento
          </h2>
          <div className="h-1 w-16 bg-ibm-blue-medium" aria-hidden="true" />
        </FadeInUp>

        {/* Timeline Container */}
        <div className="relative border-l border-outline-variant ml-4 md:ml-0 md:border-l-0 md:border-t pt-8 md:pt-0">
          <ol className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between md:pt-8 list-none">
            {AGENDA_ITEMS.map((item, index) => (
              <FadeInUp key={item.time} delay={index * 100} as="div" className="md:flex-1">
                <AgendaItem
                  time={item.time}
                  title={item.title}
                  description={item.description}
                />
              </FadeInUp>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
