/**
 * GSAP ScrollTrigger reveal animations
 */
export function initScrollReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true,
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof gsap === 'undefined') {
        document.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('active');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    gsap.utils.toArray('.reveal').forEach((elem, index) => {
        if (elem.closest('.hero')) return;

        gsap.fromTo(
            elem,
            { opacity: 0, y: 28 },
            {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: 'power3.out',
                delay: index % 4 === 0 ? 0 : 0.05 * (index % 4),
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
                onComplete: () => elem.classList.add('active'),
            }
        );
    });
}
