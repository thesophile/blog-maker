console.log('Loading navbar...');

function initNavbar() {
    const saved = localStorage.getItem('theme');
    const osDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (osDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    function syncIcons(theme) {
        console.log(document.getElementById('theme-toggle'));
        console.log(document.getElementById('theme-toggle-mobile'));
        const icon = document.getElementById('theme-icon');
        const iconM = document.getElementById('theme-icon-mobile');
        const symbol = theme === 'dark' ? '☀' : '☾';
        if (icon) icon.textContent = symbol;
        if (iconM) iconM.textContent = symbol;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        syncIcons(theme);
    }


    syncIcons(theme);

    function toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    document.getElementById('theme-toggle').addEventListener('click', toggle);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggle);


    // Follow OS changes only if user hasn't set a manual preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}
