/**
 * Phone mockup screenshot slider
 */
const slideTracker = {};

export function slidePhone(projectIndex, direction) {
    const slider = document.getElementById(`phone-slider-${projectIndex}`);
    if (!slider) return;

    const slides = slider.getElementsByClassName('phone-screen-img');
    const total = slides.length;
    if (total <= 1) return;

    if (slideTracker[projectIndex] === undefined) {
        slideTracker[projectIndex] = 0;
    }

    let next = slideTracker[projectIndex] + direction;
    if (next >= total) next = 0;
    else if (next < 0) next = total - 1;

    jumpToSlide(projectIndex, next);
}

export function jumpToSlide(projectIndex, targetIndex) {
    const slider = document.getElementById(`phone-slider-${projectIndex}`);
    if (!slider) return;

    slideTracker[projectIndex] = targetIndex;
    slider.style.transform = `translateX(-${targetIndex * 100}%)`;
}

// Expose for inline onclick handlers in EJS templates
window.slidePhone = slidePhone;
window.jumpToSlide = jumpToSlide;
