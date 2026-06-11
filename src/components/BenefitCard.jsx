/**
 * BenefitCard — Individual benefit card with icon, title, and description.
 *
 * @param {Object} props
 * @param {string} props.icon - Material Symbols icon name
 * @param {string} props.title - Card heading
 * @param {string} props.description - Card body text
 */
export default function BenefitCard({ icon, title, description }) {
  return (
    <article className="bg-gray-cool border border-outline-variant p-4 sm:p-6 hover:border-ibm-blue-medium transition-colors duration-200">
      {/* Icon */}
      <div
        className="h-12 w-12 bg-primary-container/10 flex items-center justify-center mb-4 sm:mb-6"
        aria-hidden="true"
      >
        <span
          className="material-symbols-outlined text-ibm-blue-medium"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>

      {/* Heading */}
      <h3 className="font-body text-lg sm:text-headline-sm mb-2">{title}</h3>

      {/* Description */}
      <p className="text-on-surface-variant text-sm">{description}</p>
    </article>
  );
}
