/**
 * Project description read more / less toggle
 */
export function toggleDescription(index) {
    const excerpt = document.getElementById(`desc-short-${index}`);
    const full = document.getElementById(`desc-full-${index}`);
    const label = document.getElementById(`btn-text-${index}`);
    const arrow = document.getElementById(`btn-icon-${index}`);

    if (!excerpt || !full) return;

    const isExpanded = full.style.display === 'block';

    full.style.display = isExpanded ? 'none' : 'block';
    excerpt.style.display = isExpanded ? 'block' : 'none';

    if (label) label.innerText = isExpanded ? 'Read More' : 'Read Less';
    if (arrow) arrow.className = isExpanded ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
}

window.toggleDescription = toggleDescription;
