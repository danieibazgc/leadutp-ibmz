import { useEffect, useRef } from 'react';

/**
 * FadeInUp — Intersection Observer wrapper for scroll-triggered animations.
 * Adds `is-visible` class when element enters viewport.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0] - Transition delay in ms
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.as='div'] - HTML element to render
 */
export default function FadeInUp({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`fade-in-up ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
