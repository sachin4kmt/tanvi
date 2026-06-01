/**
 * Hero section entry animation
 */
function showHeroReveals() {
    document.querySelectorAll('.hero .reveal').forEach((el) => {
        el.classList.add('active');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}

export function initHeroAnimation() {
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    const targets = heroContent ? heroContent.querySelectorAll('.reveal') : [];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof gsap === 'undefined') {
        showHeroReveals();
        return;
    }

    gsap.from(targets, {
        duration: 1.1,
        y: 36,
        opacity: 0,
        stagger: 0.12,
        ease: 'expo.out',
        onComplete: () => {
            targets.forEach((el) => el.classList.add('active'));
        },
    });

    if (heroVisual) {
        gsap.from(heroVisual, {
            duration: 1.2,
            x: 40,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.3,
            onComplete: () => heroVisual.classList.add('active'),
        });
    }
}
