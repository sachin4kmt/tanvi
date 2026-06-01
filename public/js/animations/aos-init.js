/**
 * AOS (Animate On Scroll) initialization
 */
export function initAOS() {
    if (typeof AOS === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
        anchorPlacement: 'top-bottom',
        offset: 120,
        disable: prefersReducedMotion,
    });
}
