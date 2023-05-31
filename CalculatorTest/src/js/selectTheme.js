let btnSwitchTheme = document.querySelector('.btn_select_theme');
let swithThemeImg = document.querySelector('.select_theme_svg');
let calculatorBackground = document.querySelector('.calculator');
let body = document.body;

let DarkTheme = true;

const Theme = {
    DARK: 'dark',
    LIGHT: 'light'
}

switchTheme(Theme.DARK);

btnSwitchTheme.addEventListener('click', function () {
    if (DarkTheme) {
        switchTheme(Theme.DARK);
        DarkTheme = !DarkTheme;
    } else {
        switchTheme(Theme.LIGHT);
        DarkTheme = !DarkTheme;
    }

})

function switchTheme(theme) {
    if (theme === 'light') {
        for (const button of buttons) {
            selectTheme(button, 'light_button');
        }
        selectTheme(body, 'light');        
        selectTheme(point, 'light_button');
        selectTheme(calculatorBackground, 'light_block');

        swithThemeImg.setAttribute('src', 'src/img/sunOnLight.svg');
    } else {
        for (const button of buttons) {
            selectTheme(button, 'dark_button');
        }
        selectTheme(body, 'dark');
        selectTheme(point, 'dark_button');
        selectTheme(calculatorBackground, 'dark_block');
        swithThemeImg.setAttribute('src', 'src/img/sunOffLight.svg');
    }
}

function selectTheme(elem, className) {
    elem.classList.remove('light', 'light_block', 'light_button', 'dark', 'dark_block', 'dark_button');
    elem.classList.add(className);
}