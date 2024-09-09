export function onHandleThemeChange() {
    const body = document.body;

    if (body.classList.contains('theme-light')) {
        body.classList.replace('theme-light', 'theme-dark');
    } else if (body.classList.contains('theme-dark')) {
        body.classList.replace('theme-dark', 'theme-light');
    } else {
        // If no theme class is present, default to 'theme-light'
        body.classList.add('theme-light');
    }
}
