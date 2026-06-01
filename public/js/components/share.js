/**
 * Native share / clipboard fallback
 */
function initSharePortfolio() {
    const { shareTitle, shareText } = document.body.dataset;
    if (!shareTitle) return;

    window.sharePortfolio = async function sharePortfolio() {
        const shareData = {
            title: shareTitle,
            text: shareText || '',
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error(err);
            }
        }
    };
}

export { initSharePortfolio };
