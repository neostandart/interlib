
function copyToClipboard(elemid) {
    let htmTarget = document.getElementById(elemid);
    if (htmTarget) {
        htmTarget.focus();
        try {
            navigator.clipboard.writeText(htmTarget.textContent);
        } catch (e) {
            console.warn(e);
        }
    }
}
