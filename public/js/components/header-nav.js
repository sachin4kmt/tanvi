const NAV_LINK_SELECTOR = '.site-header__nav a';
const SECTION_CANDIDATES = ['projects', 'technical-stack', 'highlights', 'experience', 'education', 'contact'];

function getVisibleSectionIds() {
    return SECTION_CANDIDATES.filter((id) => document.getElementById(id));
}

export function initHeaderNav() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    const backToTop = document.getElementById('back-to-top');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            toggle.classList.toggle('is-active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
            document.body.classList.toggle('nav-open', isOpen);
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
                toggle.classList.remove('is-active');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
                document.body.classList.remove('nav-open');
            });
        });
    }

    document.querySelectorAll(NAV_LINK_SELECTOR).forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', href);
        });
    });

    const updateActiveNav = () => {
        const scrollY = window.scrollY + 120;
        const sectionIds = getVisibleSectionIds();
        let currentId = '';

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section && section.offsetTop <= scrollY) {
                currentId = id;
            }
        });

        document.querySelectorAll(NAV_LINK_SELECTOR).forEach((link) => {
            const href = link.getAttribute('href');
            link.classList.toggle('is-active', href === `#${currentId}`);
        });

        if (backToTop) {
            backToTop.classList.toggle('is-visible', window.scrollY > 400);
        }
    };

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
}
