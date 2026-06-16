/**
 * AgendaItem — Single timeline entry with time, title, and description.
 * Renders as a Fragment — the <li> wrapper is provided by FadeInUp in AgendaSection
 * to keep the DOM tree valid: <ol> → <li> (FadeInUp) → content (Fragment).
 *
 * Fix D13: removed the redundant <li> wrapper that caused invalid <div><li> nesting.
 *
 * @param {Object} props
 * @param {string} props.time - Time string (e.g., "4:00 PM")
 * @param {string} props.title - Agenda item title
 * @param {string} props.description - Agenda item description
 */
export default function AgendaItem({ time, title, description }) {
  return (
    <>
      {/* Timeline dot */}
      <div
        className="absolute left-[-5px] md:left-auto md:top-[-41px] w-2.5 h-2.5 bg-ibm-blue-medium border border-surface"
        aria-hidden="true"
      />

      {/* Time */}
      <div className="font-mono text-label-mono tracking-[0.02em] text-ibm-blue-medium mb-2">
        {time}
      </div>

      {/* Title */}
      <h4 className="font-body text-lg sm:text-headline-sm font-bold mb-2">{title}</h4>

      {/* Description */}
      <p className="text-on-surface-variant text-sm">{description}</p>
    </>
  );
}
