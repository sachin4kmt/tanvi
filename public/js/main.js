import { initScrollReveal } from './animations/scroll-reveal.js';
import { initHeroAnimation } from './animations/hero-entry.js';
import { initAOS } from './animations/aos-init.js';
import { initSharePortfolio } from './components/share.js';
import './components/phone-slider.js';
import './components/description-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    initScrollReveal();
    initAOS();
    initSharePortfolio();
});
