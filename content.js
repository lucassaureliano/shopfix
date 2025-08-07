function updateAccessibility() {
    document.querySelectorAll('ul.row.shopee-search-item-result__items > li').forEach(e => {
        e.querySelectorAll('[aria-hidden]').forEach(a => a.removeAttribute('aria-hidden'));
        e.querySelectorAll('[aria-label]').forEach(a => a.removeAttribute('aria-label'));
        e.querySelectorAll('img').forEach(img => img.setAttribute('alt', ''));
        e.querySelectorAll('div.whitespace-normal, div.line-clamp-2').forEach(div => {
            div.setAttribute('role', 'heading');
            div.setAttribute('aria-level', '2');
            div.setAttribute('tabindex', '0');
        });
    });

    const similarHeading = document.querySelector('div.miIYkb');
    if (similarHeading) {
        similarHeading.setAttribute('role', 'heading');
        similarHeading.setAttribute('aria-level', '2');
    }

    const similarItems = document.querySelector('div.rBfdm_.row');
    if (similarItems) {
        similarItems.setAttribute('role', 'list');
        similarItems.querySelectorAll('div.wujux8').forEach(similarItem => {
            similarItem.setAttribute('role', 'listitem');
            similarItem.querySelectorAll('[aria-label]').forEach(a => a.removeAttribute('aria-label'));
            similarItem.querySelectorAll('img').forEach(img => img.setAttribute('alt', ''));
            similarItem.querySelectorAll('div.whitespace-normal, div.line-clamp-2').forEach(div => {
                div.setAttribute('role', 'heading');
                div.setAttribute('aria-level', '3');
            });
        });
    }

    const sortHeading = document.querySelector('.shopee-sort-bar__label');
    if (sortHeading) {
        sortHeading.setAttribute('role', 'heading');
        sortHeading.setAttribute('aria-level', '2');
    }

    const allStoreProducts = document.querySelector('div.shop-search-result-view');
    if (allStoreProducts) {
        allStoreProducts.setAttribute('role', 'list');
        allStoreProducts.querySelectorAll('div.shop-search-result-view__item').forEach(storeProduct => {
            storeProduct.setAttribute('role', 'listitem');
            storeProduct.querySelectorAll('[aria-hidden]').forEach(a => a.removeAttribute('aria-hidden'));
            storeProduct.querySelectorAll('[aria-label]').forEach(a => a.removeAttribute('aria-label'));
            storeProduct.querySelectorAll('img').forEach(img => img.setAttribute('alt', ''));
            storeProduct.querySelectorAll('div.line-clamp-2').forEach(div => {
                div.setAttribute('role', 'heading');
                div.setAttribute('aria-level', '3');
                div.setAttribute('tabindex', '0');
            });
        });
    }
}

window.addEventListener('load', function() {
    updateAccessibility();
});

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function() {
        updateAccessibility();
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
